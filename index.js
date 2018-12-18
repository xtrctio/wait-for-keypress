const keypress = require('keypress');

keypress(process.stdin);

/**
 * @param {object} keyConfig Object matching keys to their return value
 * @param {string[]} [prevKeys=[]] Just used to pass state between calls
 * @returns {Promise<*>}
 * @private
 */
const _waitForKeypress = async (keyConfig, prevKeys = []) => {
  process.stdin.setEncoding('utf8');
  process.stdin.setRawMode(true);
  return new Promise((res) => {
    process.stdin.setRawMode(false);
    process.stdin.once('keypress', async (ch, key) => {
      if (key && key.name !== 'enter') {
        prevKeys.push(key.name);
      }

      if (key && keyConfig[key.name]) {
        return res(keyConfig[key.name]);
      }

      if (key && key.name === 'enter') {
        console.log(`Got: '${prevKeys.join(', ')}'. Expecting one of: ${JSON.stringify(keyConfig)}`);
        prevKeys = [];
      }

      return _waitForKeypress(keyConfig, prevKeys).then((result) => res(result));
    });
  });
};

/**
 * Wait for configured keys to be pressed
 * @param {object} keyConfig Object matching keys to their return value
 * @returns {Promise<*>}
 */
const waitForKeypress = async (keyConfig) => _waitForKeypress(keyConfig);

module.exports = waitForKeypress;
