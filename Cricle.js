
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

Cricle.prototype.draw = function(ctx, canvas) {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.beginPath();
    ctx.arc(this.radius, this.radius, this.radius, 0, 2*Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}
