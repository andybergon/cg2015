// write a script containing the function identity(n)
// that returns the n rows by n columns identity matrix
function identityMatrix(n) {
	var matrix = new Array();
	for (var i = 0; i<n; i++) {
		matrix[i] = new Array();
	};

	for(var i=0; i<n;i++) {
		for(var j=0; j<n;j++) {
			matrix[i][j] = ((i===j) ? 1 : 0);
		}
	}
	return matrix;
}
