const WorldPosition = function(x = 0, y = 0) {
  // anything that exists in the world has a world position. for now we can 
  // make the world and camera 1:1. in the future it should move
  this.x = x;
  this.y = y;
};

WorldPosition.prototype.name = 'world_position';

export default WorldPosition;