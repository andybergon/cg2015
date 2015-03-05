var row;
for(var i=1; i<=10;i++) {
	row = "";
	for(var j=1; j<=10;j++) {
		row += (i*j) + "\t";
	}
	console.log(row);
}