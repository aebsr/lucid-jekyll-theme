---
layout: page
title: Theme Setup
---

1. Clone the `_layouts` and `lucid` folders.
2. Set your `index.(md/html)` to use the `Archive` theme

{% highlight yaml %}
---
layout: archive
---
{% endhighlight %}

**Note:** Lucid Theme does not output the content found in your `index` file.

Now set the following variables in your `_config.yml`

{% highlight yaml %}
title:        Site Title
tagline:      Catchy Tag Line
description:  Brief site description can include inline html elements
url:          http://coolsite.com
author:
  name:       Your Name
  bio:        Brief bio can include inline html elements and will appear on each post
  email:      name@website.com
  twitter:    @username
  google_verify:
  google_plus:

analytics:    UA-xxxxxxxx-1
permalink:    pretty
pygments:     true
markdown:     kramdown
paginate:     4

links:
  - title: About
    url: /about
  - title: Lucid Theme
    url: https://github.com/aebsr/lucid-jekyll-theme
    external: true
{% endhighlight %}
