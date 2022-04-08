// Force Mobile - Wikipedia

// var current = window.location.href;
// var old ="https://en.m.wikipedia.org";
// var path = current.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1];
// window.location.replace(old + path);

// Force SAFE MODE - Wikipedia
var current = window.location.href;
if (current.endsWith("action=edit") && !current.endsWith("safemode=1")) {
	window.location.replace(current + "&safemode=1");
}
