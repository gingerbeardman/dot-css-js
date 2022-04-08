// reformat bad links
if ( window.location.pathname.startsWith('/items/') ) {
	var item = window.location.pathname.split('/').filter(Boolean).pop()
	window.location.href = "https://aucview.aucfan.com/yahoo/"+item;
	// window.location.href = "https://www.kpers.net/item/"+item;
}
