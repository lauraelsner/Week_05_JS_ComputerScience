
// user enters a value

// user clicks F to C
// initialVal = get value of input
// resultVal = use formula of F to C to convert initialVal to C
// display resultVal in #result
$('#fahrenheit_to_celsius').on('click', function(){
	var initialVal = $('#temperature').val();
	var resultVal = (parseFloat(initialVal) - 32) / 1.8;

	if (isNaN(resultVal)){
		$('#result').addClass('error');
		$('.error-message').html('<p>Please enter a numerical value</p>');
		$('.error-message').fadeIn(200);

		} else {
		$('#result').html(resultVal + '° Celsius');
			if (resultVal > 93) {
				$('body').css('background-image', 'linear-gradient(-218deg, #45B4FE 0%, #F73740 5%');
			}else if (resultVal > 37) {
				$('body').css('background-image', 'linear-gradient(-218deg, #45B4FE 0%, #F73740 60%');
			}else if (resultVal < 1) {
				$('body').css('background-image', 'linear-gradient(-218deg, #45B4FE 40%, #F73740 100%');
			}else if (resultVal < -73) {
				$('body').css('background-image', 'linear-gradient(-215deg, #45B4FE 80%, #F73740 100%');
			}
	}
})

// user clicks C to F
// initialVal = get value of input
// resultVal = use formula of C to F to conver inital value to F
// display the conversion in #result
$('#celsius_to_fahrenheit').on('click', function (){
	var initialVal = $('#temperature').val();
	var resultVal = (parseFloat(initialVal) * 1.8) + 32;

	if (isNaN(resultVal)){
		$('#result').addClass('error');
		$('.error-message').html('<p>Please enter a numerical value</p>');
		$('.error-message').fadeIn(200);

		} else {
		$('#result').html(resultVal + '° Fahrenheit');
			if (resultVal > 200) {
				$('body').css('background-image', 'linear-gradient(-218deg, #45B4FE 0%, #F73740 5%');
			}else if (resultVal > 80) {
				$('body').css('background-image', 'linear-gradient(-218deg, #45B4FE 0%, #F73740 60%');
			}else if (resultVal > 0) {
				$('body').css('background-image', 'linear-gradient(-218deg, #45B4FE 40%, #F73740 100%');
			}else if (resultVal < -100) {
				$('body').css('background-image', 'linear-gradient(-215deg, #45B4FE 80%, #F73740 100%');
			}
	}
});
 
$('#temperature').on('focus', function (){
	$('.error-message').hide();
	$('#result').html('');
})





