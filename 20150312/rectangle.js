function Rectangle (base, height) {
	this.base = base;
	this.height = height;
}

Rectangle.prototype.area = function () {
	return this.base * this.height;
};
