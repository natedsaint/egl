import World from '../World';
import Triangle from '../Shape/Triangle.js';

function dotProduct() {
  var len = arguments[0] && arguments[0].length;
  var argsLen = arguments.length;
  var i, j = len;
  var prod, sum = 0;
 
  // If no arguments supplied, return undefined
  if (!len) {
    return;
  }
 
  // If all vectors not same length, return undefined
  i = argsLen;
  while (i--) {
 
    if (arguments[i].length != len) {
      return;  // return undefined
    }
  }
 
  // Sum terms
  while (j--) {
    i = argsLen;
    prod = 1;
 
    while (i--) {
      prod *= arguments[i][j];
    }
    sum += prod;
  }
  return sum;
}
 
function crossProduct(a, b) {
 
  // Check lengths
  if (a.length != 3 || b.length != 3) {
    return;
  }
 
  return [a[1]*b[2] - a[2]*b[1],
    a[2]*b[0] - a[0]*b[2],
    a[0]*b[1] - a[1]*b[0]];
 
}
 
function scalarTripleProduct(a, b, c) {
  return dotProduct(a, crossProduct(b, c));
}
 
function vectorTripleProduct(a, b, c) {
  return crossProduct(a, crossProduct(b, c));
}

const Collision = function(entity, entities) {
  const newEntity = Object.assign({}, entity);
  // TODO: find all other entities with collision and check for collision
  // TODO: find world bounds and check for collision

  if (newEntity.components.physics_collision) {
    // TODO: make it so there's a parameter that tells which shape function to use to get points
    if (newEntity.components.canvas_triangle) {
      const points = Triangle(newEntity);
      const xVel = newEntity.components.physics_velocity.x;
      const yVel = newEntity.components.physics_velocity.y;
    
      if (newEntity.components.physics_gravity && newEntity.components.physics_gravity.falling) {
        // TODO: implement line-line collision on four lines of stage rather than doing this, ala
        // https://gamedev.stackexchange.com/questions/16827/2d-game-collision-response-sat-minimum-displacement-along-a-given-axis
        
        let outOfWorld = false;
        let vertical = false; // false means x plane, true means y plane
        points.forEach((point) => {
          if (point[0] + xVel >= World.width)  {
            outOfWorld = true;
            vertical = false;
          } else if (point[1] + yVel >= World.height) {
            outOfWorld = true;
            vertical = true;
          }
        });
        if (outOfWorld) {
          // TODO : clamp to side that it fell out of
          // will require finding center of shape at point where it would be flush with world
          newEntity.components.physics_gravity.falling = false;
        }
      }

    }
  }
  return newEntity;
};

export default Collision;