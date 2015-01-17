---
layout: home
title: Design, Develop, Create
excerpt: A designer &amp; developer, currently writing a Ph.D.
---

<h2 class="banner-title stack">Full Stack Development</h2>

<ul id="process" class="scrollme">
	<li id="process-discuss" class="animateme" data-when="span" data-from="0.5" data-to="0" data-opacity="0.1" data-translatex="-200" data-rotatez="90">Discuss</li>
	<li id="process-design" class="animateme" data-when="enter" data-from="0.5" data-to="0" data-opacity="0.1" data-translatey="200" data-rotatez="90">Design</li>
	<li id="process-develop" class="animateme" data-when="enter" data-from="0.5" data-to="0" data-opacity="0.1" data-translatey="-200" data-rotatez="90">Develop</li>
	<li id="process-deliver" class="animateme" data-when="enter" data-from="0.5" data-to="0" data-opacity="0.1" data-translatex="200" data-rotatez="90">Deliver</li>
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


