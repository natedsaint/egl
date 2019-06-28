const Triangle = function(entity) {
  const center = entity.components.world_position;
  const size = entity.components.canvas_triangle.width;
  const angle = entity.components.canvas_triangle.angle;
  // let's start with a triangle that's just straight up
  //  𝑥 = D * cos 𝜃
  //  𝑦 = D * sin 𝜃.
  // 360 / 3 = 120
  let points = [];
  const angles = [0 + angle, 120 + angle, 240 + angle];
  angles.forEach((angle, idx) => {
    const distanceX = size * Math.cos(angle * Math.PI / 180); // convert to degrees
    const distanceY = size * Math.sin(angle * Math.PI / 180); // and again
    points[idx] = [center.x + distanceX, center.y + distanceY];
  });
  return points;
};

export default Triangle;