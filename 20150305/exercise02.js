var row;
for(var i=1; i<=10;i++) {
	row = "";
	for(var j=1; j<=10;j++) {
		row += (i*j) + ((j!==10) ? "," : "") + "\t";
		// if(j!==10)
		// 	row += ",\t";
		// else
		// 	row += "\t";
	}
	console.log(row);
}