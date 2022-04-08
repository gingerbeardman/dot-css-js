// cursors right/left do screenshot next/prev buttons
if ( window.location.pathname.includes('/images/') ) {
    // wait for key press
    document.onkeypress = function (e) {
        e = e || window.event;

        if (e.key == ",") {				// comma
    		document.querySelector('.paginate li:nth-child(1) a').click();
        } else if (e.key == ".") {		// period
    		document.querySelector('.paginate li:nth-child(3) a').click();
        } else if (e.key == "/") {		// period
    		document.querySelector('.paginate li:nth-child(2) a').click();
        } else {
        	// console.log("key: "+e.key);
    	}
    };
}
