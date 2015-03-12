//2a, write a function that pushes into an array n random integer numbers
function pushNRandom(array, n) {
	for (var i = 0; i < n; i++) {
		array.push(Math.round(Math.random()*100+1));
	};
	return array;
}

//pushNRandom([], 10);

//2b, filter even numbers and return the odd ones
var oddFN = function odd(n) {
	return n%2!==0;
}
function filterEven(array) {
	return array.filter(oddFN);
}

//filterEven(pushNRandom([], 10));

//2c, sort obtained numbers from the smallest to the largest
var greaterFN = function greater(v1, v2){
	return v1 - v2;
}

function sortNumerical(array) {
	array.sort(greaterFN);
	return array;
}

//sortNumerical(filterEven(pushNRandom([], 10)));
