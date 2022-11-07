(function () {
    'use strict';

    const lessons = [];

    const interceptNetworkRequests = (ee) => {
        const open = XMLHttpRequest.prototype.open;
        const send = XMLHttpRequest.prototype.send;

        const isRegularXHR = open.toString().indexOf('native code') !== -1;


        if (isRegularXHR) {
            console.log('jsem xhr');
            XMLHttpRequest.prototype.open = function () {
                ee.onOpen && ee.onOpen(this, arguments);
                if (ee.onLoad) {
                    this.addEventListener('load', ee.onLoad.bind(ee));
                }
                if (ee.onError) {
                    this.addEventListener('error', ee.onError.bind(ee));
                }
                return open.apply(this, arguments);
            };
            XMLHttpRequest.prototype.send = function () {
                ee.onSend && ee.onSend(this, arguments);
                return send.apply(this, arguments);
            };
        }

        const fetch = window.fetch || "";

        const isFetchNative = fetch.toString().indexOf('native code') !== -1;
        if (isFetchNative) {
            console.log('jsem fetch');
            window.fetch = function () {
                ee.onFetch && ee.onFetch(arguments);
                const p = fetch.apply(this, arguments);
                p.then(ee.onFetchResponse, ee.onFetchError);
                return p;
            };
            // at the moment, we don't listen to streams which are likely video
            const json = Response.prototype.json;
            const text = Response.prototype.text;
            const blob = Response.prototype.blob;
            Response.prototype.json = function () {
                const p = json.apply(this, arguments);
                p.then(ee.onFetchLoad && ee.onFetchLoad.bind(ee, "json"));
                return p;
            };
            Response.prototype.text = function () {
                const p = text.apply(this, arguments);
                p.then(ee.onFetchLoad && ee.onFetchLoad.bind(ee, "text"));
                return p;
            };
            Response.prototype.blob = function () {
                const p = blob.apply(this, arguments);
                p.then(ee.onFetchLoad && ee.onFetchLoad.bind(ee, "blob"));
                return p;
            };
        }
        return ee;
    }

    const textToClipboard = (text) => {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    };

    document.addEventListener("keypress", function(e) {
        if (e.code === "KeyJ") {
            textToClipboard(JSON.stringify(lessons, null, 2));
        }
    });

    interceptNetworkRequests({
        // onLoad: (val) => console.log('load',val),
        // onFetch:(val) => console.log('load',val),
        // onFetchResponse: (val) => console.log('load',val),
        onFetchLoad: (type, response) => {
            if (typeof response === 'string') {
               if('lesson' in JSON.parse(response)) {
                    lessons.push(JSON.parse(response));
               }
            }
        },
        // onOpen: console.log,
        // onSend: console.log,
        // onError: console.log,
        // onLoad: (val) => console.log('load',val),
    });

})();