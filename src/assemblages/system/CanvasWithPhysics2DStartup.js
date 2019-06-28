import Entify from 'entify';
import Character from '../entity/Character.js';

const StartupSystem = new Entify.System('CanvasWithPhysics2DStartup');

StartupSystem.work = () => {
  const char = new Character(20, 0, {red: 255, green: 0, blue: 0},{x: 255, y: 255});
  return char;
};

export default StartupSystem;