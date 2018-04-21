# AlertKit
a javascript alert
# Functions
(if someone could explain this better, that would be nice :P i'm not good at this kind of stuff)<br>
AlertKit.init<br>
Sets up AlertKit for use.<br>
The only argument this function takes is __alert, which sets alert() to AlertKit.alert() if true.  default is false<br><br>
AlertKit.alert<br>
Displays an alert.
Arguments:
* title: string, sets the title of the alert, default is null
* text: string, sets the text of the alert, default is null
* buttons: array, [(array) [(string) title, (string) onclick, (string) background, (string) activeBackground, (string) textColour, (string) activeTextColour, (string) border, (string) activeBorder, (string) transition], (array) [(string) title, (string) onclick, (string) background, (string) activeBackground, (string) textColour, (string) activeTextColour, (string) border, (string) activeBorder, (string) transition], ...], default is null
* enableClickOut: boolean, if true, the user will be able to click outside the alert to dismiss it.  default is true
* HTML: boolean, if true, HTML will be allowed in the alert's title and text.  if false, you will not be able to write html in title or text.  to leave a new line if this is false, use \n.  default is false<br>
Example:<br>
AlertKit.alert("Example Alert", "Hello, world!", [["Google", \`location = "http://google.com/";\`, "f44242", "41cdf4", null, null, null, null, "250ms"]]);
<br><br>
AlertKit.alert.close<br>
Dismisses an open alert.
# Known Bugs
None
