// write a script containing the function fibonacci(i) that returns the i-th element of the Fibonacci's serie (apply memoization pattern)
function fibonacci(n) {
	fibonacci[0] = 0;
	fibonacci[1] = 1;
	if(!(n in fibonacci)) {
		fibonacci[n] = fibonacci(n-1) + fibonacci(n-2);
	}
	return fibonacci[n];
}