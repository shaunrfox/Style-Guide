---
layout: post
title:  "CSS Display"
date:   2016-05-20
categories: CSS
---

##### EXAMPLE VALUES: `inline`, `block`, `inline-block`, `table`, `none`

> "Every element on a web page is a rectangular box. The display property in CSS determines just how that rectangular box behaves." &mdash;CSS Tricks

<https://css-tricks.com/almanac/properties/d/display/>

---

## display: inline;

These elements are things that behave like text. They're primarily relative to a baseline and don't have much ability to affect the layout of other elements on the page.

---

## display: block;

These elements are things like `<div>` and `<section>`. They will behave like rectangles and they're the building blocks of web layouts.

---

## display: inline-block;

This is kind of a mix of the two above. You can set some of the same "physical" characteristics of `block`, but the element is still relative to a baseline (of text, for instance).

---

## display: table

This can be used to make regular block elements behave more like a table. For example, a parent element can be set to `display: table;` and it will have children set to `display: table-row;` and `display: table-cell;`. This can be especially helpful when you need to display tabular data but also need to support a responsive environment.

---

## display: none

The easiest way to hide elements on the page.