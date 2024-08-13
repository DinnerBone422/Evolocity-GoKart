//Set Variables
var menuState = 0;

// When this function is called the navigation menu is opened
function openCloseMenuFunction() {
  if (menuState == 0) { //Menu Opened
    document.getElementById("menu").style.transform = "translateX(0)";
    document.getElementById("MenuOpenCloseButton").innerHTML = "close";
    document.getElementById("menu").style.width = "0%";
    menuState = 1;
  } else { //Menu Opened
    document.getElementById("menu").style.transform = "translateX(100%)";
    document.getElementById("MenuOpenCloseButton").innerHTML = "menu";
    document.getElementById("menu").style.width = "100%";
    menuState = 0;
  }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log("body" + document.body.scrollTop);
    console.log("documentElement" + document.documentElement.scrollTop);
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("ScrollToTopButton").style.display = "block";
  } else {
    document.getElementById("ScrollToTopButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}