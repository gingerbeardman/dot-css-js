// enable all FORM elements
// [].slice.call(document.querySelectorAll('[disabled]')).forEach(function (elem) { elem.removeAttribute('disabled') });

// enable right click
// function callback(e) {
//     var e = window.e || e;
//     if (e.target.tagName !== 'A')
//         return;
//     e.onclick = function(e) { e.click(); };
// }
// if (document.addEventListener)
//     document.addEventListener('click', callback, false);
// else
//     document.attachEvent('onclick', callback);

// Remove All Emoji
// document.body.innerHTML = document.body.innerHTML.replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g, '')

// Remove overflow:hidden
document.body.style.overflow = 'initial !important';

// Show Password on Double Click
function handleDblClick(e){
                               console.log("pass");
  var pwd = e.target;
  var type = pwd.getAttribute('type');
  pwd.setAttribute('type', type === 'password' ? 'text': 'password');
}
var passwords = document.querySelectorAll("input[type=password]");
for (var i = 0; i < passwords.length; i++){
  passwords[i].addEventListener('dblclick', handleDblClick, true);
}

// NavUpKey
String.prototype.reverse = function () {
    var rs = '';
    for (var i = this.length - 1; i >= 0; i--)
        rs += this[i];
    return rs;
}
window.addEventListener('keydown', function (e) {
    if (e.which === 38 && (e.shiftKey * 1 + e.ctrlKey * 2 + e.altKey * 4 + e.metaKey * 8) === 12) {
        var l = window.location;
        var rp = l.pathname.reverse();
        var rpsi = rp.search(/.\//);
        if (rpsi > -1) {
            l.assign(l.protocol + '//' + l.host + rp.slice(rpsi+1).reverse());
        }
    }
}, true);

// Smart Right Click by Mattijs
// document.addEventListener("mousedown", function(event) {
//     if (event.which == 3) {
//         event.stopPropagation();
//     }
// }, true);
// document.addEventListener("contextmenu", function(event) {

//     // show browser default right click only
//     event.stopPropagation();

//     // not a trusted context menu event
//     if (!event.isTrusted || event.constructor.name != "MouseEvent") {
//         return false;
//     }

//     // check if someone would right click this element for a specific reason
//     function isElementIntention(intention, element) {
//         var tag = element.nodeName.toLowerCase();

//         // checks
//         switch(intention) {
//         case "ignore":
//             // not an ignored tag
//             if (!["body", "html"].includes(tag)) {
//                 return false;
//             }
//             break;
//         case "link":
//             // not within an "a" tag with a href
//             if (!element.closest("a[href]")) {
//                 return false;
//             }
//             break;
//         case "text":
//             // hasn't made a selection
//             if (window.getSelection().toString().length < 1) {
//                 return false;
//             }
//             break;
//         case "media":
//             // not a media tag
//             if (!["img", "video"].includes(tag)) {
//                 return false;
//             }
//             switch(tag) {
//             case "video":
//                 // doesn't have a source
//                 if (element.currentSrc.length < 1) {
//                     return false;
//                 }
//                 break;
//             case "img":
//                 // doesn't have a source
//                 if (element.currentSrc.length < 1) {
//                     return false;
//                 }
//                 // didn't load
//                 if (element.naturalWidth === 0) {
//                     return false;
//                 }
//                 break;
//             }
//             // is not visible
//             if (getComputedStyle(element).opacity <= 0.1 || getComputedStyle(element).visibility == "hidden") {
//                 return false;
//             }
//             break;
//         }

//         // validated
//         return true;
//     };

//     // get the most likely reason someone would right click this element
//     function getElementIntention(element) {
//         var intention = null;
//         if (isElementIntention("ignore", element)) {
//             intention = "ignore";
//         } else if (isElementIntention("text", element)) {
//             intention = "text";
//         } else if (isElementIntention("link", element)) {
//             intention = "link";
//         }
//         if ((!intention || intention == "link") && isElementIntention("media", element)) {
//             intention = "media";
//         }
//         return intention;
//     };
    
//     // if unknown intention - check a bit deeper
//     var eventTargetIntention = getElementIntention(event.target);
//     if (!eventTargetIntention || eventTargetIntention == "link") {

//         // check if pointer intersects with any more likely targets
//         var timer = new Date();
//         var intendedTarget = null;
//         var potentialTargets = document.querySelectorAll("img, video");
//         for (var i = potentialTargets.length; i--;) {
//             var potentialTarget = potentialTargets[i];
//             var bounds = potentialTarget.getBoundingClientRect();
//             bounds = { l: bounds.left, t: bounds.top, r: bounds.left + bounds.width, b: bounds.top + bounds.height };

//             // check if it's under the pointer - and not hidden
//             if (event.clientX >= bounds.l && event.clientX <= bounds.r && event.clientY >= bounds.t && event.clientY <= bounds.b && isElementIntention("media", potentialTarget) && (eventTargetIntention != "link" || event.target.closest("a[href]").contains(potentialTarget))) {
//                 intendedTarget = potentialTarget;
//                 break;
//             }

//             // stop if it's taking too long
//             if ((new Date() - timer) > 10) {
//                 break;
//             }
//         }

//         // if we found the real intended target
//         if (intendedTarget) {

//             // enable pointer events for the intended element
//             var disabled = {
//                 elements: [intendedTarget],
//                 pointerEvents: [{
//                     value: intendedTarget.style.getPropertyValue("pointer-events"),
//                     priority: intendedTarget.style.getPropertyPriority("pointer-events")
//                 }]
//             }
//             intendedTarget.style.setProperty("pointer-events", "all", "important");

//             // go through disabling everything above the intended element so that the right click hits it
//             var timer = new Date();
//             var beneath = false;
//             for (var i = 0; i < 10; i++) {
//                 var currentTarget = (i == 0) ? event.target : document.elementFromPoint(event.clientX, event.clientY);

//                 // check if the loop should continue
//                 if (!currentTarget || disabled.elements.indexOf(currentTarget) !== -1 && currentTarget !== intendedTarget) {
//                     break;

//                 // found intended target
//                 } else if (currentTarget === intendedTarget || isElementIntention("media", currentTarget)) {
//                     if (disabled.elements.length > 1) beneath = true;
//                     break;
//                 }

//                 // push the element and style
//                 disabled.elements.push(currentTarget);
//                 disabled.pointerEvents.push({
//                     value: currentTarget.style.getPropertyValue("pointer-events"),
//                     priority: currentTarget.style.getPropertyPriority("pointer-events")
//                 });

//                 // add "pointer-events: none", to get to the underlying element
//                 currentTarget.style.setProperty("pointer-events", "none", "important"); 

//                 // stop if it's taking too long
//                 if ((new Date() - timer) > 20) {
//                     break;
//                 }
//             }
            
//             // revert the changes
//             function revert(disabled) {
//                 for (var i = disabled.pointerEvents.length; d = disabled.pointerEvents[--i];) {
//                     var element = disabled.elements[i];
//                     element.style.setProperty("pointer-events", (d.value ? d.value : ""), d.priority);
//                     if (!element.getAttribute("style")) {
//                         element.removeAttribute("style");
//                     }
//                 }
//             };

//             // change right click target
//             if (beneath) {
//                 setTimeout(revert, 10, disabled);

//                 // notify my other extensions to check the right click event again
//                 intendedTarget.dispatchEvent(new MouseEvent(event.type, event));
            
//             // keep it as is
//             } else {
//                 revert(disabled);
//             }

//         // check parent window instead and somehow set "pointer-events: none" to this iframe
//         } else if (window !== window.top) {
//             // ..

//         }
//     }
// }, true);
