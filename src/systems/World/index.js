import Entify from 'entify';

// physics will modify the position of the item before it gets here based on velocity
// and gravity calculations, this just paints them

const World = new Entify.System('World');

World.setup = () => {
  World.height = 600;
  World.width = 800;
};

World.work = (entities) => {
  // for now this does nothing,
  // but in the future this is where we'll map the world position to the camera position
  // so the canvas knows what to draw
};

export default World;