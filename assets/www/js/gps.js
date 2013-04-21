    function getLocation() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    var watchID = null;

    // Start watching the compass
    //
    function startWatchLocation() {

        // Update compass every 2 seconds
        var options = { frequency: 2000 };

        watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
    }

    // Stop watching the compass
    //
    function stopWatchLocation() {
        if (watchID) {
            navigator.geolocation.clearWatch(watchID);
            watchID = null;
        document.getElementById("location").innerHTML='Stoped watching Location';
        }
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(position) {
        document.getElementById("location").innerHTML='Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + new Date(position.timestamp)          + '<br />';
    }

    // onError: Failed to get the acceleration
    //
    function onError(error) {
         alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }