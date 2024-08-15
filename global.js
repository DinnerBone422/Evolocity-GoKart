//Set Variables
let menuState = 0; // When this var is 0 the menu is closed

// When the page is loaded, run the scroll function
window.onload = function() {scrollFunction()};

// When the user scrolls, run the scroll function
window.onscroll = function() {scrollFunction()};


// When this function is called the navigation menu is opened
function openCloseMenuFunction() {
  if (menuState === 0) { //Menu Opened
    document.getElementById("menu").style.transform = "translateX(0)";
    document.getElementById("MenuOpenCloseButton").innerHTML = "close"; 
    document.getElementById("ScrollToTopButton").style.display = "none";
    menuState = 1;
  } else { //Menu Closed
    document.getElementById("menu").style.transform = "translateX(100%)";
    document.getElementById("MenuOpenCloseButton").innerHTML = "menu";
    scrollFunction();
    menuState = 0;
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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