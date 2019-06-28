import Entify from 'entify';
import CanvasColor from '../components/CanvasColor.js';
import CanvasTriangle from '../components/CanvasTriangle.js';
import WorldPosition from '../components/WorldPosition.js';
import PhysicsVelocity from '../components/PhysicsVelocity.js';

const Character = function(size, angle, color, position, velocity) {
  let entity = new Entify.Entity();
  let red = color.red || 0;
  let green = color.green || 0;
  let blue = color.blue || 0;
  let posY = position.y;
  let posX = position.x;
  let velX = velocity.x;
  let velY = velocity.y;
  entity.addComponent(new CanvasColor(red, green, blue));
  entity.addComponent(new CanvasTriangle(size, angle));
  entity.addComponent(new WorldPosition(posX,posY));
  entity.addComponent(new PhysicsVelocity(velX, velY));
  return entity;
};

export default Character;
