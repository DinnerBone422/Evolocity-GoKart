var menuState = 0;
// When this function is called the navigation menu is opened
function openCloseMenuFunction() {
    if (menuState == 0) {
        document.getElementById("menu").style.transform = "translateX(0)";
        document.getElementById("MenuOpenCloseButton").innerHTML = "close";
        menuState = 1;
    } else {
        document.getElementById("menu").style.transform = "translateX(100%)";
        document.getElementById("MenuOpenCloseButton").innerHTML = "menu";
        menuState = 0;
    }
}

// When this function is called the website will scroll back to the top
function scrollToTopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}