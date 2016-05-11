# Front-end Style Guide

This site is meant to help us unify our front-end code. These are the documented best-practices for front-end code structure. You can help us maintain this project by submitting your own examples of best practices you come across.

You can view the docs site at [shaunfox.com/style-guide/](http://shaunfox.com/style-guide/)

---

## This site is built on [Jekyll](https://jekyllrb.com/), a static site generator.

To run Jekyll locally, navigate to the project's folder and run `jekyll serve`. This will compile your changes and watch for new ones, plus serve your site up at [localhost:4000/style-guide/](http://localhost:4000/style-guide/).

## How to create a new item in the list

Duplicate a file in the `_posts` folder and rename to the current date and the name of the section you wish to create.

	2016-05-06-dropdowns.markdown

Open the file in your favorite editor and make the same changes in the [front-matter](https://jekyllrb.com/docs/frontmatter/) of your post. You can add tags, which we'll probably use down the road.

	layout: post
	title:  "Dropdowns"
	date:   2016-05-06
	categories: CSS SCSS HTML Javascript

Add content using Markdown. See: [this](https://daringfireball.net/projects/markdown/syntax) or [this](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## Content Types

#### Description

A simple description will help people with context.

#### Code

Code can be shown with Jekyll's built-in syntax highlighter:

	{% highlight html %}
		[insert code here]
	{% endhighlight %}

#### Example

Use an h3 (`### Example`) to make a header for this section.

---

## Topics we'd like to cover

### HTML

- Buttons
- ~~Dropdowns~~
- Inputs (multiple)
	- ~~Checkboxes~~
- Modals

### Javascript

- Ideas here: [https://github.com/airbnb/javascript]

### SCSS/CSS

- ~~General CSS education~~
- ~~SCSS Variables~~
- Color Variables and Functions
- Mixins
- Nesting in SCSS
- Functions in SCSS