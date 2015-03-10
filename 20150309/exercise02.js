// write a script containing the function identity(n)
// that returns the n rows by n columns identity matrix
function identityMatrix(n) {
	var row;
	for(var i=1; i<=n;i++) {
		row = "";
		for(var j=1; j<=n;j++) {
			row += ((i===j) ? 1 : 0) + "\t";
		}
		console.log(row);
	}
}
