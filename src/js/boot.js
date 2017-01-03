'use strict';

var $ = require('jquery');
var Filter = require('./filter');
var SnippetBuilder = require('./snippets');

// Collapsible articles
$('article').each(function() {
    var that = $(this);
    var header = that.children('a');
    console.log('adding handler to ', header.get());
    header.on('click', function(evt) {
        that.toggleClass('active');
        this.scrollIntoView();
    })
});

// Expanding the article on link click and scrolling down to it
$('#sidebar #links a').each(function() {
    var that = $(this);
    var href = that.attr('href');
    var id = href.substring(2);
    that.click(function(e) {
        var header = $('article a#' + id);
        if (!header.parent().hasClass('active')) {
            header.trigger('click');
        }
    });

});

// open article upon load
var anchor = window.location.hash.substring(2);
if (anchor) {
    $('article a#' + anchor).trigger('click');
}

// Hide all/Show all links
$('.control.show').click(function() {
    $('article').addClass('active');
});

$('.control.hide').click(function() {
    $('article').removeClass('active');
});

$('.sidebar__version-switcher a').click(function() {
    var href = this.getAttribute('href');
    $('#sidebar').addClass(href);
    if (window.location.hash) {
        window.location = href + location.hash + location.search;
        return false;
    }
});

// Making our navigation sticky
new Filter($('#sidebar > ul'));

// Performing magic
new SnippetBuilder();
