let app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
	    document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        window.open = cordova.InAppBrowser.open;

        // Here, we redirect to the web site.
        let targetUrl = "https://app.lifescope.io?client=app";
	    cordova.InAppBrowser.open(targetUrl, '_self', 'location=no,clearcache=no,clearsessioncache=no');
    },

    // Note: This code is taken from the Cordova CLI template.
    receivedEvent: function(id) {
    }
};

app.initialize();