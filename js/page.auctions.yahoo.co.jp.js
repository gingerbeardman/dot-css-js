function callback(e) {
    var e = window.e || e;

    if (e.target.tagName !== 'A')
        return;

    e.onclick = function(e) { e.click(); };
}

if (document.addEventListener)
    document.addEventListener('click', callback, false);
else
    document.attachEvent('onclick', callback);

// switch to proxy
if ( window.location.host == 'page.auctions.yahoo.co.jp' && window.location.pathname.startsWith('/jp/auction/') ) {
	var item = window.location.pathname.split('/').slice(-1)[0];

	// window.location.href = "https://buyee.jp/item/yahoo/auction/"+item;
	// window.location.href = "https://www.fromjapan.co.jp/en/auction/yahoo/input/"+item;
	window.location.href = "https://www.remambo.jp/auction/item/"+item;
}
