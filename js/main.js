/* Script for AMNH scorpions website */
/* Website visual design and front-end development by Isadora Williams, copyright 2018 */

// Header nav appears on scroll
$(window).scroll(function () {
    let offset = $(window).scrollTop();

    if (offset > 550) {
      // remove class .bg-trans from #nav-header, add class .bg-dark, and slide down
      $('#nav-header').addClass('bg-dark').removeClass('bg-trans').css({'margin-top':'0','transition':'all 1s'});
      // show .navbar-brand img
      $('.navbar-brand img').css({'opacity':'1','transition':'all 1s'});
    } else {
      $('#nav-header').addClass('bg-trans').removeClass('bg-dark').css({'margin-top':'-55px','transition':'all 1s'});
      $('.navbar-brand img').css({'opacity':'0','transition':'all 1s'}); 
    }
  })

// ScrollMagic controller
let controller = new ScrollMagic.Controller();

  // Scene 1: reveal #homepage-header background image
  // create scene triggered by reaching px location
  let scene1 = new ScrollMagic.Scene({
    offset: 0, // start scene after scrolling for 0px
    duration: 600 // pin the element for 600px of scrolling
  })
  .setPin('main'); // the element we want to pin

  // Scene 2: #reasons-grid icons animate with fadeInDown
  // create scene trigged by reaching element
  let scene2 = new ScrollMagic.Scene({
    triggerElement: '#reasons-grid', // starting scene when reaching this element
    duration: 0 // pin the element for a total of 0px, i.e. don't pin anything
  })
  .triggerHook(1) // triggerHook 0 is top of window, .5 is middle, 1 is bottom
  .setClassToggle('#reasons-grid i','fadeInDown');

  // Scene 3: #related-projects cards animate with fadeInRight
  let scene3 = new ScrollMagic.Scene({
    triggerElement: '#related-projects',
    duration: 0
  })
  .triggerHook(1)
  .setClassToggle('#related-projects .card','fadeInRight');

  // Add one scene to ScrollMagic Controller
  // controller.addScene(scene1);
  // Add more than one Scene to ScrollMagic Controller
  controller.addScene([
    scene1,
    scene2,
    scene3
  ]);

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


