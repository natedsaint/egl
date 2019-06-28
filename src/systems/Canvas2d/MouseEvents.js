const MouseEvents = function(canvas, callbacks, eventBus) {
  canvas.addEventListener('mousedown', (event) => {
    eventBus.push(['mousedown', event.layerX, event.layerY, event.button]);
    if (callbacks.mouseDown) {
      callbacks.mouseDown(event);
    }
  });
  canvas.addEventListener('mousemove', (event) => {
    eventBus.push(['mousemove', event.layerX, event.layerY, event.button]);
    if (callbacks.mouseMove) {
      callbacks.mouseMove(event);
    }
  });
  canvas.addEventListener('mouseup', () => {
    eventBus.push(['mouseup', event.layerX, event.layerY, event.button]);
    if (callbacks.mouseUp) {
      callbacks.mouseUp(event);
    }
  });
};

export default MouseEvents;