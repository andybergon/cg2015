var row;
for(var i=0; i<=10;i++) {
	row = "";
	for(var j=1; j<=10;j++) {
		row += (10*i + j) + "\t";
	}
	console.log(row);
}