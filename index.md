---
layout: page
title: Hey, I'm <a href="/about/">Adam</a>
excerpt: A designer &amp; developer, currently writing a PhD.
---

## Recent Blog Posts

{% for post in site.categories['blog'] limit:3 %}

### [{{ post.title }}]({{ post.url }})

<span class="meta">{{ post.date | date_to_long_string }}</span>

{{ post.excerpt }}
<hr />
{% endfor %}

You can find more posts in the [archive](/blog/).


