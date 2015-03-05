var row;
for(var i=1; i<=10;i++) {
	row = "";
	for(var j=1; j<=10;j++) {
		row += ((i===j) ? 1 : 0) + ((j!==10) ? "," : "") + "\t";
	}
	console.log(row);
}