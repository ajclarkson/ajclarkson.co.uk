---
title: 'Turning it up to 11-ty'
excerpt: After wanting to give my personal site a refresh, I realised that the outdated Gatsby version needed signifcant work to get it building again. Gatsby and react felt a bit heavy weight for such a simple site, so I took another look at the market and found 11ty.
tags: [11ty]
date: 2022-02-26
---
{% image "eleven.jpg", page.url, "This go all the way to eleven" %}

Coming back to my own site after some time, and wanting to simply update the masthead text, I realised my old stack (React / Gatsby / Netlify) had fallen out of date, and the Netlify builds weren't working due to some severely out of date dependencies. Staring down the barrel of a couple of major version upgrades, I decided to take a look at the static site generator market again and see who the new contenders were.

## Enter 11ty

[11ty](https://11ty.dev) (pronounced eleventy) is a blazingly fast static site generator written in Javascript. It doesn't come bundled with heavy frontend frameworks, and out of the box prefers lightweight templating such as nunjucks. It's a stack I felt completely at home with, closely related to the technologies that I encounter daily at work, and so I was immediately interested.

Thankfully my posts were already portable, as everything was written in markdown, so with some minimal configuration and a couple of nunjucks layouts I was up and running. Swapping 11ty in as the engine took a matter of hours, and most of that was optimising the layout. This really feels like a site generator that gets out of your way. It's zero configuration for almost everything and I haven't needed to tweak the options very much at all. It feels this is how the software behind a very simple site should work.

Getting the site up to date and running again has been refreshing, and I'm hoping it kick starts my enthusiasm to write a few new posts here. With that in mind...

## Cleaning House

I kept a couple of old articles that still get some traffic, and occasionally people still drop by with a comment on them, but everything else that has grown irrelevant with time has gone. I'm intending to add some new content around my current areas of interest from Engineering leadership to my passion for home automation. Watch this space...
