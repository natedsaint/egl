const Gravity = function(entity, deltaTime, Physics) {
  const newEntity = Object.assign({}, entity);
  if (!newEntity.components.physics_gravity.falling) {
    return newEntity;
  }
  const diffTime = (deltaTime) ? deltaTime / 1000: 0;
  const scaledVelocity = Physics.g * Physics.scale * diffTime;
  newEntity.components.physics_velocity.y += scaledVelocity;
  newEntity.components.physics_gravity.fallDuration += diffTime;
  return newEntity;
};

export default Gravity;