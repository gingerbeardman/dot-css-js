// click single search result
if ( window.location.host == 'letterboxd.com' && window.location.pathname.startsWith('/search/') ) {
	count = document.querySelectorAll('.results li').length;
	if (count == 1) {
		document.querySelectorAll(".film-title-wrapper a")[0].click();
	}
}
