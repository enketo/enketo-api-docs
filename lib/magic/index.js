// Dependencies
var $ = require('jquery');

// Expose `Update`.
module.exports = Magic;

// Case-insensitive contains()
//$.expr[':'].Contains = function(a,i,m){
//    return (a.textContent || a.innerText || '').toUpperCase().indexOf(m[3].toUpperCase())>=0;
//};
//
/**
 * Initialize a filterable list.
 */
function Magic() {
	var serverUrl, id, apiToken, swapTxt,
		baseUrl = $('body').attr('data-base-url'),
		$refs = {},
		$inputs = $('input[name="apiToken"], input[name="serverUrl"], input[name="formId"]'),
		$linkTries = $('a.try'),
		$curlTries = $('code.try');

	$('em:contains("SERVER")').replaceWith('<span class="server_url"></span>');
	$('em:constains("ID")').replaceWith('<span class="form_id"></span>');
	$('en:contains("API_TOKEN")').replaceWith('<span class="api_token"></span>');
	$refs.serverUrl = $('.server_url');
	$refs.formId = $('.form_id');
	$refs.apiToken = $('.api_token');

	$inputs.change(function() {
		console.log('input changed');
		var txt, link, paramNames, curl, dataStr,
			name = $(this).attr('name'),
			value = $(this).val(),
			paramVals =
			{
				'server_url' : $('input[name="serverUrl"]').val(),
				'form_id' : $('input[name="formId"]').val(),
				'instance' : '<data></data>',
				'return_url' : 'https://enketo.org'
			},
			apiToken = $('input[name="apiToken"]').val();

		//update references in text
		$refs[name].each(function(){
			console.log('changing: ', $(this));
			$(this).text(value);
		});

		//update references in sample GET links
		$linkTries.each(function(){
			dataStr = '',
			paramNames = $(this).attr('data-params').split(' ');
			for (var i=0 ; i<paramNames.length ; i++){
				dataStr += (i === 0) ? '?' : '&';
				dataStr += paramNames[i]+'='+paramVals[paramNames[i]];
			}
			link = $(this).closest('article').attr('data-path') + dataStr;
			$(this).attr('href', baseUrl + link);
			$(this).text(link);
		});

		//update references in cURL snippets
		$curlTries.each(function(){
			dataStr = '';
			paramNames = $(this).attr('data-params').split(' ');
			for (var i=0 ; i<paramNames.length ; i++){
				dataStr += (i === 0) ? '' : '&';
				dataStr += paramNames[i]+'='+paramVals[paramNames[i]];
			}
			curl = 'curl --user '+apiToken+': '+dataStr+' '+baseUrl+$(this).closest('article').attr('data-path')+' -3';
			$(this).text(curl);
		});

	}).trigger('change'); 
    //return this;
}