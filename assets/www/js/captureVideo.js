// Called when capture operation is finished
    //
    function captureSuccess(mediaFiles) {
        var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            uploadFile(mediaFiles[i]);
        }       
    }

    // Called if something bad happens.
    // 
    function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
    }

    // A button will call this function
    //
    function captureVideo() {
        // Launch device video recording application, 
        // allowing user to capture up to 2 video clips
        navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
    }

    // Upload files to server
    function uploadFile(mediaFile) {
        var ft = new FileTransfer(),
            path = mediaFile.fullPath,
            name = mediaFile.name;

        ft.upload(path,
            "http://my.domain.com/upload.php",
            function(result) {
                console.log('Upload success: ' + result.responseCode);
                console.log(result.bytesSent + ' bytes sent');
                document.getElementById("videoText").innerHTML="Video successfully captured and upploaded to server<br> File path:"+ path;
            },
            function(error) {
                console.log('Error uploading file ' + path + ': ' + error.code);
                document.getElementById("videoText").innerHTML="Video successfully captured but the uppload to server has failed<br> File path:"+ path;
            },
            { fileName: name });   
    }