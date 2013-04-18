 // Called when capture operation is finished
		    function captureSuccess(mediaFiles) {
		        var i, len;
		        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
		            uploadFile(mediaFiles[i]);
		        }       
		    }

		    // Called if something bad happens.
		    function captureError(error) {
		        var msg = 'Nu har du bajs i byxan: ' + error.code;
		        navigator.notification.alert(msg, null, 'Uh oh!');
		        document.getElementById("imageText").value="Photocapture failed.";
		    }

		    // A button will call this function
		    function captureImage() {
		        // Launch device camera application, 
		        // allowing user to capture up to 1 images
		        navigator.device.capture.captureImage(captureSuccess, captureError);//, {limit: 2}
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
		            	document.getElementById("imageText").innerHTML="Photo successfully captured and upploaded to server<br> File path:"+ path;
		       			document.getElementById('bild-id').src = path;
		            },
		            function(error) {
		                console.log('Error uploading file ' + path + ': ' + error.code);
		            	document.getElementById("imageText").innerHTML="Photo successfully captured but the uppload to server has failed<br> File path:"+ path;
		       			document.getElementById('bild-id').src = path;
		            },
		            { fileName: name });   
		    }


		    // A button will call this function
		    function showImage() {
		        console.log('showImage');

		        var smallImage = document.getElementById('bild-id');

			    smallImage.style.display = 'toggle';
		    }