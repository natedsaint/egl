const PhysicsCollision = function(mass = 1) {
  this.mass = mass;
};

// whenever velocity is calculated we'll also need to determine the impact of gravity

PhysicsCollision.prototype.name = 'physics_collision';

export default PhysicsCollision;