---
layout: post
title: Automatically Mount your ownCloud folder with webDAV
excerpt: ownCloud provides a basic Command Line Tool for syncronising a folder with your cloud share, but you have to run it each time you want to sync. Using the webDAV capabilities of ownCloud you can mount your folder as a remote drive and work with it that way.
tags: [Cloud, SysAdmin, RaspberryPi, Linux]

---

>The instructions in this post were devised on a RaspberryPi running Raspbian GNU/Linux 7 (wheezy), but they should be applicable to other setups where you want command line access to an ownCloud folder.

## The Issue

Both of my RaspberryPi's run without any input devices attached to them, so I don't run GUI desktop environments on them. However, I do still want to be able to sync my ownCloud folder with them. Unfortunately the official ownCloud client is severely lacking when it comes to command line support. So here is how I get around it, by mounting my cloud folders via webDAV.

## The Solution

In order to access a webDAV share as a filesystem, you'll need to install the davfs2 package. It's in the repositories by default, so this step is easy:

<figure>
{% highlight bash %}
sudo apt-get install davfs2
{% endhighlight %}
<figcaption>Code Listing: Install davfs2</figcaption>
</figure>

davfs2 has a quirk if you are using Debian (or a Debian based variant), in which it doesn't have the correct permissions to run as a non-root user. You may see the error: `/sbin/mount.davfs: program is not setuid root` This can be fixed using one of the following commands:

<figure>
{% highlight bash %}
sudo dpkg-reconfigure davfs2
# or a more manual approach
sudo chmod u+s /usr/sbin/mount.davfs
{% endhighlight %}
<figcaption>Code Listing: Fix davfs2 setuid root error</figcaption>
</figure>

Now add a line to your `/etc/fstab` file to make mounting easier. Note we are specifying `noauto` here, we will perform the automatic mounting step later. `/etc/fstab` is often run **before** network initialisation, and therefore an automatic mount here will fail.

<figure>
{% highlight bash %}
https://cloud.example.com/webDAV/URL 	/media/cloud 	davfs 	noauto,user		0		0
{% endhighlight %}
<figcaption>Code Listing: /etc/fstab addition</figcaption>
</figure>

Add your user to the correct group:

<figure>
{% highlight bash %}
usermod -a -G davfs2 <username>
{% endhighlight %}
<figcaption>Code Listing: Add user to dav2fs group</figcaption>
</figure>

Now you should be able to mount your share and work with your files. You will be prompted for your username and password, and if you have set up ownCloud with a self-signed certificate, then you will be asked to confirm that you trust it.

<figure>
{% highlight bash %}
mount /media/cloud
umount /media/cloud
{% endhighlight %}
<figcaption>Code Listing: Test webDAV share mounting</figcaption>
</figure>

### Storing Credentials

It's pretty inconvenient to have to type in your username / password and accept your self-signed certificate every time you want to mount your drive. It's also a hurdle which needs to be overcome if you want to be able to automatically have your webDAV share mounted. So let's break it down and take care of the username / password first.

davfs2 makes use of the `/home/user/.davfs2/secrets` file for storing such credentials. You simply need to create this with the correct permissions and then provide the host, username and password details.

<figure>
{% highlight bash %}
touch /home/user/.dav2fs/secrets
chmod 0600 /home/user/.dav2fs/secrets
echo "https://cloud.example.com/webDAV/URL 	<username>	<password>" > /home/user/.dav2fs/secrets
{% endhighlight %}
<figcaption>Code Listing: Creating a secrets file for login</figcaption>
</figure>

After that step, you will be able to mount your share without providing a username and password, but you will still be asked if you trust your self-signed certificate (if you are using one). If that's the case, let's take care of it now.

### Accepting a Self Signed Certificate

If you created a self-signed certificate for ownCloud, then you should have the `server.crt` &amp; `server.key` on your server. We need to convert the `server.crt` into a `.pem` certificate that will work with davfs2:

<figure>
{% highlight bash %}
openssl x509 -in server.crt -out server.pem -outform PEM
{% endhighlight %}
<figcaption>Code Listing: Convert server certificate format</figcaption>
</figure>

You'll need to store the new `server.pem` that we just created in `/home/user/.davfs2/certs/server.pem` (you may have to create the certs folder). Then you need to make davfs2 aware of it's existence, which is done in the config file `/home/user/.davfs2/davfs2.conf`.

<figure>
{% highlight bash %}
# find the line which starts:
# servercert
# and change it to:
servercert	server.pem
{% endhighlight %}
<figcaption>Code Listing: modify davfs2.conf</figcaption>
</figure>

Once you have done that, you should be able to mount your webDAV share without any user input being required. Give it a test:

<figure>
{% highlight bash %}
mount /media/cloud
umount /media/cloud
{% endhighlight %}
<figcaption>Code Listing: Test webDAV share mounting</figcaption>
</figure>

### Automatic Share Mounting

Remember when we edited the `/etc/fstab` file we used the `noauto` option? Well, what if you do want your share mounted automatically?

Because we can't mount a webDAV share until after the network connection has been established, we can't use the `auto` option in our `/etc/fstab` file. Instead, we will take advantage of everything which we have set up so far to use one simple command to take care of this.

Your `/etc/rc.local` file is executed after boot, and so is an excellent place to provide the functionality we are looking for, so simply add:

<figure>
{% highlight bash %}
mount -a
# make sure this command is above the exit 0 command
{% endhighlight %}
<figcaption>Code Listing: /etc/rc.local addition for auto-mounting</figcaption>
</figure>

Assuming you have a network connection when you boot, you should now have your ownCloud webDAV share mounted automatically. Wasn't that hard, was it?

&mdash;Adam
