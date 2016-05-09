# Front-end Style Guide

## This site is built on [Jekyll](https://jekyllrb.com/), a static site generator.

To run Jekyll locally, navigate to the project's folder and run `jekyll serve`. This will compile your changes and watch for new ones, plus serve your site up at [localhost:4000/style-guide/](localhost:4000/style-guide/).

## How to create a new item in the list

1. Duplicate a file in the `_posts` folder and rename to the current date and the name of the section you wish to create.
2. Open the file in your favorite editor and make the same changes in the [front-matter](https://jekyllrb.com/docs/frontmatter/) of your post.
	```
		layout: post
		title:  "Dropdowns"
		date:   2016-05-06
		categories: CSS SCSS HTML Javascript
	```
3. Add content using Markdown. See: [this](https://daringfireball.net/projects/markdown/syntax) or [this](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## Content Types

- Description
	- A simple description will help people with context.
- Code
	- Code can be shown with Jekyll's built-in syntax highlighter:
		```
			{% highlight html %}
				[insert code here]
			{% endhighlight %}
		```
- Example
	- Use an h3 (`### Example`) to make a header for this section.