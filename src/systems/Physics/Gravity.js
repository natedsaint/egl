const Gravity = function(entity, deltaTime, Physics) {
  const newEntity = Object.assign({}, entity);
  if (!newEntity.components.physics_gravity.falling) {
    // TODO: figure out how to separate this from other forms of velocity
    newEntity.components.physics_velocity.x = 0;
    newEntity.components.physics_velocity.y = 0;
    return newEntity;
  }
  const diffTime = (deltaTime) ? deltaTime / 1000: 0;
  const scaledVelocity = Physics.g * Physics.scale * diffTime;
  newEntity.components.physics_velocity.y += scaledVelocity;
  newEntity.components.physics_gravity.fallDuration += diffTime;
  return newEntity;
};

export default Gravity;