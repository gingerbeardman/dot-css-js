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
