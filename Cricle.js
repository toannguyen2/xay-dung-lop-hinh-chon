
// Cricle

let Cricle = function(radius, color) {
	this.radius = Number(radius);
	this.color  = String(color);
}

// get
Cricle.prototype.getRadius = function() {
    return this.radius;
}
Cricle.prototype.getArea = function() {
    return Math.PI*Math.pow(this.radius, 2);
}
