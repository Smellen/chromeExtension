(function() {
	const tabStorage = {};
	const networkFilters = {
		urls: ["*://*/*"]};

	chrome.webRequest.onBeforeSendHeaders.addListener(function(details)
	{
  		console.log(JSON.stringify(details));
		var headers = details.requestHeaders, blockingResponse = {};

		for( var i = 0, l = headers.length; i < l; ++i ) {
			console.log(headers[i].value);
		}

		blockingResponse.requestHeaders = headers;
		return blockingResponse;
	},networkFilters,['requestHeaders','blocking']);
}());
