/* Script for AMNH scorpions website */
/* Website visual design and front-end development by Isadora Williams, copyright 2018 */

// on scroll, remove class .bg-trans from #nav-header and add class .bg-dark, transition .5s
// ^before writing this, add class .bg-trans and remove class .bg-dark to #nav-header in html

// on scroll, remove class .invisible and add class .visible to .navbar-brand img, transition .5s
// ^before writing this, add .invisible class to .navbar-brand img in html

// delay scroll of .scroll-second until #logo-header reaches top of screen
// ^this will allow for the temporary reveal of the #homepage-header background image

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

// user clicks on an <a> within the #reasons-grid
// modal dialog displays full content of <a>

// SCRIPT for #reasons-grid interaction

// get modal content <a>
// listen for show.bs.modal
$('#reasonsModal').on('show.bs.modal', function (event) {
  // get <a> that triggered the modal
  let button = $(event.relatedTarget)
  // get html from <a>
  let content = button.html()
  // target modal
  let modal = $(this)
  // put html from <a> into modal
  modal.find('.modal-body').html(content)
  // remove p.read-more within modal
  modal.find('p.read-more').remove()
})

// USERFLOW for #reasonsModal interaction
// user clicks one of icons at bottom of modal dialog
// content from corresponding #reasons-grid li loads in modal

// PSEUDOCODE for #reasonsModal interaction


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
