// Redirect - eBay finished listing

/* redirect */
anchor = document.querySelector('div.cvipTopMsg > span > a');
if (anchor) anchor.click();

/* relisted */
anchor = document.querySelector('div.msgPad span.msgTextAlign > a');
if (anchor) anchor.click();

search = document.getElementById('gh-ac');
if (search) search.focus();