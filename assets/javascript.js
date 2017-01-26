// simulate click on input button.
$('.upload-btn').on('click', function (){
    $('#choose-input').click();
});

// If file is chosen, simulate a click on the submit button.
$('#choose-input').on('change', function() {
  $('#submit-input').click();
});