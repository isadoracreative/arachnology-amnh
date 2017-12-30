/* Script for AMNH scorpions website */
/* Website visual design and front-end development by Isadora Williams, copyright 2018 */



// on scroll, remove class .bg-trans from #nav-header and add class .bg-dark, transition .5s
// ^before writing this, add class .bg-trans and remove class .bg-dark to #nav-header in html

// on scroll, remove class .invisible and add class .visible to .navbar-brand img, transition .5s
// ^before writing this, add .invisible class to .navbar-brand img in html

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

// SCROLLMAGIC
// create controller
let controller = new ScrollMagic.Controller();
// create scene triggered by reaching px location
let scene1 = new ScrollMagic.Scene({
  offset: 0, // start scene after scrolling for __px
  duration: 600 // pin the element for __px of scrolling
})
// create scene trigged by reaching element
// let scene = new ScrollMagic.Scene({
//   triggerElement: 'main', // starting scene, when reaching this element
//   duration: 400 // pin the element for a total of 400px
// })
.setPin('main'); // the element we want to pin

// Add Scene to ScrollMagic Controller
// controller.addScene(scene1);

// Add more than one Scene to ScrollMagic Controller
controller.addScene([
  scene1,
  // scene2,
  // scene3
]);

// USERFLOW for #reasons-grid entrance
// user scrolls to #reasons-grid
// fontawesome icons animate with fadeInDown

// PSEUDOCODE for #reasons-grid entrance
// get px height of browser window
// listen for #reasons-grid to reach that px y-coordinate
// addClass .animated and .fadeInDown


// USERFLOW for #reasons-grid modal
// user clicks on an <a> within the #reasons-grid
// modal dialog displays full content of <a>

// SCRIPT for #reasons-grid modal
// get modal content <a>
// listen for show.bs.modal
$('#reasonsModal').on('show.bs.modal', function (event) {
  // get <a> that triggered the modal
  let button = $(event.relatedTarget);
  // get html from <a>
  let content = button.html();
  // target modal
  let modal = $(this);
  // put html from <a> into modal
  modal.find('.modal-body').html(content);
  // remove p.read-more within modal
  modal.find('p.read-more').remove();
})
  

// USERFLOW for #reasonsModal interaction
// user clicks one of icons at bottom of modal dialog
// content from corresponding #reasons-grid li loads in modal

// PSEUDOCODE for #reasonsModal interaction
// listen for click  on <i> within modal
$('#reasonsModal i').on('click', function (event) {
  // return index of clicked <i> within .modal-footer
  let reasonIndex = $('.modal-footer i').index(this);
  // subtract 1 to skip the first <i> ('previous' caret icon)
  reasonIndex -=1;
  // find <a> of same index within #reasons-grid
  // get html from <a>
  
  // let content = $('#reasons-grid a:eq( reasonIndex )').html();
  // ^ can't get reasonIndex to be recognized as a valid substitute for an index number
  // using '0' for index number until I can get reasonIndex to work above
  let content = $('#reasons-grid a:eq(0)').html();
  
  // target modal
  let modal = $('.modal-content');
  // replace html from modal body with new content
  modal.find('.modal-body').html(content);
  // remove p.read-more within modal
  modal.find('p.read-more').remove();
})

// USERFLOW for #reasonsModal interaction
// user clicks on 'previous' or 'next' caret icon at bottom of modal dialog
// content from corresponding #reasons-grid li loads in modal


// USERFLOW for #related-projects entrance
// user scrolls to #related-projects
// cards animate with fadeInRight

// PSEUDOCODE for #related-projects entrance
// get px height of browser window
// listen for #related-projects to reach that px y-coordinate
// addClass .animated and .fadeInRight


// USERFLOW for #related-projects
// user hovers over tile
// background image grows within the div

// PSEUDOCODE for #related-projects
// grab #related-projects div.tile
// attach hover event to #related-projects div.tile
// instruct handlerIn to increase the background-size to 150%
// instruct handlerOut to return the background-size to cover
