---
layout: post
title:  "CSS Text Handling"
date:   2016-05-20
categories: CSS
---

## font-family

**EXAMPLE VALUES:** Depends on your project.

To set what font gets used, use the `font-family` property. In most of our projects this is done for you in our base css.

However, if you want to change what font is used, you should have numerous fallbacks like.

{% highlight css %}
.my-class {
    font-family: Helvetica, Arial, sans-serif;
}
{% endhighlight %}

In this example Helvetica will be used if it's installed on the users computer. If not, it'll fall back to Arial, etc...

If you want to have them download a font, you'll want to use `@font-face`. Here's a helpful resource **TODO PROVIDE RESOURCE**

---

## font-size

**EXAMPLE VALUES:** `12px`, `1.2rem`, `1.4rem`, `1.6rem`

`font-size` controls how big the words will appear.

There are several units you can use, but we recommend pixels and root ems. Root ems are a percentage of the font size set on the html element.

As part of our code, we have a mixin that you should use in most cases. It will take care of both rems and a pixel fallback.

### usage

{% highlight css %}
.my-class {
  @include font-size(1.6);
}
{% endhighlight %}

### outputs

{% highlight css %}
.my-class {
  font-size: 16px;
  font-size: 1.6rem;
}
{% endhighlight %}

---

## color

**EXAMPLE VALUES:** `$off-black`, `#ffffff`, `tint($mid-grey, 0.7)`, `$red`, `rgba(255, 255, 255, 0.5)`

`color` changes the color of the text.

In our code, we have variables corresponding to color variables. [SCSS Color Variables]({{site.baseurl}}/#scss-color-variables )

---

## line-height

**EXAMPLE VALUES:** `12px`, `30px`

`line-height` sets the vertical spacing between lines of text. We mostly use it to vertically center a single line of text. If there is a chance your text might wrap, use a different method as detailed by [Centering in CSS: A Complete Guide, by CSS Tricks](https://css-tricks.com/centering-css-complete-guide/)

**todo explain how we do this to center texts in buttons**


---

## text-align

---

## font-weight

---

## font-style

---

## text-transform

---

## letter-spacing

---

## text-decoration

---

## whitespace



