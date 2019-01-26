---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

bg: "rails.jpg"
layout: page
title: "Archives"
crawlertitle: "DuDu's Blog"
summary: "beomdu's Archives Blog"
---

{% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}

  {% for post in posts %}
  <h2 class="category-key" id="{{ t | downcase }}"><a href="{{ post.url | relative_url}}">{{ post.title }}</a></h2>

  <ul class="year">
      {% if post.tags contains t %}
        <li>
          {% if post.lastmod %}
            <span class="description">{{ post.description }}</span>
            <span class="date">{{ post.lastmod | date: "%Y-%m-%d"  }}</span>
          {% else %}
            <span class="description">{{ post.description }}</span>
            <span class="date">{{ post.date | date: "%Y-%m-%d"  }}</span>
          {% endif %}
        </li>
      {% endif %}
  </ul>
  {% endfor %}
{% endfor %}
