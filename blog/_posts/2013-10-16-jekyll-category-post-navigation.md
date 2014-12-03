---
layout: post
title: Jekyll Post Navigation Within a Category
excerpt: Jekyll comes equipped with `post.next` and `post.previous` links, but how about just moving through the posts within one category?
tags: [Jekyll, Development, Ruby]

---
Jekyll comes with a number of helper functions rolled into it as default. They're accessed using the liquid template tags. One particularly useful one is to provide a link to the next and previous posts in your blog. Simply by using `post.next` or `post.previous`.

## The Issue
I'm not alone in using Jekyll to power a site which offers more than a blog. I use two Jekyll categories on my site, "Blog" for blog posts, and "Projects" for my portfolio pages. This allows me to keep two distinct default layouts, and make sure the posts only appear on the appropriate pages. However, when using `post.next` or `post.previous`, no attention is paid to what category a post is in. It simply moves between them all based on the date that they were published.

## The Solution
Jekyll has a very powerful plugin interface for writing "generators" which perform certain tasks when your site is built. After searching around there were a few different solutions to this problem, and one that was almost there but stopped just short. So I wrote my own generator. The logic is simple enough, as you will see from the code. It steps through each category, sorting the posts and adding both a next and previous `in_category` tag to the post data.

<figure>
{% highlight ruby %}
module Jekyll
	class WithinCategoryPostNavigation < Generator
		def generate(site)
			site.categories.each_pair do |category, posts|
				posts.sort! { |a,b| b <=> a}
				posts.each do |post|
					index = posts.index post
					next_in_category = nil
					previous_in_category = nil
					if index
						if index < posts.length - 1
							next_in_category = posts[index + 1]
						end
						if index > 0
							previous_in_category = posts[index - 1]
						end
					end
					post.data["next_in_category"] = next_in_category unless next_in_category.nil?
					post.data["previous_in_category"] = previous_in_category unless previous_in_category.nil?
				end
			end
		end
	end
end
{% endhighlight %}
<figcaption>Code Listing: within_category_post_navigation.rb</figcaption>
</figure>

Simply put that script into your _plugins directory (create it under your site root if it doesn't exist). Here's an example of how it is used on this site:

<figure>
{% highlight html %}
{{"{% if page.next_in_category != nil "}}%}
	<a href="{{"{{page.next_in_category.url"}}}}" class="next-link">Older Post</a>
{{"{% endif "}}%}
{{"{% if page.previous_in_category != nil "}}%}
	<a href="{{"{{page.previous_in_category.url"}}}}" class="previous-link">Newer Post</a>
{{"{% endif "}}%}
{% endhighlight %}
<figcaption>Code Listing: utilising the next_in_category and previous_in_category tags.</figcaption>
</figure>

Note how no reference is made to the current category. This is by design, as it means I can share this code as a partial, and if I wanted to utilise this type of navigation on my portofolio items I could slot it in without the need to amend it.

&mdash;Adam