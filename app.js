$(document).ready(function() {
	$("form").on("submit", function() {
		$(".header").css("background-color", "orange");
	});
});

// user submits form
// get input from form using .val()
// place the text from this input on top of the image using .attr()
// use .val() to erase input from form
