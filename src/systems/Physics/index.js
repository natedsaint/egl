import Entify from 'entify';
import Gravity from './Gravity.js';
import Velocity from './Velocity.js';
import Collision from './Collision.js';

const Physics = new Entify.System('Physics');

Physics.scale = 1; // pixels to 1 meter

Physics.g = 9.807; // meters per second per second

Physics.setup = () => {
};

Physics.work = (entities) => {
  entities.forEach((entity) => {
    if (entity.components.physics_collision) {
      // TODO: find all other entities with collision and check for collision
      // TODO: find world bounds and check for collision
      entity = Collision(entity, entities); 
    }
    if (entity.components.physics_gravity && entity.components.world_position) {
      entity = Gravity(entity, Entify.deltaTime, Physics);
    }
    if (entity.components.physics_velocity && entity.components.world_position) {
      entity = Velocity(entity);
    }
  });
};

export default Physics;