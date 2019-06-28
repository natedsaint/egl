// for now only make equilateral triangles
const CanvasColor = function(red = 0, green = 0, blue = 0) {
  this.red = red;
  this.green = green;
  this.blue = blue;
};

// triangles will also have a world position, but the canvas draw system
// determines the center and rotates the points around 
// a circle from that

CanvasColor.prototype.name = 'canvas_color';

export default CanvasColor;