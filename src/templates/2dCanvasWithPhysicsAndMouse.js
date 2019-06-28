import EGL from '../index.js';
import CanvasWithPhysics2DStartup from '../assemblages/system/CanvasWithPhysics2DStartup.js';
import Canvas2d from '../systems/Canvas2d';
import Physics from '../systems/Physics';
import World from '../systems/World';

const Template = function(mouseCallbacks) {
  Canvas2d.mouseCallbacks = mouseCallbacks;
  EGL.addStartSystem(CanvasWithPhysics2DStartup);
  EGL.addLoopSystems([Canvas2d, Physics, World]);
};

export default Template;
