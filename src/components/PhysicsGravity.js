const PhysicsGravity = function(magnitude = 1) {
  this.magnitude = 1;
  this.fallDuration = 0;
  this.falling = true;
};

// whenever velocity is calculated we'll also need to determine the impact of gravity

PhysicsGravity.prototype.name = 'physics_gravity';

export default PhysicsGravity;