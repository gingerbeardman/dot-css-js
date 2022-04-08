// automatic page scroll
if ( window.location.pathname.startsWith('/details/') ) {
	var timeout = null;
	var speed = 4000;
	var max = 7000;
	var min = 1000;

	// var colours = Array('#222', '#444', '#666', '#888', '#AAA', '#CCC', '#EEE');
	var colours = Array('#EEE', '#CCC', '#AAA', '#888', '#666', '#444', '#222');

	// wait for key press
	document.onkeypress = function (e) {
	    e = e || window.event;

	    if (e.key == "." || e.key == "*") {				// dot
	    	if (timeout != null) {
	    		clearTimeout(timeout);
	    		timeout = null;
				document.querySelector('#BookReader').style.background = '#000';
	    	} else {
				slideshow(); // immediately start
				document.querySelector('#BookReader').style.background = colours[(speed/1000)-2];
	    	}

			function slideshow(){
				if (document.querySelector(".metadata-expandable-list").innerHTML.indexOf("Page-progression") >= 0) {
					document.querySelector('.book_left').click();
				} else {
					document.querySelector('.book_right').click();
				}
				timeout = setTimeout(slideshow, speed);
			}

	    } else if (e.key == "=" || e.key == "+") {			// keyboard = OR numpad +	
	    	speed = Math.min(speed+1000, max);
			document.querySelector('#BookReader').style.background = colours[(speed/1000)-2];
	    	console.log("slideshow: "+speed);

	    } else if (e.key == "-" || e.key == "/") {							// keyboard/numpad -
	    	speed = Math.max(speed-1000, min);
			document.querySelector('#BookReader').style.background = colours[(speed/1000)-2];
	    	console.log("slideshow: "+speed);
	    }

	    function addHexColor(c1, c2) {
			var hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
			while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
			return hexStr;
		}
	};
}
