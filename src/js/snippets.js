'use strict';

// Dependencies
var $ = require('jquery');

// Expose `Update`.
module.exports = SnippetBuilder;

/**
 * Initialize code snippet builder
 */
function SnippetBuilder() {
    var serverUrl;
    var id;
    var apiToken;
    var swapTxt;
    var apiPath = '/api';
    var $refs = {};
    var $inputs = $('input[name="apiToken"], input[name="serverUrl"], input[name="formId"], input[name="enketoUrl"]');
    var $linkTries = $('a.try');
    var $curlTries = $('textarea.try');

    $('em:contains("SERVER")').replaceWith('<span class="server_url"></span>');
    $('em:contains("ID")').replaceWith('<span class="form_id"></span>');
    $('em:contains("API_KEY")').replaceWith('<span class="api_token"></span>');
    $refs.serverUrl = $('.server_url');
    $refs.formId = $('.form_id');
    $refs.apiToken = $('.api_token');
    $refs.enketoUrl = $('.enketo_url');

    $inputs.change(function() {
        var txt;
        var link;
        var paramNames;
        var curl;
        var dataStr;
        var $article;
        var path;
        var name = $(this).attr('name');
        var value = $(this).val();
        var paramVals = {
            'server_url': 'server_url=' + $('input[name="serverUrl"]').val(),
            'form_id': 'form_id=' + $('input[name="formId"]').val(),
            'enketo_url': $('input[name="enketoUrl"]').val(),
            'instance': 'instance=<data><node>val</node></data>',
            'return_url': 'return_url=https://enketo.org',
            'instance_id': 'instance_id=someUUID',
            'instance_attachments': 'instance_attachments[bird.jpg]=https://example.com/bird.jpg',
            'defaults': 'defaults[/data/q1]=a&defaults[/data/q2]=3',
            'parent_window_origin': 'parent_window_origin=https://my.home.page',
            'theme': 'theme=grid'
        };
        var apiToken = $('input[name="apiToken"]').val();

        //update references in text
        $refs[name].each(function() {
            $(this).text(value);
        });

        //update references in sample GET links
        $linkTries.each(function() {
            dataStr = '';
            paramNames = $(this).attr('data-params').split(' ');
            for (var i = 0; i < paramNames.length; i++) {
                dataStr += (i === 0) ? '?' : '&';
                dataStr += paramVals[paramNames[i]];
            }
            link = $(this).closest('article').attr('data-path') + dataStr;
            $(this).attr('href', paramVals.enketo_url + apiPath + link);
            $(this).text(paramVals.enketo_url + apiPath + link);
        });

        //update references in cURL snippets
        $curlTries.each(function() {
            dataStr = '';
            $article = $(this).closest('article');
            path = $article.attr('data-path');
            paramNames = $(this).attr('data-params').split(' ');
            for (var i = 0; i < paramNames.length; i++) {
                dataStr += (i === 0) ? '' : '&';
                dataStr += paramVals[paramNames[i]];
            }

            curl = ($article.hasClass('POST')) ? 'curl --user ' + apiToken + ': -d "' + dataStr + '" ' + paramVals.enketo_url + apiPath + path : ($article.hasClass('DELETE')) ? 'curl -X DELETE --user ' + apiToken + ': -d "' + dataStr + '" ' + paramVals.enketo_url + apiPath + path : 'curl --user ' + apiToken + ': "' + paramVals.enketo_url + apiPath + path + '?' + dataStr + '"';
            $(this).text(curl);
        });

    }).trigger('change');
    //return this;
}
