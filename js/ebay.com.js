// Redirect to UK
if ( window.location.hostname.startsWith('www.ebay') && !window.location.hostname.startsWith('www.ebay.co.uk') ) {
	var current = window.location.href;
	var old ="https://www.ebay.co.uk";
	var path = current.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1];
	window.location.replace(old + path);
	console.log("!"+current);
	console.log("!"+old+path);
}
