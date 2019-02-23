let app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
	    document.addEventListener('deviceready', this.onDeviceReady, false);
	    document.addEventListener('pause', this.onPause, false);
	    document.addEventListener('resume', this.onResume, false);
    },

	onPause: function() {
        console.log('PAUSE FIRED');
	},

	onResume: function() {
    	console.log('RESUME FIRED');
	},

    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        window.open = cordova.InAppBrowser.open;

        // Here, we redirect to the web site.
        let targetUrl = "https://app.lifescope.io?client=app";
	    cordova.InAppBrowser.open(targetUrl, '_self', 'location=no');
    },

    // Note: This code is taken from the Cordova CLI template.
    receivedEvent: function(id) {
        let parentElement = document.getElementById(id);
        let listeningElement = parentElement.querySelector('.listening');
        let receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

	    console.log('Received Event: ' + id);
    }
};

app.initialize();