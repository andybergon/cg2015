(function () {
	var person = {
		money : 10000,
		// car : [],
		buy : function(car) {
			// non ho visibilità di money, come faccio?
			// money -= car.price;
			// car.push(car);
			console.log("I'm rich");
		}
	};

	var car = {
		drive : function() { console.log("Vrum Vrum"); },
		price : 1500
	};

	// print Vrum Vrum
	car.drive();

	// print I'm rich
	if ( car.price > 1000 ) {
		person.buy(car);
	}
}());



(function () {
	// non chiedeva di farlo con OOP e prototype
	var employees = [ 
							{hello : function() {console.log("I work at IBM");}},
							{hello : function() {console.log("I work at IBM");}},
							{hello : function() {console.log("I work at IBM");}} 
						] ; // fill code here;

	for (var i=0; i < employees.length; ++i ) {
		// print I work at IBM
		employees[i].hello();
	}
}());
