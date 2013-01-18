// ==UserScript==
// @name           Turntable Up Key
// @author		   SPangborn
// @description	   Enables IRC-like message upkeying.
// @namespace      turntable
// @include        http://turntable.fm/*
// ==/UserScript==

(function(){

	messages = [];
	currentMsg = 0;
	saved = "";
	jQuery('.input-box input').keydown(function (e) {
	  var input = jQuery('.input-box input');
	  var keyCode = e.keyCode || e.which,
		  arrow = {left: 37, up: 38, right: 39, down: 40 };
		  keys = { enter: 13};
	  switch (keyCode) {
		case arrow.left:
		  //..
		break;
		case arrow.up:
		
			if (currentMsg == messages.length - 1) {
				saved = jQuery(input).val();
			}
			if (messages.length > 0 && currentMsg > 0) {
                	console.log("Upkey: " + messages[currentMsg]);
				jQuery(input).val(messages[currentMsg]);
				currentMsg--;
			}
			else if (messages.length > 0 && currentMsg <= 0) {
				console.log("No more messages.");
				jQuery(input).val(messages[0]);
			}
			else {
				console.log("No messages saved.");
			}

		break;
		case arrow.right:
		  //..
		break;
		case arrow.down:
			if (messages.length > 0 && currentMsg < messages.length - 1) {
				console.log("Downkey: " + messages[currentMsg+1]);
				jQuery(input).val(messages[currentMsg+1]);
				currentMsg++;
				
			}
			else if (messages.length > 0 && currentMsg >= messages.length - 1) {
				console.log("No more messages.");
				if (saved != "") {
					jQuery(input).val(saved);
				}
				else {
					jQuery(input).val("");
				}
		  }
		break;
		case keys.enter:
                        console.log("Adding message: " + jQuery(input).val());
			messages.push( jQuery(input).val() );
			currentMsg = messages.length - 1;
			saved = "";
			break;
	  }
	});
})();
