# AlertKit
A JavaScript Alert Framework.

## Functions

### AlertKit.init

`Sets up AlertKit for use.`

Parameters | Type | Purpose | Default Value
---------- | ---- | ------------ | --------------
`__alert`  | `boolean` | `Sets alert() to AlertKit.alert() if true` | `false`
`__prompt`  | `boolean` | `Sets prompt() to AlertKit.alert() if true` | `false`
`body_fix` | `boolean` | `Sets <body>'s margin to 0 if true` | `true`
`nef` | `boolean` | `Priorities alerts yet to show up while delaying new alerts if true` | `false`
`manualDismiss` | `boolean` | `If an alert is on screen while this is true, new alerts will be added to needsExecuted` | `false`
`daemon` | `boolean` | `Starts up [AlertKitDaemon](https://github.com/1GamerDev/AlertKit#alertkitalertkitdaemon) on start` | `false`

### AlertKit.read

`Returns class names in use by AlertKit.`

Parameters | Type | Purpose
---------- | ---- | -------
`what`  | `string` or `number` | `class index / static name`

### AlertKit.alert

`Displays an alert.`

Parameters | Type | Purpose | Default Value
--------- | ---- | ------------ | -------------
`title` | `string` | `Sets the title of the alert` | `null`
`text`  | `string` | `Sets the text of the alert` | `null`
`buttons` | `array` or `object` | `creates buttons with actions. see buttons array below` or `creates prompt with callback. see prompt object below` | `null`
`enableClickOut` | `boolean` | `If true, the user will be able to click outside the alert to dismiss it` | `true`
`enterKey_` | `boolean` | `If true, the user will be able to press the enter key to dismiss an alert without buttons or submit a prompt` | `true`
`HTML` | `boolean` | `if true, html will be allowed in the alert's title and text. If false you will not be able to write html in title or text. To leave a new line if this is false, use \n` | `false`
`seconds` | `number` | `sets the amount of seconds the alert will be displayed for` | `false`

#### Buttons
```js
  [
    [
      "Button title", // This is this button title
      "alert('I was clicked!');", // This is the command you could run right when this button is clicked
      "#007aff", // This is the background hex of this button
      "#1987ff", // This is the background hex of this button when it's :active (held on to)
      null, // This is the colour hex
      null, // This is the colour hex when it's :active
      null, // This is the border css
      null, // This is the border hex when it's :active
      null, // This is the transition transition of this button
    ],
    [
      // this is another button, same as the layout above ^
    ]
  ]
```

#### Example:
```js
AlertKit.alert("Example Alert", "Hello, world!", [
  ["Google", `location = "http://google.com/";`, "f44242", "41cdf4", null, null, null, null, "250ms"]
]);
```

#### Prompt
```js
  {
  fields: ["Type here"], // This is the input field's placeholder
  okButtonTitle: "OK", // This is the title of the OK button
  cancelButtonTitle: "Cancel", // This is the title of the cancel button
  callback: function() { alert(arguments[0]); } // This is the function which handles the input
  }
```

#### Example:
```js
AlertKit.alert("Example Alert", "Hello, world!", {
  fields: ["Type here..."],
  okButtonTitle: "Continue",
  cancelButtonTitle: "Nevermind",
  callback: function(input) { alert(input); }
  });
```

### AlertKit.alert.close

`Dismisses an open alert.`

#### Example: 
```js
AlertKit.alert.close();
```

### AlertKit.AlertKitDaemon

`Replaces 'static' AlertKit class names in the innerHTML of all <style> tags with the dynamic class name.`

Parameters | Type | Purpose
---------- | ---- | -------
`control`  | `string` | `command to control AlertKitDaemon`

#### Example: 
```js
AlertKit.AlertKitDaemon(AlertKit.AlertKitDaemon.DAEMON_START);
```

## Live Demo
Check this project out at [https://1gamerdev.github.io/AlertKit/AlertKit.html](https://1gamerdev.github.io/AlertKit/AlertKit.html)!

## Known Bugs
None

## Credits
AlertKit by 1GamerDev, most of this README by S0n1c_Dev.
