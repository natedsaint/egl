import Entify from 'entify';
import CanvasColor from '../../components/CanvasColor.js';
import CanvasTriangle from '../../components/CanvasTriangle.js';
import WorldPosition from '../../components/WorldPosition.js';
import PhysicsVelocity from '../../components/PhysicsVelocity.js';
import PhysicsGravity from '../../components/PhysicsGravity.js';
import PhysicsCollision from '../../components/PhysicsCollision.js';

const Character = function(size, angle, color, position, velocity, mass) {
  let entity = new Entify.Entity();
  let red = (color && color.red > -1) ? color.red : 255;
  let green = (color && color.green > -1) ? color.green : 255;
  let blue = (color && color.blue > -1) ? color.blue : 255;
  let posY = (position && position.y) ? position.y : 0;
  let posX = (position && position.x) ? position.x : 0;
  let velX = (velocity && velocity.x) ? velocity.x : 0;
  let velY = (velocity && velocity.y) ? velocity.y : 0;
  let colliderMass = mass || 0;
  entity.addComponent(new CanvasColor(red, green, blue));
  entity.addComponent(new CanvasTriangle(size, angle));
  entity.addComponent(new WorldPosition(posX,posY));
  entity.addComponent(new PhysicsVelocity(velX, velY));
  entity.addComponent(new PhysicsGravity(1));
  entity.addComponent(new PhysicsCollision(colliderMass));
  return entity;
};

export default Character;
