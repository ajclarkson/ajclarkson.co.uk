---
title: HomeOps - Managing My Infrastructure as Code
excerpt: With a desire to have a recreatable state across my changing server setup, I decided it was time to apply best practices at home and automate my server management with Ansible.
tags: [HomeOps, SysAdmin, RaspberryPi, Linux, Ansible]
date: 2019-01-13
---


{% image "switch.jpg", page.url, "Network Switch" %}

I'm a developer, and as a result of that I have the overwhelming urge to experiment with shiny new technologies and different ways of doing things. I've accepted that and I'm fine with it - but it doesn't always align nicely with running some stable servers at home. Deciding to switch to a new application, try the latest version, or a whole different paradigm has come back to bite me on far too many occassions. That dreaded feeling when realising it's probably easier to remedy the outcome of an experiment with a fresh start is one I'm sure many are familiar with. If like mine, your home server box was always some frankenstein evolution over time, bolting things in as you need them - then it can be quite daunting with being faced with needing to reproduce that from scratch.

I changed my approach a couple of years ago to running everything in docker containers. This gave me a much higher level of confidence in my platform for experimenting. I could spin up and throw away containers, knowing that they were sandboxed nicely from everything else on the system. It was a fantastic leap forward for how quickly I could reprovision a server, using tools such as [Rancher](https://rancher.io) I was able to write Docker Compose files and have the whole thing stored in a repository, so if (and more realistically when) everything went wrong, it was reasonably trivial to rebuild back to a known state.

This was a huge leap forward for me in terms of home server management. Then I started to look at other platforms. I'm moving away from my one single server box running Rancher, and I've thrown more RaspberryPis into the mix. That adds another layer of complexity. I could treat my server as a pet originally, from provisioning point of view. Sure if I had to ssh in and set the network and do a bit of configuration with apt, I could live with that. But do I want to do it every time I add a new host to the network? In cases where I don't want to run docker, do I want to remember exactly what I installed and how I configured it? In short, no. This stuff needed to be in code so that I can just run some scripts and have everything up.

## Enter, Ansible

If you've spent any time around server provisioning or configuration management then you have likely at least seen [Ansible](https://github.com/ansible/ansible). It's an open source python tool which essentially lets you write "playbooks" (collections of scripts) to run on remote hosts. The inventory management system means that you can target individual hosts, or groups of hosts. It's a really powerful tool for being able to create a reproducible state of your infrastructure. It's also really easy to work with once you understand the basics, essentially just a collection of YAML files providing the instructions.

With this, a new project was born. The [HomeOps](https://gitlab.com/ajclarkson/homeops) project represents my (new) infrastructure as code. As I migrate from my old server any new physically boxes will get a playbook here to configure them.

## Where to Start

Ansible is great, if you can do a direct host -> IP mapping. When throwing new boxes onto the network they are getting IP addresses from DHCP, so it's a little tricky to reliably use with Ansible in this way. The first thing that I implemented for [HomeOps](https://gitlab.com/ajclarkson/homeops) was my `init_host` playbook. This allows you to provide the IP address that was assigned by DHCP, your desired static IP, and your desired hostname as arguments to the ansible command, with the outcome being that the host is configured with these values. From then you have a much more easily targetable host for other playbooks. This playbook is a more dynamic use case than ansible is really designed for, but there aren't many other options when it comes to the first time setup!

The next post in this series will show the first working example from HomeOps which is to configure a RaspberryPi Model B to act as the DHCP and DNS server for my home network.