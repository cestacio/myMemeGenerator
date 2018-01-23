$(function() {
	$("form").on("submit", function(event) {
		event.preventDefault();

		// grab text input from form
		var imageUrl = $("#imageurl").val();
		var topText = $("#top").val();
		var bottomText = $("#bottom").val();

		// set image properties to image url
		var imageProperties = {
			class: "meme",
			style: `background: url(${imageUrl}); background-size: cover; background-repeat: no-repeat; background-position: center center;`
		};

		// set the text to the images
		var $newMeme = $("<li>");
		$newMeme.attr(imageProperties);
		var top = $("<p>");
		var bottom = $("<p>");
		top.attr("id", "meme-text-top").text(topText);
		bottom.attr("id", "meme-text-bottom").text(bottomText);

		/*
		// set text to id's
		$("#meme-text-top").text(topText);
		$("#meme-text-bottom").text(bottomText);*/

		// add text to photo
		$newMeme.append(top).append(bottom);
		$("ul").prepend($newMeme);

		// clear values from form
		$("#imageurl").val("");
		$("#top").val("");
		$("#bottom").val("");
	});

	// delete meme
	$("ul").on("click", "li", function() {
		$(this).fadeOut(500, function() {
			$(this).remove();
		});
	});
});
