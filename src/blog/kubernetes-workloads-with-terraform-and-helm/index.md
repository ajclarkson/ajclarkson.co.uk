---
title: "Managing Kubernetes Workloads with Terraform and Helm"
excerpt: "By combining Helm and Terraform it is possible to provision an entire Kubernetes clusters workloads with a single command. I use this with my home server to provide easy stateful management of my workloads, and simple disaster recovery"
tags: []
date: 2022-05-15
---

At home my workloads are served by a Kubernetes cluster running on Raspberry Pi nodes. It's reliable and flexible, and also gives me a great platform to experiment with. As I'm often trying out new ideas thing inevitably break, so I bring some production concepts to my own server, such as managing the provisioning of workloads in code. 

This post will cover how I use a combination of Terraform and Helm to manage the workloads running on my cluster so that everything is easily recreatable.

## Creating a Kubernetes Sandbox

I'd recommend following along against a testing or sandbox cluster to experiment with. A really easy way to do that is with [k3d](https://k3d.io), which allows you to spin up a cluster on your local machine using docker. It uses [k3s](https://k3s.dev) under the hood, so my go to command for a test cluster is:

```bash
k3d cluster create tf-demo \
  --k3s-arg "--disable=servicelb@server:0" \
  --k3s-arg "--disable=traefik@server:0"
```

This will give you a single node server with the bundled loadbalancer and ingress removed. It will also write an entry into your `~/.kube/config` file to provide access.

## Getting Started

The rest of the post assumes you have [terraform](https://terraform.io) installed and know how to use it for applying changes. We won't worry about complex project structures for an example as simple as this, so go ahead and create a single `main.tf` file which will contain all of our terraform configuration. First we need to setup the Kubernetes provider:

```hcl
terraform {
  required_version = "~> 1.1.8"
  required_providers {
    kubernetes = {
      version = "~> 2.11.0"
    }
  }
}

provider "kubernetes" {
  config_path = "~/.kube/config"
  config_context = "k3d-tf-demo"
}
```

All the information the kubernetes provider requires is the location of your kubeconfig, and unless you want to use the `default` context within it, the name of the context to use to access your cluster. If you're using k3d like I am here, the context will be `k3d-<CLUSTER_NAME>`. 

## Our First Resource

Let's create a namespace to check everything is working. This is as simple as adding the following to your `main.tf`:

```hcl
resource "kubernetes_namespace" "hello_world" {
  metadata {
    name = "hello_world"
  }
}
```

Initialise the providers and apply the change in the usual way:

```bash
terraform init
terraform apply
```

If everything is hooked up correctly terraform should return a plan showing your namespace will be created, and wait for your confirmation. Apply the plan, then check the namespaces in your cluster:

```bash
kubectl get namespaces
```
Your new `hello-world` namespace should be in the list, and with that you've created your first kubernetes resource with terraform! From there, you can start deploying any workload that is supported by kubernetes, there's extensive docs on how in the [Kubernetes Terraform Provider docs](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs).


## What about Helm?

If you're familiar with Kubernetes you'll know that while it's perfectly possible to represent all of your workloads in pure Kubernetes manifests, it can lead to a lot of duplication and copying and pasting defaults. The [Helm](https://helm.sh/) package manager for Kubernetes is a widely used solution to this, providing simple templates to use to deploy fully configured application stacks with a single command.

### Terraform vs Helm

In many regards Helm could be seen as an alternative to managing your Kubernetes manifests in terraform. It is stateful, and keeps a record of what is deployed in your cluster, provides rollbacks and upgrade mechanisms. So it achieves many of the things we set out to in this post. One thing it doesn't easily do though, is provide one single overall state for the workloads in the cluster. My aim is to be able to run a single command and have everything set to a known state.

So I opted to also use the Helm provider for terraform. This allows you to declare Helm resources in the cluster, benefiting from the simple package manager templating, but allowing the state to be maintained in one central place. Now I can run a simple `terraform apply` and have my mix of pure Kubernetes resources and Helm charts all deployed. It also has the benefit that variables can be passed and shared between both resources, something that would be far more complex if I was using a blend of terraform and the standalone Helm commands.

### Drawbacks 

The main drawback I have found to this so far is that Terraform manages the state of the helm resource in a very light touch way. As such it doesn't expose what resources are actually getting created by a helm chart, Terraform is blind to this. The terraform state actually represents the configuration of a chart. So when you change or override a value, you will see a diff of the chart configuration and not explicitly what resources will change in your cluster. 

For my use case the benefits far outweight this, so I'm comfortable with it, but I'm putting it out there for you to make your own choice.


## Terraform at the Helm

First we add the provider:

```hcl
terraform {
  required_version = "~> 1.1.8"
  required_providers {
    kubernetes = {
      version = "~> 2.11.0"
    }
    helm = {
      version = "~> 2.5.0"
    }
  }
}

provider "kubernetes" {
  config_path = "~/.kube/config"
  config_context = "k3d-tf-demo"
}

provider "helm" {
  kubernetes {
    config_path = "~/.kube/config"
    config_context = "k3d-tf-demo"
  }
}
```

You'll notice the configuration of the provider is pretty much identical to the Kubernetes one, and as such it has exactly the same requirements.

Let's add a basic helm chart example. We'll deploy an `mqtt` server to the cluster, but really we could have chosen anything for this. Add the following resource definition to your `main.tf`:

```hcl
resource "helm_release" "mqtt" {
  name      = "mqtt"
  namespace = kubernetes_namespace.hello_world.metadata[0].name

  repository = "https://k8s-at-home.com/charts/"
  chart      = "mosquitto"
}
```

Applying these changes to the cluster will create a default installation of the eclipse mosquitto server, according to the [k8s-at-home mqtt helm chart](https://artifacthub.io/packages/helm/k8s-at-home/mosquitto). 

```hcl
namespace = kubernetes_namespace.hello_world.metadata[0].name
```

The namespace declaration takes the value we provided when creating the namespace resource and injects it here. Not only does this remove duplication, it allows terraform to properly order resource creation by creating a dependency. Now the namespace will always be created before the helm resource.

After applying, running `kubectl get all -n hello_world` will show that both a pod and a service have been added to your cluster as part of the mqtt deployment, and you just provisioned workloads using a combination of terraform and helm!

This only scratches the surface, and doesn't consider how to override configuration options using the helm provider, but this is covered in [their documentation](https://registry.terraform.io/providers/hashicorp/helm/latest/docs), and will feature in future posts here as well.

## Disaster Recovery

If you're following along with a `k3d` cluster, or your own test servers we can demonstrate the real value of a setup like this. 

```bash
k3d cluster delete tf-demo
```

The worst happens, the cluster is completely corrupt and you have to start from scratch.

Recreating the cluster and getting back to the running state is as simple as:

```bash
k3d cluster create tf-demo \
  --k3s-arg "--disable=servicelb@server:0" \
  --k3s-arg "--disable=traefik@server:0"
terraform apply
```
And we're back!

## Summary

This post has introduced a way of provisioning workloads in a Kubernetes cluster that takes advantage of the strengths of both Terraform and Helm to reduce disaster recovery to a single operation. The example here is very simplistic, but the concept can be used to run any application in your cluster. 

## Resources

- [k3d](https://k3d.io) 
- [Kubernetes Terraform Provider Documentation](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs)
- [Helm Terraform Provider Documentation](https://registry.terraform.io/providers/hashicorp/helm/latest/docs)