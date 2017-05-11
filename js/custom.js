// When user has scrolled more than 220px, navbar will have a background colour to avoid any overlap with other text
$(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 220) { // check if user scrolled more than 50 from top of the browser window
          $("#mainNav").css("background-color", "#eeeeee"); // if yes, then change the color of id "mainNav" to light grey
        } else {
          $("#mainNav").css("background-color", "transparent"); // if not, change it back to transparent
        }
      });
    });