---
title: Jekyll Post Navigation Within a Category
excerpt: Jekyll comes equipped with `post.next` and `post.previous` links, but how about just moving through the posts within one category?
tags: [Jekyll, Development, Ruby]
date: 2013-10-16
hidden: true
---

<div class="post-body__deprecation-warning"><p><strong>Warning! This post is old!</strong></p>
<p>This post was originally written in 2013, and I haven't used Jekyll for a long time now. I kept the post here as it still sees some traffic, but it is now hidden from the blog archive. You might still find the information useful here, but the content is not being updated / maintained.</p>
</div>

{% image "directions.jpeg", page.url, "Directions" %}

I'm not alone in using Jekyll to power a site which offers more than a blog. I use two Jekyll categories on my site, "Blog" for blog posts, and "Projects" for my portfolio pages. This allows me to keep two distinct default layouts, and make sure the posts only appear on the appropriate pages. However, when using `post.next` or `post.previous`, no attention is paid to what category a post is in. It simply moves between them all based on the date that they were published.

## The Solution
Jekyll has a very powerful plugin interface for writing "generators" which perform certain tasks when your site is built. After searching around there were a few different solutions to this problem, and one that was almost there but stopped just short. So I wrote my own generator. The logic is simple enough, as you will see from the code. It steps through each category, sorting the posts and adding both a next and previous `in_category` tag to the post data.

```ruby
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
```

Simply put that script into your _plugins directory (create it under your site root if it doesn't exist). Here's an example of how it is used on this site:

```ruby
{{"{% if page.next_in_category != nil "}}%}
	<a href="{{"{{page.next_in_category.url"}}}}" class="next-link">Older Post</a>
{{"{% endif "}}%}
{{"{% if page.previous_in_category != nil "}}%}
	<a href="{{"{{page.previous_in_category.url"}}}}" class="previous-link">Newer Post</a>
{{"{% endif "}}%}
```

Note how no reference is made to the current category. This is by design, as it means I can share this code as a partial, and if I wanted to utilise this type of navigation on my portofolio items I could slot it in without the need to amend it.
