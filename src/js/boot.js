'use strict';

var $ = require('jquery');
var Filter = require('./filter');
var SnippetBuilder = require('./snippets');

// Shim for deprecated .toggle()
$.fn.toggleActions = function() {
    var functions = arguments;
    var iteration = 0;
    return this.click(function() {
        functions[iteration].apply(this, arguments);
        iteration = (iteration + 1) % functions.length;
    });
};

// Collapsible articles
$('article').each(function() {
    var that = $(this);
    var header = that.children('a');
    var body = that.children('.body');
    body.hide();
    header.toggleActions(
        function() {
            body.slideDown('fast');
            that.addClass('active');
        },
        function() {
            body.slideUp('fast');
            that.removeClass('active');
        }
    );
});

var anchor = window.location.hash.substring(1);
if (anchor) {
    $('article a#' + anchor).trigger('click');
}

// Expanding the article on link click and scrolling down to it
$('#sidebar .links a').each(function() {
    var that = $(this);
    var id = that.attr('href').substring(1);
    that.click(function(e) {
        var header = $('article a#' + id);
        if (!header.parent().hasClass('active')) header.trigger('click');
        $('html, body').animate({
            scrollTop: header.offset().top
        }, 'fast');
    });

    // If we find a link in the body with similar anchor, add the same behavior
    $('.body a[href="#' + id + '"]').click(function(e) {
        $('#sidebar a[href="#' + id + '"]').trigger('click');
    });
});

// Hide all/Show all links
$('.control.show').click(function() {
    $('#content article:not(".active") > a').trigger('click');
});

$('.control.hide').click(function() {
    $('#content article.active > a').trigger('click');
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
