import Entify from 'entify';
import Gravity from './Gravity.js';

const Physics = new Entify.System('Physics');

Physics.scale = 1; // pixels to 1 meter

Physics.g = 9.807; // meters per second per second

Physics.setup = () => {
};

Physics.work = (entities) => {
  entities.forEach((entity) => {
    if (entity.components.physics_gravity && entity.components.world_position) {
      entity = Gravity(entity, Entify.deltaTime, Physics);
    }
    if (entity.components.physics_velocity && entity.components.world_position) {
      entity.components.world_position.x += entity.components.physics_velocity.x;
      entity.components.world_position.y += entity.components.physics_velocity.y;
    }
  });
};

export default Physics;