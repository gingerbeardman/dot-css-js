// cursors right/left do screenshot next/prev buttons

if ( window.location.pathname.indexOf('/screenshots/') ) {

	// wait for key press
	document.onkeypress = function (e) {
	    e = e || window.event;

	    if (e.key == ",") {				// comma
			document.querySelector('.previous a').click();
	    } else if (e.key == ".") {		// period
			document.querySelector('.next a').click();
	    } else if (e.key == "/") {		// period
			document.querySelector('.pager li:nth-child(2) a').click();
	    } else {
	    	// console.log("key: "+e.key);
		}
	};
}
