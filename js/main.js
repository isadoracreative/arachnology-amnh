
$(window).scroll(function () {
    let offset = $(window).scrollTop();

    if (offset > 150) {
      $('header').addClass('header-offset')
    } else {
      $('header').removeClass('header-offset')
    }
  })

// USERFLOW for header

// user scrolls past initial view
// header transitions to smaller header and sticks to top of window

// PSEUDOCODE for header

// I have to admit I wrote the above js before the pseudocode, so below is practice for writing it differently:
// grab header
// listen for scroll past 150px
// if header has scrolled past 150px, add the class for the smaller header <-will require creating css class and adding transition
// else (header has not scrolled past 150px), remove the class for the small header


// USERFLOW for #reasons-grid

// user scrolls past previous article
// icons within #reasons-grid .animate with zoomIn one row at a time


// PSEUDOCODE for #reasons-grid

// grab #reasons-grid i.fa
// listen for top of #reasons-grid i.fa to reach 50% of height of viewport
// Attach a change event to #
  



// Instructions:
// 1. Attach a change event to #city-type;
// $('#city-type').change(updateBackground)

// // 2. Associate the above change event with an anonymous function
// function updateBackground() {
//   // 3. Inside this anonymous function, do the following:
  
// // 4. Create a variable, city, that stores the selected value of #city-type (hint: use .val())
//   const city = $('#city-type').val();
// // 5. Remove all classes from the <body> element using the .removeClass() method
//   $('body').removeClass();
// // 6. The variable you created in step 4, corresponds to a CSS class (check in the sytle.css file for more info)
// //    Use the .addClass() method to add this variable as a class to <body>  
//   $('body').addClass(city);
// }