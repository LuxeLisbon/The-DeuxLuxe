// create a function that states "hello!"
function sayHello(phraseToPrint) {
	console.log(phraseToPrint);
}

sayHello('hello!');

sayHello('goodbye');


// Challenge 3
// Step 1: create billAmount and store random number in it
// Step 2: create a gratuity() function that multiplies billAmount by 20% (0.2)
// this should return the value of gratuity
// Step 3: create a function called totalWithGrat.
// pass in our original amount and add the gratuity to it

var billAmount = 120;

function gratuity() {
	return billAmount * 0.2;
} function totalWithGrat(amount) {
	billAmount = amount;
	return amount + gratuity();
}

console.log('You total, including gratuity is: $' + totalWithGrat(150));