![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 02: jQuery and the DOM
===

## Submission Instructions
Follow the submission instructions from Lab 01.

## Resources  
[jQuery cheatsheet](https://oscarotero.com/jquery/)


## Configuration
_Your repository must include:_

```
02-jquery-and-the-dom
x├── .eslintrc.json
x├── .gitignore
x├── LICENSE
x├── README.md
x├── index.html
x├── scripts
x│   ├── article.js
x│   └── blogArticles.js
x├── styles
x│   ├── base.css
x│   ├── fonts
x│   │   ├── icomoon.eot
x│   │   ├── icomoon.svg
x│   │   ├── icomoon.ttf
x│   │   └── icomoon.woff
x│   ├── icons.css
x│   ├── layout.css
x│   └── modules.css
x└── vendor
x    └── styles
x        └── normalize.css
```

## User Stories and Feature Tasks

- Continue styling the app using SMACSS practices. Take a few minutes for code review of your partner's CSS and decide how to incorporate it into your paired lab. You can choose one partner's CSS structure, or you can combine them as you see fit. Seek to optimize and organize your CSS as much as possible!

*As a user, I want my site to display my blog articles in a clear, logical way so that I can find the most recent articles first and the blog is easy to read.*

- Complete the `toHtml()` method, which will ultimately be used to render each article instance to the DOM.
- The articles should be sorted by date.

*As a developer, I want to make my code DRY and render articles from a separate data file so that my HTML file is not cluttered with lengthy and repetitive code.*

- Complete the `Article()` constructor and create instances by assigning all of the properties of each data object to properties of `this`.

*As a developer, I want to utilize the jQuery library's functionality so that I can efficiently access, traverse, and manipulate elements on the DOM.*

- Add the necessary script tag to include jQuery in the app.
- Utilize jQuery functionality to modify the display property of DOM elements.
- Utilize jQuery functionality to traverse the DOM and complete the HTML template for the articles.

*As a developer, I want to optimize iteration with JavaScript array methods so that my code is more condensed and maintainable.*

- Refactor all `for` loops using the `.forEach()` method.


## Documentation
_Your README.md must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```
