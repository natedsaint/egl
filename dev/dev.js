import EGL from '../src/index.js';
import CanvasWithPhysics2DStartup from '../src/assemblages/system/CanvasWithPhysics2DStartup.js';
import CanvasWithPhysics2DLoop from '../src/assemblages/system/CanvasWithPhysics2DLoop.js';

EGL.addStartSystem(CanvasWithPhysics2DStartup);
EGL.addLoopSystems(CanvasWithPhysics2DLoop);
EGL.start();
// EGL.stop();
// EGL.play();
// EGL.reset();