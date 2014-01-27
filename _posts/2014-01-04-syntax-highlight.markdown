---
layout: post
title: Syntax Highlighting
description: "Demo post displaying the various ways of highlighting code in Markdown."
---

{% highlight css %}
html {
  height: 100%;
  font: 400 1.0625em/1.75 "Ubuntu", sans-serif;
}
{% endhighlight %}

Line numbering enabled:

{% highlight html linenos %}
{% raw %}
<nav class="pagination" role="navigation">
    {% if page.previous %}
        <a href="{{ site.url }}{{ page.previous.url }}" class="btn" title="{{ page.previous.title }}">Previous article</a>
    {% endif %}
    {% if page.next %}
        <a href="{{ site.url }}{{ page.next.url }}" class="btn" title="{{ page.next.title }}">Next article</a>
    {% endif %}
</nav><!-- /.pagination -->
{% endraw %}
{% endhighlight %}

{% highlight ruby %}
# Ruby
desired_method = :upcase
str = "Hello World!"

str.send(desired_method) # => "Hello World!"

# Send, sends a message to the Object
{% endhighlight %}

### Fenced Code Blocks

This theme wasn't meant to be overly flexible. Modifying code in `site.css`, `site.min.css` and `pygments.css` is fine, but would make it difficult to upgrade [Lucid Theme](https://github.com/aebsr/lucid-jekyll-theme) in the future.

~~~ css
html {
  height: 100%;
  font: 400 1.0625em/1.75 "Ubuntu", sans-serif;
}
~~~

~~~ html
{% raw %}<nav class="pagination" role="navigation">
    {% if page.previous %}
        <a href="{{ site.url }}{{ page.previous.url }}" class="btn" title="{{ page.previous.title }}">Previous article</a>
    {% endif %}
    {% if page.next %}
        <a href="{{ site.url }}{{ page.next.url }}" class="btn" title="{{ page.next.title }}">Next article</a>
    {% endif %}
</nav><!-- /.pagination -->{% endraw %}
~~~

~~~ ruby
# Ruby
desired_method = :upcase
str = "Hello World!"

str.send(desired_method) # => "Hello World!"

# Send, sends a message to the Object
~~~
