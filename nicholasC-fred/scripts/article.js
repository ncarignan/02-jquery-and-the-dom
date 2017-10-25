'use strict';

let articles = [];

// COMMENT: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// It is capitalized and all constructor functions are capitalized. It is capitalized as a naming convention to discriminate between it and other functions. the rawDataObj is the placeholder for the object passed from blogArticles.js that will pass that object into the function.

function Article (rawDataObj) {
  // DONE: Use the JS object that is passed in to complete this constructor function:
  // Save ALL the properties of `rawDataObj` into `this`
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}

Article.prototype.toHtml = function() {
  // COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
  // The benefit of cloning the article is that you get a deep copy which includes all id's, children, tags, and all other properties of the original.

  let $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');

  /* DONE: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.data('category', this.category);

  /* DONE: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance.
    We need to fill in:
      1. author name,
      2. author url,
      3. article title,
      4. article body, and
      5. publication date. */

      $newArticle.find('.byline a').html(this.author);
      $newArticle.find('.byline a').attr('href', this.authorUrl);
      $newArticle.find('h1:first').html(this.title);
      $newArticle.find('.article-body').html(this.body);
      $newArticle.find('time[pubdate]').attr('datetime', this.publishedOn);
      $newArticle.find('time[pubdate]').attr('title', this.publishedOn);


  // REVIEW: Display the date as a relative number of 'days ago'
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// DONE: Refactor these for loops using the .forEach() array method.

rawData.forEach (function (articleObject) {
  articles.push(new Article(articleObject));
});

articles.forEach (function(articles) {
  $('#articles').append(articles.toHtml());
});
