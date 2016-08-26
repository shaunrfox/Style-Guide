---
layout: post
title:  "CSS Selectors"
date:   2016-05-20
categories: CSS
---

CSS selectors apply styling to all elements that match the given criteria.

In CSS, specificity and order matters. The most specific match will always apply it's styles, and if there's a tie, the last in the source-order will win.

## .class

This is the most common way to attach styling to an element. Creating a good system for your class name scheme will help avoid collisions and provide clarity for everyone on the project.

---

## element

This selector will affect all matching elements. For example, the css selector `div` will affect all `<div>` elements.

---

## Combining Selectors

Now that you know about the two basic selectors, there are various ways we can combine selectors to be more specific, or be more efficient.

### selector, selector

To keep your code DRY, you can list selectors that will share the same attributes. You do this by putting all selectors in a comma separated list.

### .class-1.class-2

For an element that has multiple classes, the selector can be written: `.class-1.class-2`. It's important to note that this selector is more specific then either classes on their own. If you use a property that has been defined on either of the individual classes, this new selector will override it. If there are properties that are unique to any of the selectors, that property will not be overridden. The determination of how these rules are applied is called "cascading".

### selector selector

Adding a space between selectors targets the first selector's children, who match the second selector.

##### Example:

{% highlight html %}
<div class="class-1" id="div-1">
  <div class="class-2" id="div-2"></div>
  <div class="class-2" id="div-3"></div>
</div>
<div class="class-2" id="div-4"></div>
{% endhighlight %}

{% highlight scss %}
.class-1 {
  background: red;
}

.class-2 {
  background: blue;
}

.class-1 .class-2{
  background: green;
}
{% endhighlight %}

In this example, div-1 will be red. div-2 and div-3 will be green. div-4 will be blue.

### SCSS

nesting
&

selector > selector

attribute selectors
data-
input[type="text"]
[class="ico-*"]

browser prefixes

@media Queries

do not do this
#id
lots of nesting
*
!important