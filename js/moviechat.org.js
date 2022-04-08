// search letterboxd
if ( window.location.host == 'moviechat.org' && window.location.pathname.startsWith('/tt') ) {
	var item = window.location.pathname.split('/').slice(-2)[0];
	window.location.href = "https://letterboxd.com/search/"+item;
}
