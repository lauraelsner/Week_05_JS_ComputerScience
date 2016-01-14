// The error message
var errorMessage = 'Please enter a value.';

// When user clicks F to C
$('#fahrenheit_to_celsius').on('click', function() {
  var temp = $('#temperature').val();
  // parse the value from a string to a float
  temp = parseFloat(temp);
  var convertedTemp = (temp - 32) * 5/9;

  // If the value of the input isn' NaN (Not a Number), display the result
  if (!isNaN(temp)) {
    $('#result').html(temp + "°F = " + convertedTemp + "°C");
  } else { // if it is NaN, show the error message
    $('#temperature').addClass('error');
    $('.error-message').fadeIn(500).html(errorMessage);
  }
});

// When user clicks C to F
$('#celsius_to_fahrenheit').on('click', function() {
  var temp = $('#temperature').val();
  // parse the value from a string to a float
  temp = parseFloat(temp);
  var convertedTemp = temp * 9 / 5 + 32;

  // If the value of the input isn' NaN (Not a Number), display the result
  if (!isNaN(temp)) {
    $('#result').html(temp + "°C = " + convertedTemp + "°F");
  } else { // if it is NaN, show the error message
    $('#temperature').addClass('error');
    $('.error-message').fadeIn(500).html(errorMessage);
  }
});

// Watch for the user typing in the input
$('#temperature').on('keyup', function() {
  // Clear out the results
  $('#result').html('');
  // Hide the error message
  $('.error-message').hide();
  // Remove the error class if it's present
  $('#temperature.error').removeClass('error');
});