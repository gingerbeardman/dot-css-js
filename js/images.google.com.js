// Google Images - View Image Button

function check_google_page() {
  var p = document.querySelector(".hdtb-msel");
  if (p != null && p.innerText === "Images") {
    var targetNode = document.getElementById("gsr");
    var config = { childList: true, subtree: true };
    var callback = function(mutationsList, observer) {
      for(var mutation of mutationsList) {
            var nodes = mutation.addedNodes;
        nodes.forEach(function(node) {
            if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains("irc_mi")) {
                add_google_view_image_button(node);
            }
        });
      }
    };
    var observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }
}

function add_google_view_image_button(el) {
  var img_src = el.getAttribute("src");
  var container = el.closest(".irc_c");
  var my_givi_button;
  var clone_button;
  
  if (container.querySelector(".irc_ab")) {
    var buttons = container.querySelector(".irc_ab");
    my_givi_button = buttons.querySelector(".my_givi_button");
    if (my_givi_button === null) {
      clone_button = buttons.querySelector("a");
      var icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4C4 4 1 12 1 12s3 8 11 8 11-8 11-8-3-8-11-8zm0 3a5 5 0 1 1-.001 10.001A5 5 0 0 1 12 7zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>';
      my_givi_button = clone_button.cloneNode(true);
      my_givi_button.classList.add("my_givi_button");
      my_givi_button.style.marginLeft = "8px";
      my_givi_button.querySelector("div").style.paddingLeft = "10px";
      my_givi_button.querySelector("span:nth-child(1)").innerHTML = icon;
      my_givi_button.querySelector("span:nth-child(2)").innerText = "View Image";
      my_givi_button.removeAttribute("jsaction");
        my_givi_button.removeAttribute("data-noload");
        my_givi_button.removeAttribute("data-ved");
    
        buttons.appendChild(my_givi_button);
    }
    my_givi_button.href = img_src;
  } else if (container.querySelector(".irc_but_r tr")) {
    var buttons = container.querySelector(".irc_but_r tr");
    my_givi_button = buttons.querySelector(".my_givi_button");
    if (my_givi_button === null) {
      var clone_button = buttons.querySelector("td");
      my_givi_button = buttons.querySelector("td");
      my_givi_button = clone_button.cloneNode(true);
      my_givi_button.classList.add("my_givi_button");
      my_givi_button.querySelector("a span:nth-child(2)").innerText = "View Image";
      my_givi_button.querySelector("a span:nth-child(1)").className = "";
      my_givi_button.querySelector("a span:nth-child(1)").innerHTML = "";
      
      var link = my_givi_button.querySelector("a");
      link.href = img_src;
      link.className = "";
      link.removeAttribute("data-cthref");
      link.removeAttribute("jsaction");

      buttons.appendChild(my_givi_button);
    }
    var link = my_givi_button.querySelector("a");
    link.href = img_src;
  }
}
window.addEventListener("load", check_google_page);