(function() {
	// exercise08
	// write a constructor function Point2D that create a 2D point given its x and y coordinates.
	function Point2D(x,y) {
		this.x = x;
		this.y = y;
	}

	// exercise08a
	// write a contructor function Edge that create an edge given its two vertices (i.e. two points).
	function Edge(vertex1,vertex2) {
		this.vertex1 = vertex1;
		this.vertex2 = vertex2;
	}

	// exercise08b
	// write a method length for Edge that compute the length of the edge.
	Edge.prototype.length = function() {
		var x_length = Math.abs(this.vertex2.x - this.vertex1.x),
			y_length = Math.abs(this.vertex2.y - this.vertex1.y),
			length = Math.sqrt(Math.pow(x_length,2)+Math.pow(y_length,2));

		return length;
	};

	var edge = new Edge(new Point2D(1,1), new Point2D(2,3));
	console.log(edge.length());
});
