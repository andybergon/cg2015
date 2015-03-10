// write a script containing the function fibonacci(i) that returns the i-th element of the Fibonacci's serie (apply memoization pattern)
function fibonacci(i) {
	fibonacci[0] = 0;
	fibonacci[1] = 1;
	if(!(i in fibonacci)) {
		fibonacci[i] = fibonacci(i-1) + fibonacci(i-2);
	}
	return fibonacci[i];
}
