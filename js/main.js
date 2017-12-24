/* Script for AMNH scorpions website */
/* Website visual design and front-end development by Isadora Williams, copyright 2018 */

// on scroll, remove class .bg-trans from #nav-header and add class .bg-dark, transition .5s
// ^before writing this, add class .bg-trans and remove class .bg-dark to #nav-header in html

// on scroll, remove class .invisible and add class .visible to .navbar-brand img, transition .5s
// ^before writing this, add .invisible class to .navbar-brand img in html

// delay scroll of .scroll-second until #logo-header reaches top of screen
// ^this will allow for the temporary reveal of the #homepage-header background image

// No-Break
// copied from https://jsfiddle.net/jackvial/19e3pm6e/2/
function noMoreLonelyWords(selector, numWords){
  // Get array of all the selected elements
  var elems = document.querySelectorAll(selector);
  var i;
  for(i = 0; i < elems.length; ++i){
  // Split the text content of each element into an array
    var textArray = elems[i].innerText.split(" ");
  // Remove the last n words and join them with a non-breaking space
    var lastWords = textArray.splice(-numWords, numWords).join("&nbsp;");
  // Join it all back together and replace the existing text with the new text
    var textMinusLastWords = textArray.join(" ");
    elems[i].innerHTML = textMinusLastWords + " " +  lastWords;
  }
}
  // Goodbye lonely words
  noMoreLonelyWords("p", 2);


// nav and header animation before converting to bootstrap
// $(window).scroll(function () {
//     let offset = $(window).scrollTop();

//     if (offset > 150) {
//       $('header').addClass('header-offset')
//     } else {
//       $('header').removeClass('header-offset')
//     }
//   })

// USERFLOW for header

// user scrolls past initial view
// header transitions to smaller header and sticks to top of window

// (new) PSEUDOCODE for header

// grab header
// listen for scroll past 150px
// if header has scrolled past 150px, add the class for the smaller header <-will require css class with transition
// else if header has not scrolled past 150px, remove the class for the small header


// USERFLOW for #reasons-grid entrance

// user scrolls past initial view
// cards slide in right to left


// PSEUDOCODE for #reasons-grid entrance

// create .hide class with margin-left: 100%; and transition: all 0.5s;
// addClass .hide on page load
// get height of browser window
// listen for scroll past that height
// removeClass .hide


// USERFLOW for #reasons-grid interactiion

// full #reasons-grid p hidden
// user hovers over or taps #reasons-grid li
// show #reasons-grid p as styled to popover rest of content
// user hovers off or taps off #reasons-grid li
// return to full #reasons-grid p hidden


// PSEUDOCODE for #reasons-grid interactiion

// grab #reasons-grid li
// grab identity of li (eg. #diversity or #antiquity)
// listen for hover or tap on #reasons-grid li with that id
// add a class to #reasons-grid li with that id that styles the li, h3, and p as a popover
// listen for hover off #reasons-grid
// listen for tap outside of #reasons-grid <-is "tapping outside" a real thing? more research required
// remove the above class from all #reasons-grid li's


// USERFLOW for #related-projects

// user hovers over tile
// background image grows within the div


// PSEUDOCODE for #related-projects

// jquery .animate right to left so they all slide into place from the right side on scroll


// USERFLOW for #related-projects

// user hovers over tile
// background image grows within the div


// PSEUDOCODE for #related-projects

// grab #related-projects div.tile
// attach hover event to #related-projects div.tile
// instruct handlerIn to increase the background-size to 150%
// instruct handlerOut to return the background-size to cover
