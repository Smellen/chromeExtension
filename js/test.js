    chrome.webRequest.onCompleted.addListener((details) =>
    {
        const { tabId, requestId } = details;

            console.log('tab id: ' + tabId);
            console.log('request id: ' + requestId);

        if (!tabStorage.hasOwnProperty(tabId) || !tabStorage[tabId].requests.hasOwnProperty(requestId)) {

                console.log('In the onCompleted section doing something');
                return;
        }

        const request = tabStorage[tabId].requests[requestId];

        console.log('REQUEST: ' + request);

        Object.assign(request, {
            endTime: details.timeStamp,
            requestDuration: details.timeStamp - request.startTime,
            status: 'complete'
        });

        console.log(tabStorage[tabId].requests[details.requestId]);
    }, networkFilters);

