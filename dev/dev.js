import EGL from '../src/index.js';
import template from '../src/templates/2dCanvasWithPhysicsAndMouse.js';
import Character from '../src/assemblages/entity/Character.js';
const mouseCallbacks = {
  mouseDown: (event) => {
    const rand = (max) => Math.floor(Math.random() * Math.floor(max));
    new Character(20,
      rand(360),
      {
        red: rand(255), 
        green: rand(255), 
        blue: rand(255),
      },
      {
        x: event.layerX,
        y: event.layerY
      });
    return;
  }
};

template(mouseCallbacks);

EGL.start();
// EGL.stop();
// EGL.play();
// EGL.reset();