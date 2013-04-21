    function getCompassHeading() {
        navigator.compass.getCurrentHeading(onSuccess, onError);
    }

    var watchID = null;

    // Start watching the compass
    //
    function startWatch() {

        // Update compass every 2 seconds
        var options = { frequency: 2000 };

        watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    }

    // Stop watching the compass
    //
    function stopWatch() {
        if (watchID) {
            navigator.compass.clearWatch(watchID);
            watchID = null;
        document.getElementById("compassHeading").innerHTML+='Stoped watching heading';
        }
    }

    // onSuccess: Get the current heading
    //
    function onSuccess(heading) {
        document.getElementById("compassHeading").innerHTML='Heading: ' + heading.magneticHeading;
    }

    // onError: Failed to get the heading
    //
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    }