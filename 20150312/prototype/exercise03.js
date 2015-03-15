(function () {
	// write your code here to make the program work 
	function Summer() {
		this.sum = 0;
	}

	Summer.prototype.getCurrentSum = function () {
		return this.sum;
	};

	Summer.prototype.add = function (number) {
		this.sum += number;
	};


	//N.B. Need NEW, altrimenti si riferisce all'oggetto di (window)
	var s1 = new Summer();
	var s2 = new Summer();

	s1.add(10);
	s1.add(20);

	s2.add(30);

	s2.add(5);

	// prints 30
	console.log(s1.getCurrentSum());

	// prints 35
	console.log(s2.getCurrentSum());

}());
