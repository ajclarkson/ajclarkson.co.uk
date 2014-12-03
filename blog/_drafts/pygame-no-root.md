---
layout: post
title: PyGame Framebuffer Access for Non-Root Users
excerpt: When researching how to use pygame to output to the linux framebuffer I came across the issue of my script failing to write to the framebuffer unless it had root privilages. Google showed me quite a few other people had this problem as well, so I set out to find a solution.
tags: [Python, Development]

---

## The Issue

When trying to render graphics from the console using pygame, root access is required to make any modification to the framebuffer. Spotting that this wasn't the case with other framebuffer programs such as `fbi`, there had to be a solution. By passing some driver environment variables to python it is possible to overcome this problem and allow your framebuffer program to run as a regular, non-root user.

## The Solution

**Note:** These instructions were devised while developing a RaspberryPi framebuffer application, so there may be some subtle differences with your setup if you are not using a RaspberryPi. The core principles still apply though.

It's actually pretty straight forward to solve this issue, once you know where the problem lies. It's related to how python treats the input/output drivers which are accessed for mouse control and framebuffer applications. Here's 3 easy steps to make sure you can run without root privilages.

### 1. Check the Framebuffer Permissions

This should be correct as default, but it can't hurt to take a look. The framebuffer should be owned by root, but accessible by any member of the 'video' group:

<figure>
{% highlight bash %}
$ ls -la /dev/ | grep fb
crw-rw---T  1 root video    29,   0 Jan  1  1970 fb0
{% endhighlight %}
<figcaption>Code Listing: Checking the framebuffer permissions</figcaption>
</figure>

If the permissions aren't correct you can fix them with:

<figure>
{% highlight bash %}
sudo chown root:video /dev/fb*
{% endhighlight %}
<figcaption>Code Listing: Fixing the framebuffer permissions</figcaption>
</figure>

### 2. Check User Groups

In order for the previous step to mean anything, you need to make sure your user is actually in the 'video' group:

<figure>
{% highlight bash %}
$ groups
ajclarkson sudo audio video plugdev
{% endhighlight %}
<figcaption>Code Listing: Checking the user's groups</figcaption>
</figure>
If you aren't in the video group, go ahead and add yourself:

<figure>
{% highlight bash %}
sudo usermod -a -G video <username>
{% endhighlight %}
<figcaption>Code Listing: Adding a user to the video group</figcaption>
</figure>

### 3. Passing Python Environment Variables

The first two steps should have been set by default, it's this final one which gives your script the information it needs to prevent root level access calls. The following three commands provide SDL video driver information for the framebuffer, and override pygames requirement to have a mouse driver (if you're writing to the framebuffer you are probably in an environment where the mouse isn't needed).

<figure>
{% highlight python %}
# ensure the number in 'fb0' matches the device name of your framebuffer
os.putenv('SDL_FBDEV', '/dev/fb0')
os.putenv('SDL_VIDEODRIVER', 'fbcon')
os.putenv('SDL_NOMOUSE', '1')
{% endhighlight %}
<figcaption>Code Listing: Setting Framebuffer &amp; Mouse Driver Environment Variables</figcaption>
</figure>

And that should be that. After undertaking these exact steps I was able to write to the framebuffer on a RaspberryPi running the script as a regular user. This features heavily in my upcoming Python powered RaspberryPi photo slideshow application, it's in final testing now, so I'll be posting about it really soon!

&mdash;Adam
