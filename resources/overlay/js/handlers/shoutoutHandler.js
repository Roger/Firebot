// Shoutout Handling
// This will take the data that is sent to it from the GUI and push some text to the overlay.
function shoutout(data){
    var shoutoutText = data.shoutoutText;
	var shoutoutPosition = data.shoutoutPosition;
	var shoutoutHeight = data.shoutoutHeight;
	var shoutoutWidth = data.shoutoutWidth;
	var shoutoutDuration = parseInt(data.shoutoutDuration) * 1000;
	
	
	var customPosStyles = "";
	if(shoutoutPosition == 'Custom') {
		customPosStyles = getStylesForCustomCoords(data.customCoords)
	}

	// Get time in milliseconds to use as class name.
	var d = new Date();
	var divClass = d.getTime();

    // Add in our shoutout wrapper if it's not added already.
    // This container can have a set width and height and holds all of the shoutout messages.
    if( $('.shoutoutOverlay').length === 0 ){
        if (shoutoutHeight == false && shoutoutWidth == false){
            // Both height and width fields left blank.
            var shoutoutFinal = '<div class="shoutoutOverlay" position="'+shoutoutPosition+'" style="display:block;'+customPosStyles+'"></div>';
        } else if (shoutoutWidth == false){
            // Width field left blank, but height provided.
            var shoutoutFinal = '<div class="shoutoutOverlay" position="'+shoutoutPosition+'" style="display:block;height:'+ shoutoutHeight +'px;'+customPosStyles+'"></div>';
        } else if (shoutoutHeight == false) {
            // Height field left blank, but width provided.
            var shoutoutFinal = '<div class="shoutoutOverlay" style="width:100%;height:100%;position:relative;'+customPosStyles+'"></div>';
        } else {
            // Both height and width provided.
            var shoutoutFinal = '<div class="shoutoutOverlay" position="'+shoutoutPosition+'" style="display:block;height:'+ shoutoutHeight +'px; width:'+ shoutoutWidth +'px;'+customPosStyles+'"></div>';
        }
        $('#wrapper').append(shoutoutFinal);
    }

    // Put the shoutout text into the shoutout container.
    var textFinal = '<div class="'+divClass+'-shoutout shoutoutMessage">'+shoutoutText+'</div>';
    $('.shoutoutOverlay').append(textFinal);

    // Animate it!
	showTimedAnimatedElement(divClass+'-shoutout', data.enterAnimation, data.exitAnimation, shoutoutDuration);
}