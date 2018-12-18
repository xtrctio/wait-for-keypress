const waitForKeypress = require('./index');

(async () => {
  const result = await waitForKeypress({ a: 'yes!', b: 'failed!' });
  console.log(`result ${result}`);
})();
