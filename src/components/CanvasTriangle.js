// for now only make equilateral triangles
const CanvasTriangle = function(width = 2, angle = 0) {
  this.width = width;
  this.angle = angle;
};

CanvasTriangle.prototype.name = 'canvas_triangle';

export default CanvasTriangle;