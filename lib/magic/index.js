// Dependencies
var $ = require('jquery');

// Expose `Update`.
module.exports = Magic;

/**
 * Initialize code snippet builder
 */
function Magic() {
	var serverUrl, id, apiToken, swapTxt,
		apiPath = '/api_v1',
		$refs = {},
		$inputs = $('input[name="apiToken"], input[name="serverUrl"], input[name="formId"], input[name="enketoUrl"]'),
		$linkTries = $('a.try'),
		$curlTries = $('textarea.try');

	$('em:contains("SERVER")').replaceWith('<span class="server_url"></span>');
	$('em:contains("ID")').replaceWith('<span class="form_id"></span>');
	$('en:contains("API_TOKEN")').replaceWith('<span class="api_token"></span>');
	$refs.serverUrl = $('.server_url');
	$refs.formId = $('.form_id');
	$refs.apiToken = $('.api_token');
	$refs.enketoUrl = $('.enketo_url');

	$inputs.change(function() {
		console.log('input changed');
		var txt, link, paramNames, curl, dataStr, $article, path,
			name = $(this).attr('name'),
			value = $(this).val(),
			paramVals = {
				'server_url': $('input[name="serverUrl"]').val(),
				'form_id': $('input[name="formId"]').val(),
				'enketo_url': $('input[name="enketoUrl"]').val(),
				'instance': '<data><node>val</node></data>',
				'return_url': 'https://enketo.org',
				'instance_id': 'someUUID'
			},
			apiToken = $('input[name="apiToken"]').val();

		//update references in text
		$refs[name].each(function() {
			console.log('changing: ', $(this));
			$(this).text(value);
		});

		//update references in sample GET links
		$linkTries.each(function() {
			dataStr = '';
			paramNames = $(this).attr('data-params').split(' ');
			for (var i = 0; i < paramNames.length; i++) {
				dataStr += (i === 0) ? '?' : '&';
				dataStr += paramNames[i] + '=' + paramVals[paramNames[i]];
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
				dataStr += paramNames[i] + '=' + paramVals[paramNames[i]];
			}

			curl = ($article.hasClass('POST')) ? 'curl --user ' + apiToken + ': -d "' + dataStr + '" ' + paramVals.enketo_url + apiPath + path : ($article.hasClass('DELETE')) ? 'curl -X DELETE --user ' + apiToken + ': -d "' + dataStr + '" ' + paramVals.enketo_url + apiPath + path : 'curl --user ' + apiToken + ': "' + paramVals.enketo_url + apiPath + path + '?' + dataStr + '"';
			$(this).text(curl);
		})

	}).trigger('change');
	//return this;
}
