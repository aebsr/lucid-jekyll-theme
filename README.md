
# Lucid Theme

Lucid Theme is a simple, responsive and content first theme for jekyll. It offers a few key features that set it apart from others.

### Simplicity

- Fully responsive templates
- Image free layouts, with the exception of the favicon
- Doesn't make use of any JavaScript libraries

### Design & Typography

This these makes use of [Ubuntu](http://www.google.com/fonts/specimen/Ubuntu) and [Exo 2](http://www.google.com/fonts/specimen/Exo+2) powered by Google Fonts.

The base font size is an assertive 17 pixels with an average of 73 characters per line on desktops, bumping up against optimal line length's upper end. Yay for readability!

There's not much more I can say about the design besides the decission on when to collapse and expose the navigation was a content decision not a design one. If there's room, the nav is exposed. If there isn't, it's collapsed. Oh and the colors, best described as what looked best on a retina macbook pro at 3am in a dark room.

## Setup

If you haven't already, [Install Jekyll](http://jekyllrb.com/), fork [Lucid Theme](http://github.com/aebsr/lucid-jekyll-theme) and clone it to your computer. Edit the `_config.yml` as you see fit. Use the sample posts in the `_posts` folder as a guide.

### Theming An Existing Jekyll Blog

1. Clone the `_layouts` and `lucid` folders.
2. Set your `index.(md/html)` to use the `Archive` theme

``` yaml
---
layout: archive
---
```

**Note:** Lucid Theme does not output the content found in your `index` file.

3. Set the following variables in your `_config.yml`

``` yaml
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
```

## Support

Ping me on Twitter (@aebsr)[http://aeb.sr] with questions or kudos. If you spot something broken or that could be done better file a (GitHub Issue)[https://github.com/aebsr/lucid-jekyll-theme/issues].

## License

This is a free and open source project distributed under the GNU General Public License version 3 or later. You are free to use this theme without disclaimer. However, I'd love to follow whatever you make it.
