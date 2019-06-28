import Entify from 'entify';
import Triangle from '../Shape/Triangle.js';

const Canvas2d = new Entify.System('canvas2d');

Canvas2d.width = 800;
Canvas2d.height = 600;

Canvas2d.setup = () => {
  // inject canvas into DOM
  const canvas = document.createElement('canvas');
  canvas.width = Canvas2d.width;
  canvas.height = Canvas2d.height;
  canvas.id = 'eglCanvas'; // for making this easy to deal with in dom
  canvas.className = 'eglCanvas'; // for styling
  document.body.appendChild(canvas);
  Canvas2d.context = canvas.getContext('2d', { alpha: false });
  Canvas2d.canvas = canvas;
};

Canvas2d.work = (entities) => {
  const canvas = Canvas2d.canvas;
  const ctx = Canvas2d.context;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // loop through objects that need to be rendered
  entities.forEach((entity) => {
    if (entity.components.canvas_triangle && entity.components.world_position) {
      const points = Triangle(entity);
      const color = entity.components.canvas_color;
      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);
      ctx.lineTo(points[1][0], points[1][1]);
      ctx.lineTo(points[2][0], points[2][1]);
      ctx.fillStyle = `rgb(${color.red}, ${color.green}, ${color.blue})`;
      ctx.fill();
    }
  });
};

export default Canvas2d;