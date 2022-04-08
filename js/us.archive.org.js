// Redirect to largest size image
if ( window.location.pathname.startsWith('/BookReader/') && window.location.href.includes('scale=') ) {
	// https://ia800904.us.archive.org/BookReader/BookReaderImages.php?zip=/26/items/Gamest012198709/Gamest%20012%201987-09_jp2.zip&file=Gamest%20012%201987-09_jp2/Gamest%20012%201987-09_0015.jp2&scale=4&rotate=0
	document.location.href = document.location.href.replace('scale=', '')
}
