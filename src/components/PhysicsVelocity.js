const PhysicsVelocity = function(x = 0, y = 0) {
  this.x = 0;
  this.y = 0;
  // two dimensionsal universe, easier to map to complementary velocities 
  // rather than magnitude and angle: but we may convert to vector math later
};

PhysicsVelocity.prototype.name = 'physics_velocity';

export default PhysicsVelocity;