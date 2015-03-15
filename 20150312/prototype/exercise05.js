//implement the following Bingo object. The Bingo object should randomize a number between 1 and 10 on creation and provide a single method guess(number). That method should return true if the argument was the secret number. Test your class.

function Bingo() {
	// Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	this.number = Math.floor(Math.random() * 10) + 1;
}

Bingo.prototype.guess = function guess(number) {
	return this.number === number;
}

//test
var bingo = new Bingo();

for (var i = 1; i <= 10; i++) {
	if(bingo.guess(i))
		console.log("Number is " + i);
	else
		console.log("Number isn't " + i);
};
