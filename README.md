# wait-for-keypress

## Usage
```javascript
const waitForKeypress = require('@xtrctio/wait-for-keypress');

(async () => {
    const result = await waitForKeypress({a: 'Success!', f: 'Failure!'});
})()
```

## API
<a name="waitForKeypress"></a>

## waitForKeypress(keyConfig) ⇒ <code>Promise.&lt;\*&gt;</code>
Wait for configured keys to be pressed

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| keyConfig | <code>object</code> | Object matching keys to their return value |

