---
layout: home
title: Hey, I'm <a href="/about/">Adam</a>
excerpt: A designer &amp; developer, currently writing a Ph.D.
---

<h2 class="banner-title stack">Full Stack Development</h2>

<ul id="process">
	<li id="process-discuss">Discuss</li>
	<li id="process-design">Design</li>
	<li id="process-develop">Develop</li>
	<li id="process-deliver">Deliver</li>
</ul>


<div id='services'>
	<section id="skills-intro">
		<h4>From Branding to Code Optimisation, I've got you covered</h4>
		<p>With a background in Software Engineering and an eye for design, I work on all manner of design and development.</p>
		<p>Let's have a chat about your next project.</p>

	</section>

	<section id="hire-box">
		<img src='/static/images/ajclarkson.jpg' alt='Adam Clarkson' class='avatar' />
		<a href="mailto:adam@ajclarkson.co.uk" class='hire-link'>Hire Me</a>
		<a href="http://twitter.com/ajclarkson" class='twitter-link'>@ajclarkson</a>
	</section>
</div>

## Recent Blog Posts

{% for post in site.categories['blog'] limit:3 %}

### [{{ post.title }}]({{ post.url }})

<span class="meta">{{ post.date | date_to_long_string }}</span>

{{ post.excerpt }}
<hr />
{% endfor %}

You can find more posts in the [archive](/blog/).


