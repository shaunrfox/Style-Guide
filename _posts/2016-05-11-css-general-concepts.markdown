---
layout: post
title:  "CSS General Concepts"
date:   2016-05-11
categories: CSS
---

## The Box Model

The Box-model is the basis for the strucure of elements on the web. In the original design of the box-model, padding, margin, and border units would add to the size of the div. (That's the old way)

In the new way (using `box-sizing: border-box;`), padding and border push into the set dimensions of the div. This allows for much easier calculations and control of item spacing.

Here's a live Codepen example: <http://codepen.io/shaunrfox/pen/raojBW/>

---

## The Float Property

Floating is probably the most common layout convention on the web. Take a look at the live example below to see how things interact when floating.

<http://codepen.io/bxyoung89/pen/WbLRve/>

---

## The Display Property

> "Every element on a web page is a rectangular box. The display property in CSS determines just how that rectangular box behaves." &mdash;CSS Tricks

<https://css-tricks.com/almanac/properties/d/display/>

---

## The Position Property

The position property sets the location of elements on the page.

<https://css-tricks.com/almanac/properties/p/position/>

---

## How to Center Things

Centering things in CSS can be one of the most challenging parts of understanding CSS. CSS Tricks has a good roundup of the usual methods for centering just about anything:

[Centering in CSS: A Complete Guide, by CSS Tricks](https://css-tricks.com/centering-css-complete-guide/)

Here's also an example of how to center using "table" styling (used for very specific situations): <http://codepen.io/shaunrfox/pen/ZYMzpL/>

---

## Layouts

Here are a few layouts we've run into recently and how we would ideally code them:

- Example of floating divs. Flexible and evenly spaced: <http://codepen.io/shaunrfox/pen/LEMxQJ/>
- Absolute Positioning and Display Block demo: <http://codepen.io/bxyoung89/pen/EaGZLQ/>
- Example of profile picture positioning: <http://codepen.io/shaunrfox/pen/VYqPxq/>
- Example of inline-block layout: <http://codepen.io/bxyoung89/pen/NPedzx/>