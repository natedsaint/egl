const Log = {};

Log.levels = [
  'Error',
  'Warn',
  'Info'
];

Log.setLevel = (level) => {
  Log.level = level;
  if (level > Log.levels.length - 1) {
    Log.levelName = 'High';
  } else if (Log.level < 0) {
    Log.levelName = 'Off';
  } else {
    Log.levelName = Log.levels[level];
  }
};

Log.setLevel(0); // errors only by default

Log.info = (...messages) => {
  if (Log.level >= 2) {
    // eslint-disable-next-line no-console
    console.info('%c Info', 'color:#7e7', messages);
  }
};

Log.warn = (...messages) => {
  if (Log.level >= 1) {
    // eslint-disable-next-line no-console
    console.info('%c Warn', 'color:#ee7', messages);
  }
};

Log.error = (...messages) => {
  if (Log.level >= 0) {
    // eslint-disable-next-line no-console
    console.info('%c Error', 'color:#e77', messages);
  }
};

export default Log;