import Entify from 'entify';
import CanvasColor from '../../components/CanvasColor.js';
import CanvasTriangle from '../../components/CanvasTriangle.js';
import WorldPosition from '../../components/WorldPosition.js';
import PhysicsVelocity from '../../components/PhysicsVelocity.js';

const Character = function(size, angle, color, position, velocity) {
  let entity = new Entify.Entity();
  let red = (color && color.red) ? color.red : 255;
  let green = (color && color.green) ? color.green : 255;
  let blue = (color && color.blue) ? color.blue : 255;
  let posY = (position && position.y) ? position.y : 0;
  let posX = (position && position.x) ? position.x : 0;
  let velX = (velocity && velocity.x) ? velocity.x : 0;
  let velY = (velocity && velocity.y) ? velocity.y : 0;
  entity.addComponent(new CanvasColor(red, green, blue));
  entity.addComponent(new CanvasTriangle(size, angle));
  entity.addComponent(new WorldPosition(posX,posY));
  entity.addComponent(new PhysicsVelocity(velX, velY));
  return entity;
};

export default Character;
