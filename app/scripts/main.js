var key = '8c78771934d3245c13a7ca25966549fa';
var secret = '17e2425c2d5ec462';
var baseUrl = 'https://api.flickr.com/services/rest/?';

$(document).ready(function() {
	init();
});

function init() {
	var method = 'method=flickr.interestingness.getList';
	var args = 'api_key=' + key;
	var format = 'format=json';
	var data = method + '&' + args + '&' + format;

	var jqxhr = $.get(baseUrl, data, function(o) {
		console.log(o);
	})
	.always(function(o) {
		console.log(o.responseText);
		parseResponse(o.responseText);
	});
}

function parseResponse (data) {
	var jsonData = data.substring(14, data.length-1);
 	var obj = JSON.parse(jsonData);
	console.log(data);
}