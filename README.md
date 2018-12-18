# wait-for-keypress

## Usage
```javascipt
const waitForKeypress = require('@xtrctio/wait-for-keypress');

(async () => {
    await waitForKeypress({a: 'Success!', f: 'Failure!'});
})()
```

## API
<a name="waitForKeypress"></a>

## waitForKeypress(keyConfig, [prevKeys]) ⇒ <code>Promise.&lt;\*&gt;</code>
Wait for configured keys to be pressed

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| keyConfig | <code>object</code> |  | Object matching keys to their return value |
| [prevKeys] | <code>Array.&lt;string&gt;</code> | <code>[]</code> |  |

