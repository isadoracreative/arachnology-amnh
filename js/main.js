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

// SCROLLMAGIC
// ScrollMagic controller
let controller = new ScrollMagic.Controller();

  // Scene: reveal #homepage-header background image
  // create scene triggered by reaching px location
  let sceneHomepageHeader = new ScrollMagic.Scene({
    offset: 0, // start scene after scrolling for 0px
    duration: 600 // pin the element for 600px of scrolling
  })
  .setPin('main') // the element we want to pin
  .addTo(controller); // add scene to controller

  // Scene: #reasons-grid icons animate with fadeInDown
  // create scene trigged by reaching element
  let sceneReasonsGrid = new ScrollMagic.Scene({
    triggerElement: '#reasons-grid i', // starting scene when reaching this element
    duration: 0 // pin the element for a total of 0px, i.e. don't pin anything
  })
  .triggerHook(1) // triggerHook 0 is top of window, .5 is middle, 1 is bottom
  .setClassToggle('#reasons-grid i','fadeInDown')
  .addTo(controller);
  // but don't animate '#reasons-grid i' within the modal dialog
  $('#reasons-grid a').on('click', function () {  // listen for click on '#reasons-grid a'
    $('#reasons-grid i').removeClass('fadeInDown'); // removeClass .fadeInDown from '#reasons-grid i'
  })

  // Scene: #science360-video animates with pulse when it reaches center of screen
  let sceneScience360Video = new ScrollMagic.Scene({
    triggerElement: '#science360-video',
    duration: 0
  })
  .triggerHook(.7)
  .setClassToggle('#science360-video div.animated','pulse')
  .addTo(controller);

  // Scene: #related-projects cards animate with fadeInRight one at a time
  let sceneRelatedProjects1 = new ScrollMagic.Scene({
    triggerElement: '#related-projects',
    duration: 0
  })
  .triggerHook(1)
  .setClassToggle('#related-projects .animate1 .card','fadeInRight')
  .addTo(controller);
  let sceneRelatedProjects2 = new ScrollMagic.Scene({
    triggerElement: '#related-projects',
    duration: 0
  })
  .triggerHook(.95)
  .setClassToggle('#related-projects .animate2 .card','fadeInRight')
  .addTo(controller);
  let sceneRelatedProjects3 = new ScrollMagic.Scene({
    triggerElement: '#related-projects',
    duration: 0
  })
  .triggerHook(.93)
  .setClassToggle('#related-projects .animate3 .card','fadeInRight')
  .addTo(controller);
  let sceneRelatedProjects4 = new ScrollMagic.Scene({
    triggerElement: '#related-projects',
    duration: 0
  })
  .triggerHook(.91)
  .setClassToggle('#related-projects .animate4 .card','fadeInRight')
  .addTo(controller);
  let sceneRelatedProjects5 = new ScrollMagic.Scene({
    triggerElement: '#related-projects',
    duration: 0
  })
  .triggerHook(.89)
  .setClassToggle('#related-projects .animate5 .card','fadeInRight')
  .addTo(controller);

// USERFLOW for appearance of #reasons-grid modal
// user clicks on an <a> within the #reasons-grid
// modal dialog displays full content of <a>

// SCRIPT for appearance of #reasons-grid modal
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
  
// USERFLOW for interaction inside #reasonsModal 
// user clicks one of icons at bottom of modal dialog
// content from corresponding #reasons-grid li loads in modal

// SCRIPT for interaction inside #reasonsModal 
// listen for click on <i> within modal
// add 'not' to selector to omit function for 'previous' and 'next' icons
$('#reasonsModal i:not(:first-child,:last-child)').on('click', function (event) {
  // return index of clicked <i> within .modal-footer
  let reasonIndex = $('.modal-footer i').index(this);
  // subtract 1 to skip the first <i> ('previous' caret icon)
  reasonIndex -=1;
  // find <a> of same index within #reasons-grid
  // get html from <a>
  // console.log(reasonIndex) // double check that it's the right index number
  let content = $('#reasons-grid a:eq(' + reasonIndex + ')').html();
  
  // target modal
  let modal = $('.modal-content');
  // replace html from modal body with new content
  modal.find('.modal-body').html(content);
  // remove p.read-more within modal
  modal.find('p.read-more').remove();
})

// add'l USERFLOW for interaction inside #reasonsModal
// user clicks on 'previous' or 'next' caret icon at bottom of modal dialog
// content from previous or next #reasons-grid li loads in modal

// add'l PSEUDOCODE for interaction inside #reasonsModal 
// listen for click on <i> first-child within modal
$('#reasonsModal i:first-child').on('click', function (event) {
  // return html content of <h3> currently displayed in .modal-body  
  let currentHeader = $('.modal-body h3').html();
  // console.log(currentHeader);
  // get the index of the <li> in #reasons-grid that contains that html in its <h3>
  let headerIndex = $('#reasons-grid li:contains(' + currentHeader + ')').index();
  // subtract 1 to get index of previous <li>
  headerIndex -=1;
  // console.log(headerIndex); // double check that it's the right index number
  // get html from the <a> within that <li>
  let content = $('#reasons-grid a:eq(' + headerIndex + ')').html();
  // console.log(content); // double check that it's the correct content
  
  // target modal
  let modal = $('.modal-content');
  // replace html from modal body with new content
  modal.find('.modal-body').html(content);
  // remove p.read-more within modal
  modal.find('p.read-more').remove();
})
// listen for click on <i> last-child within modal
$('#reasonsModal i:last-child').on('click', function (event) {
  // return html content of <h3> currently displayed in .modal-body  
  let currentHeader = $('.modal-body h3').html();
  // console.log(currentHeader);
  // get the index of the <li> in #reasons-grid that contains that html in its <h3>
  let headerIndex = $('#reasons-grid li:contains(' + currentHeader + ')').index();
  // ad 1 to get index of next <li>
  headerIndex +=1;
  // console.log(headerIndex); // double check that it's the right index number
  // get html from the <a> within that <li>
  let content = $('#reasons-grid a:eq(' + headerIndex + ')').html();
  // console.log(content); // double check that it's the correct content
  
  // target modal
  let modal = $('.modal-content');
  // replace html from modal body with new content
  modal.find('.modal-body').html(content);
  // remove p.read-more within modal
  modal.find('p.read-more').remove();
})

// hide Lorenzo's email from spambots
  $("#email-prendini").on('click', function() {
    event.preventDefault();
    let parts = ["lorenzo", "amnh", "org", ".", "@"]; // split into array
    let email = parts[0] + parts[4] + parts[1] + parts[3] + parts[2]; // piece it back together
    // console.log(email); // make sure address came together correctly
    let subject = 'Arachnology at AMNH'; // assign subject of email
    window.location = 'mailto:' + email + '?subject=' + subject; // add mailto so click leads to user's email application
  });
