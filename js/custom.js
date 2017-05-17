// When user has scrolled more than 220px, navbar will have a background colour to avoid any overlap with other text
$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
        if (($(document).scrollTop() > 220) ||  (window.innerWidth < 768)){ // check if user scrolled more than 220 from top of the browser window
            $("#mainNav").css("background-color", "white"); // if yes, then change the color of id "mainNav" to white
        }
        else {
            $("#mainNav").css("background-color", "transparent");// if not, change it back to transparent
        }
    });
});