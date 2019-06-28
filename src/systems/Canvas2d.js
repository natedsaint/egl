import Entify from 'entify';
const Canvas2d = new Entify.System('canvas2d');

Canvas2d.width = 800;
Canvas2d.height = 600;

Canvas2d.setup = () => {
  // inject canvas into DOM
  const canvas = document.createElement('canvas');
  canvas.width = this.width;
  canvas.height = this.height;
  canvas.id = 'eglCanvas'; // for making this easy to deal with in dom
  canvas.className = 'eglCanvas'; // for styling
  document.appendChild(canvas);
  this.context = canvas.getContext('2d', { alpha: false });
  this.canvas = canvas;
};

Canvas2d.work = (entities) => {
  const ctx = this.context;
  // loop through objects that need to be rendered
  entities.forEach((entity) => {
    // TODO: make subsystems for drawing specific shapes
    if (entity.components.canvas_triangle && entity.components.world_position) {
      const center = entity.components.world_position;
      const size = entity.components.canvas_triangle.width;
      const angle = entity.components.canvas_triangle.angle;
      // let's start with a triangle that's just straight up
      //  𝑥 = D * cos 𝜃
      //  𝑦 = D * sin 𝜃.
      // 360 / 3 = 120
      let points = [];
      // TODO: eventually we'll add the angle to this
      const angles = [0, 120, 240];
      angles.forEach((angle, idx) => {
        const distanceX = size * Math.cos(angle * Math.PI / 180); // convert to degrees
        const distanceY = size * Math.sin(angle * Math.PI / 180); // and again
        points[idx] = [center + distanceX, center + distanceY];
      });
      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);
      ctx.lineTo(points[1][0], points[1][1]);
      ctx.lineTo(points[2][0], points[2][1]);
      ctx.fillStyle = '#f00';
      ctx.fill();
    }
  });
};
export default Canvas2d;