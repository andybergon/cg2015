(function() {
	function Point2D(x,y) {
		this.x = x;
		this.y = y;
	}

	function Edge(vertex1,vertex2) {
		this.vertex1 = vertex1;
		this.vertex2 = vertex2;
	}

	Edge.prototype.length = function() {
		var x_length = Math.abs(this.vertex2.x - this.vertex1.x),
			y_length = Math.abs(this.vertex2.y - this.vertex1.y),
			length = Math.sqrt(Math.pow(x_length,2)+Math.pow(y_length,2));

		return length;
	};

	// exercise09
	// write a constructor function Trinagle that create a triangle given its three edges.
	function Triangle(edge1, edge2, edge3) {
		this.edge1 = edge1;
		this.edge2 = edge2;
		this.edge3 = edge3;
	}

	// exercise09a
	// write a method perimeter for Triangle that compute the perimeter of the triangle.
	Triangle.prototype.perimeter = function() {
		return this.edge1.length() + this.edge2.length() + this.edge3.length();
	};

	// exercise09b
	// write a method area for Triangle that compute the area of the triangle (Do you remeber the Erone's formula?).
	Triangle.prototype.area = function() {
		var a = this.edge1.length(),
			b = this.edge2.length(),
			c = this.edge3.length(),
			p = (a + b + c) / 2;
		return Math.sqrt(p*(p-a)*(p-b)*(p-c));
	};

	// TESTS
	var edge1 = new Edge(new Point2D(1,1), new Point2D(3,1));
	var edge2 = new Edge(new Point2D(1,1), new Point2D(1,4));
	var edge3 = new Edge(new Point2D(3,1), new Point2D(1,4));
	var triangle = new Triangle(edge1, edge2, edge3);
	console.log("Perimetro: " + triangle.perimeter());
	console.log("Area: " + triangle.area());
})();
