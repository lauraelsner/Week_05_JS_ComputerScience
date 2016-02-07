
// user enters a value

// user clicks F to C
// initialVal = get value of input
// resultVal = use formula of F to C to convert initialVal to C
// display resultVal in #result
$('#fahrenheit_to_celsius').on('click', function(){
	var initialVal = $('#temperature').val();
	var resultVal = (parseFloat(initialVal) - 32) / 1.8;

	changeBackground(initialVal);

	if (isNaN(resultVal)){
		$('#result').addClass('error');
		$('.error-message').html('<p>Please enter a numerical value</p>');
		$('.error-message').fadeIn(200);

		} else {
		$('#result').html(resultVal + 'Â° Celsius');
	}
})

// user clicks C to F
// initialVal = get value of input
// resultVal = use formula of C to F to conver inital value to F
// display the conversion in #result
$('#celsius_to_fahrenheit').on('click', function (){
	var initialVal = $('#temperature').val();
	var resultVal = (parseFloat(initialVal) * 1.8) + 32;

	changeBackground(resultVal);

	if (isNaN(resultVal)){
		$('#result').addClass('error');
		$('.error-message').html('<p>Please enter a numerical value</p>');
		$('.error-message').fadeIn(200);

		} else {
		$('#result').html(resultVal + 'Â° Fahrenheit');
	}
});
 
$('#temperature').on('focus', function (){
	$('.error-message').hide();
	$('#result').html('');
})

function changeBackground(resultVal, cOrF) {
	if (resultVal >= 100) {
		$('body').css('background-position-x', '100%');
	}else if (resultVal >= 80 && resultVal < 100) {
		$('body').css('background-position-x', '50%');
	}else if (resultVal >= 40 && resultVal < 80) {
		$('body').css('background-position-x', '25%');
	}else if (resultVal < 40) {
		$('body').css('background-position-x', '0');
	}
}