import Entify from 'entify';
import Log from './tools/Log.js';

Log.level = 5;

const EGL = {};

Entify.startSystems = [];
Entify.loopSystems = [];

EGL.addStartSystem = (system) => {
  Entify.startSystems.push(system);
};

EGL.addStartSystems = (systems) => {
  Entify.startSystems = Entify.startSystems.concat(systems);
};

EGL.addLoopSystem = (system) => {
  Entify.loopSystems.push(system);
};

EGL.addLoopSystems = (systems) => {
  Entify.loopSystems = Entify.loopSystems.concat(systems);
};

EGL.start = () => {
  Log.info('starting systems');
  Entify.start();
};

EGL.stop = () => {
  Log.info('stopping systems');
  Entify.pause();
};

EGL.play = () => {
  Log.info('playing systems');
  Entify.play();
};

EGL.reset = () => {
  Log.info('Resetting systems');
  Entify.restart();
};

export default EGL;