// Koi-Koi Traditional User Script
// 
// version 20191112
// 
// by Matt Sephton
// https://boardgamearena.com/player?id=85048132
// https://twitter.com/gingerbeardman

// helper 
function getStyle(el, styleProp) {
    var x = el, y = null;
    if (x.currentStyle) {
        y = x.currentStyle[styleProp];
    } else if (window.getComputedStyle) {
        y = document.defaultView.getComputedStyle(x, null).getPropertyValue(styleProp);
    }
    return y;
}

function clickDiscard() {
    if (document.getElementById("faceup_cards_item_1000")) {
        // console.log("こいこい discard card = clicked");
        document.getElementById("faceup_cards_item_1000").click();
    }
}
// discard when clicking on table
document.getElementById("cardsontable").addEventListener("click", clickDiscard, true);

function clickFaceUpCards() {
    var countCards = 0;

    var faceUpCards = document.querySelectorAll("#faceup_cards .stockitem div");
    // console.log("こいこい table cards = " + faceUpCards.length);

    // count available matching cards
    faceUpCards.forEach(function (singleCard) {
        var singleCardOpacity = getStyle(singleCard, "opacity");
        if (parseFloat(singleCardOpacity) == 0) {
            countCards++;
        }
    });
    // console.log("こいこい available cards = " + countCards);

    if (countCards != 1) return false;

    faceUpCards.forEach(function (singleCard) {
        var singleCardOpacity = getStyle(singleCard, "opacity");
        if (parseFloat(singleCardOpacity) == 0) {
            if (document.body.contains(singleCard)) {
                // console.log("こいこい click card = " + singleCard.id);
                singleCard.click();
            }
        }
    });
    clearMatches();
}
// capture first available card when clicking on table
document.getElementById("cardsontable").addEventListener("click", clickFaceUpCards, true);

var alreadyWatching = false;
// create an observer instance
document.getElementById("cardsontable_wrap").addEventListener("click", observeFaceUpCards, true);

function observeFaceUpCards() {
    if (window.alreadyWatching == true) return;
    window.alreadyWatching = true;

    if (observer) observer.disconnect();

    // console.log("こいこい mutation observer setup");

    var target = document.getElementById("drawn");
    var observer = new WebKitMutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            // console.log("こいこい mutation detected");
            // $('#log').text('input text changed: "' + target.text() + '"');
            if (mutation.type === 'childList' && mutation.removedNodes.length) {
                // console.log("こいこい mutation", 1+Math.abs(parseInt(mutation.removedNodes[0].style.backgroundPositionY)/100));
                showMatches();
            }
        });
    });
    observer.observe(target, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
    });
}

function clearMatches() {
    var tableCards = document.querySelectorAll("#cardsontable .stockitem");
    var playerCards = document.querySelectorAll("#player_hand .stockitem");

    //clear highlights
    if (playerCards.length) playerCards.forEach(function (singleCardPlayer) {
        singleCardPlayer.classList.remove("highlight");
    });
    if (tableCards.length) tableCards.forEach(function (singleCardTable) {
        singleCardTable.classList.remove("highlight");
    });
}

function showMatches() {
    // var drawCard = document.querySelectorAll("#drawn .stockitem");
    // console.log("こいこい draw card visible", drawCard);
    var playerTurn = document.body.classList.contains('current_player_is_active');

    var tableCards = document.querySelectorAll("#cardsontable .stockitem");
    var playerCards = document.querySelectorAll("#player_hand .stockitem");

    clearMatches();

    if (!playerTurn) return;

    // compare each player card to table card and highlight any matching cards
    playerCards.forEach(function (singleCardPlayer) {
        singleCardPlayer.classList.remove("highlight");

        var singleCardPlayerMonth = Math.abs(parseInt(singleCardPlayer.style.backgroundPositionY)) + 1;

        tableCards.forEach(function (singleCardTable) {
            var singleCardTableMonth = Math.abs(parseInt(singleCardTable.style.backgroundPositionY)) + 1;

            if (singleCardTableMonth == singleCardPlayerMonth) {
                // console.log("こいこい match", singleCardTableMonth);

                singleCardTable.classList.add("highlight");
                singleCardPlayer.classList.add("highlight");
            }
        });
    });
}
setTimeout(showMatches, 2000);

// press control key to click area
function pressControl(e) {
    if (e.keyCode == 17) {
        document.getElementById("cardsontable").click();
    }
}
document.addEventListener("keyup", pressControl, false);

// FIX
// bug matching card with no background pos

// TODO
// auto click when only 1 choice
// auto capture three cards that match drawn card
// number keys to pick cards
