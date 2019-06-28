// for now only make equilateral triangles
const CanvasTriangle = function(width = 2, angle = 0) {
  this.width = width;
  this.angle = angle;
};

// triangles will also have a world position, but the canvas draw system
// determines the center and rotates the points around 
// a circle from that

CanvasTriangle.prototype.name = 'canvas_triangle';

export default CanvasTriangle;