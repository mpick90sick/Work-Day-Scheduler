



 
 // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  $(function() {

    $(function() {
      const currentHour = dayjs().hour(); // Get the current hour using Day.js
      
      // Display the current day at the top of the page
      const currentDayElement = $('#currentDay');
      currentDayElement.text(dayjs().format('dddd, MMMM D'));
    
      // ... Your existing code ...
    
      $('.time-block').each(function() {
        const timeBlock = $(this);
        const hour = parseInt(timeBlock.attr('id').replace('hour-', ''), 10); 
  
  $('.time-block').each(function() {
    const timeBlock = $(this);
    const hour = parseInt(timeBlock.attr('id').replace('hour-', ''), 10); // Extract hour from ID

    // Remove existing classes and then apply new classes based on current time
    timeBlock.removeClass('past present future');
    if (hour < currentHour) {
      timeBlock.addClass('past');
    } else if (hour === currentHour) {
      timeBlock.addClass('present');
    } else {
      timeBlock.addClass('future');
    }


    const userInput = $('#hour');
  
    // Load saved text from localStorage (if any) and populate the input field
    userInput.val(localStorage.getItem('savedText') || '');
  
    // Add event listener to the input element
    userInput.on('input', function() {
      // When user types, update the localStorage with the new text
      localStorage.setItem('savedText', userInput.val());
    });
  
    $('.saveBtn').click(function() {
      // Get the parent time-block element of the clicked button
      const timeBlock = $(this).closest('.time-block');
      
      // Extract the hour from the time-block's ID
      const hour = timeBlock.attr('id');
      
      // Find the description textarea within the time-block
      const description = timeBlock.find('.description');
      
      // Save the user input to localStorage using the hour as the key
      localStorage.setItem(hour, description.val());
      
    })})
    });
    });
  })


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  

