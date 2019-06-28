const Velocity = function(entity) {
  const newEntity = Object.assign({}, entity);
  newEntity.components.world_position.x += entity.components.physics_velocity.x;
  newEntity.components.world_position.y += entity.components.physics_velocity.y;
  return newEntity;
};

export default Velocity;