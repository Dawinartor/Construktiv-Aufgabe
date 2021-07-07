// ausfueren der Funktion myFunction(), wenn Seite gescrollt wird
window.onscroll = function() { stickyNavbar() };

/* 
TODO Kann Elemente nicht im Script auswählen, 
     weil DOM noch nicht geladen ist.
     Wie komme ich an die Elemente ran?
*/

// nehme navbar als Element
var navbar = document.getElementById("navbar");

// rufe attribut 'offsetTop' von navbar ab
var sticky = navbar.offsetTop;

function stickyNavbar() {
    console.log("Hello");
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
