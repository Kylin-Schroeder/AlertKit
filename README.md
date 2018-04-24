# AlertKit
a javascript alert

## Functions
(if someone could explain this better, that would be nice :P i'm not good at this kind of stuff)

AlertKit.init
Sets up AlertKit for use.
The only two arguments for this function are __alert and body_fix.  __alert sets alert() to AlertKit.alert() if true, (default is false), and body_fix sets <body>'s margin to 0 if true, which is the default.

AlertKit.alert
Displays an alert.
Arguments:

Parametar | Type | What it does | default value
--------- | ---- | ------------ | -------------
`title` | `string` | `sets the title of the alert` | `null`
`text`  | `string` | `sets the text of the alert` | `null`
`button` | `array` | `creates buttons with actions. See buttons table below` | `null`
`enableClickOut` | `boolean` | `If true, the user will be able to click outside the alert to dismiss it.` | `true`
`html` | `boolean` | `if true, html will be allowed in the alert's title and text. If false you will not be able to write html in title or text. To leave a new line if this is false, use \n.` | `false`

### Buttons
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

## Example:
```js
AlertKit.alert("Example Alert", "Hello, world!", [
  ["Google", `location = "http://google.com/";`, "f44242", "41cdf4", null, null, null, null, "250ms"]
]);
```

`AlertKit.alert.close`
Dismisses an open alert.

## Known Bugs
None
