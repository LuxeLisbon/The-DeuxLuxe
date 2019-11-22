$(document).ready(function() {
	//jquery
var elements = $('#firstDiv');
console.log(elements[0]);

// vanilla js
var elements = document.getElementById('firstDiv');

// on click, do something
$('#myButton') .click(function(event) {
	console.log($(this));
	this.innerHTML = 'Changed the button content!';

	var newElement = "<div>Adding divs like it's our job</div>";
	var parentElement = $(this).parent();
	$(parentElement).append(newElement);

	$(this).append(newElement);

	$(this).addClass('newClass');

	$(elements).removeClass('blueDiv');
});

// $('#myButton').on('click', function(event) 

// });
});
