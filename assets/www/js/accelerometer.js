    function getAccel() {
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    }

    var watchID = null;

    // Start watching the compass
    //
    function startWatchAccel() {

        // Update compass every 2 seconds
        var options = { frequency: 2000 };

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }

    // Stop watching the compass
    //
    function stopWatchAccel() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        document.getElementById("accel").innerHTML='Stoped watching acceleration';
        }
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        document.getElementById("accel").innerHTML='Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n';
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }