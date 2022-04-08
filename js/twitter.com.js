// Redirect to Mobile
// if ( !window.location.hostname.startsWith('mobile.twitter.com') ) {
// 	var current = window.location.href;
// 	var old ="https://mobile.twitter.com";
// 	var path = current.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1];
// 	window.location.replace(old + path);
// }

console.log("twitter.com.js")

// Remove Promoted Tweets
if ( !window.location.pathname.startsWith('/intent/') ) {
	let count = 0

	function removePromoted() {
	  console.log('Checking for promoted tweets')

	  const promoted = document.evaluate(
	    "//span[text() = 'Promoted']",
	    document,
	    null,
	    XPathResult.ANY_TYPE,
	    null
	  )

	  let node = promoted.iterateNext()
	  if (!node) return

	  count += 1
	  do {
	    node = node.parentNode.closest('div')
	  } while (node.attributes.length > 0)
	  node.style.display = 'none'
	  console.log(`Removed ${count} promoted tweets so far`)
	}

	const observer = new MutationObserver(domChanged)

	function domChanged() {
	  removePromoted()
	  observer.observe(document.body, {
	    childList: true,
	    subtree: true,
	  })
	}

	domChanged()

//	const blacklist = ['promoted']
	
// 	function removeCrap() {
// 	  const ads = Array.from(
// 	    new Set(
// 	      Array.from(document.querySelectorAll('span')).map(
// 	        e => e.parentNode
// 	      )
// 	    )
// 	  )
// 	    .filter(e => {
// 	      const text = e.innerText.toLowerCase()
// 	      return blacklist.some(badWord => text.indexOf(badWord) >= 0)
// 	    })
// 	    .map(e => e.closest('article'))
	
// 	  console.log(`Removing ${ads.length} blacklisted elements`)
	
// 	  ads.forEach(e => e.remove())
// 	}
	
// 	const observer = new MutationObserver(domChanged)
	
// 	function domChanged() {
// 	  observer.disconnect()
// 	  removeCrap()
// 	  observer.observe(document.body, {
// 	    childList: true,
// 	    subtree: true,
// 	  })
// 	}
	
// 	domChanged()

}
