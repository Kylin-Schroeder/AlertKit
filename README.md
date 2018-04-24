# AlertKit
A Javascript Alert Framework.

## Functions

### AlertKit.init

`Sets up AlertKit for use.`

Parameters | Type | Purpose | Default Value
---------- | ---- | ------------ | --------------
`__alert`  | `boolean` | `sets alert() to AlertKit.alert() if true` | `false`
`body_fix` | `boolean` | `sets <body>'s margin to 0 if true` | `true`
`nef` | `boolean` | `priorities alerts yet to show up while delaying new alerts if true` | `false`

### AlertKit.read

`Returns class names in use by AlertKit.`

Parameters | Type | Purpose
---------- | ---- | -------
`what`  | `string` or `number` | `class index / static name`

### AlertKit.alert

`Displays an alert.`

Parameters | Type | Purpose | Default Value
--------- | ---- | ------------ | -------------
`title` | `string` | `sets the title of the alert` | `null`
`text`  | `string` | `sets the text of the alert` | `null`
`buttons` | `array` | `creates buttons with actions. See buttons array below` | `null`
`enableClickOut` | `boolean` | `If true, the user will be able to click outside the alert to dismiss it.` | `true`
`HTML` | `boolean` | `if true, html will be allowed in the alert's title and text. If false you will not be able to write html in title or text. To leave a new line if this is false, use \n.` | `false`
`seconds` | `number` | `sets the amount of seconds the alert will be displayed for` | `false`

#### Buttons
```js
  [
    [
      "Button title", // This is this button title
      "alert('I was clicked!');", // This is the command you could run right when this button is clicked
      "#007aff", // This is the background of this button
      "#1987ff", // This is the backgorund of this button when it's :active (held on to)
      null, // This is this border css
      null, // This is this border css when it's :active
      null, // This is the transition css of this button
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

### AlertKit.alert.close

`Dismisses an open alert.`

#### Example: 
```js
AlertKit.alert.close();
```

## Live Demo
Check this project out at [https://1gamerdev.github.io/AlertKit/AlertKit.html](https://1gamerdev.github.io/AlertKit/AlertKit.html)!

## Known Bugs
None

## Credits
AlertKit by 1GamerDev, most of this README by S0n1c_Dev.
