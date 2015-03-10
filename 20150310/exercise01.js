//1a
function pushN (array, n) {
	for(var i = 1; i <= n; i++)
		array.push(i);
	return array;
}

//1b
var odd = function (item) { return (item % 2 === 0); }

function filterOdd (array) {
	var filterResult = array.filter(odd);
	return filterResult;
}

//1c
var double = function (n) { return n*2; };

function doubleArray (array) {
	return array.map(double);
}

// perchè non funziona?
function doubleArrayFE (array) {
	array.forEach(double);
	for (element in array) {
		console.out(element);
	};
}

//1d
var divFour = function (n) { return n % 4 === 0; };

function filterDivFour (array) {
	return array.filter(divFour);
}

//1e
function sumAll (array) {
	var total = 0;
	array.forEach(function(item){ total += item; });
	return total;
}

//sumAll(filterDivFour(doubleArray(filterOdd(pushN([], 10)))));