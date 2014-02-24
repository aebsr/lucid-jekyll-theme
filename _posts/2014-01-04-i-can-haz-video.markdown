---
layout: post
title:  I Can Haz Video
description: "Simple example post with plugin free video support."
tags: [lucid, jekyll, video]
---

Bruh, I can haz video? Why yes, yes you can.

<div class="video">
    <iframe width="640" height="480" src="//www.youtube.com/embed/_OBlgSz8sSM?rel=0" frameborder="0" allowfullscreen></iframe>
</div>

## The Code

Just use the embed code from your service of choice, wrapped in a `div` with the class of `video`.

**Pro Tip:** If using HD video add the class `hd` to your div.

~~~ html
<div class="video">
    <iframe width="640" height="480" src="//www.youtube.com/embed/_OBlgSz8sSM?rel=0" frameborder="0" allowfullscreen></iframe>
</div>
~~~

The default styling creates a responsive video container with 4:3 dimensions. The `hd` class maintains a 16:9 dimension.
