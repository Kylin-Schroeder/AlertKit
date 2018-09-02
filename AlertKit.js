//  AlertKit by 1GamerDev
//  Licensed uander DBAD 1.1
//  Version 1.5.1
//  Released 2nd of September, 2018

//  this code needs a *major* cleanup; it works but it's really not future-proof

/*
# DON'T BE A DICK PUBLIC LICENSE

> Version 1.1, December 2016

> Copyright (C) 2018 1GamerDev

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document.

> DON'T BE A DICK PUBLIC LICENSE
> TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

1. Do whatever you like with the original work, just don't be a dick.

   Being a dick includes - but is not limited to - the following instances:

 1a. Outright copyright infringement - Don't just copy this and change the name.
 1b. Selling the unmodified original with no work done what-so-ever, that's REALLY being a dick.
 1c. Modifying the original work to contain hidden harmful content. That would make you a PROPER dick.

2. If you become rich through modifications, related works/services, or supporting the original work,
share the love. Only a dick would make loads off this work and not buy the original work's
creator(s) a pint.

3. Code is provided with no warranty. Using somebody else's code and bitching when it goes wrong makes
you a DONKEY dick. Fix the problem yourself. A non-dick would submit the fix back.
*/
var AlertKit = {
    information: {},
    legal: {
        license: {}
    }
};
//  info & license
Object.defineProperty(AlertKit["information"], "version", {
    value: ["1.5.1", [1, 5, 1]],
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(AlertKit["information"], "release", {
    value: [2, [9, "September"], 2018],
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(AlertKit["legal"], "copyright", {
    value: "© 2018, 1GamerDev",
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(AlertKit["information"], "author", {
    value: "1GamerDev",
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(AlertKit["legal"]["license"], "name", {
    value: "Don't be a Dick",
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(AlertKit["legal"]["license"], "shortName", {
    value: "DBAD",
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(AlertKit["legal"]["license"], "version", {
    value: "1.1",
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(AlertKit["legal"]["license"], "webpage", {
    value: "http://www.dbad-license.org/",
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(AlertKit["legal"]["license"], "release", {
    value: [
        [12, "December"], 2016
    ],
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(AlertKit, "information", {
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(AlertKit["legal"], "license", {
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(AlertKit, "legal", {
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(AlertKit["legal"]["license"], "text", {
    value: `# DON'T BE A DICK PUBLIC LICENSE

> Version 1.1, December 2016

> Copyright (C) 2018 1GamerDev

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document.

> DON'T BE A DICK PUBLIC LICENSE
> TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

1. Do whatever you like with the original work, just don't be a dick.

   Being a dick includes - but is not limited to - the following instances:

 1a. Outright copyright infringement - Don't just copy this and change the name.
 1b. Selling the unmodified original with no work done what-so-ever, that's REALLY being a dick.
 1c. Modifying the original work to contain hidden harmful content. That would make you a PROPER dick.

2. If you become rich through modifications, related works/services, or supporting the original work,
share the love. Only a dick would make loads off this work and not buy the original work's
creator(s) a pint.

3. Code is provided with no warranty. Using somebody else's code and bitching when it goes wrong makes
you a DONKEY dick. Fix the problem yourself. A non-dick would submit the fix back.`,
    writable: false,
    enumerable: false,
    configurable: false
});
AlertKit.__proto__.enterKey = function() {
        if (event.key === "Enter") {
            event.preventDefault();
            AlertKit.alert.close();
        }
}
//  set up AlertKit for use
//  __alert = overwrite alert() [bool]
//  __prompt = overwrite prompt() [bool]
//  body_fix = no body margin [bool]
//  nef = prioritise unloaded alerts over new ones [bool]
//  manualDismiss = if an alert is on screen while this is true, new alerts will be added to needsExecuted
//  daemon = start AlertKitDaemon [bool]
AlertKit.init = function (__alert = false, __prompt = false, body_fix = true, nef = false, manualDismiss = false, daemon = false, BUTTON_TITLE_EMPTY_THEN_INDEX = true) {
    if (typeof document.body == "undefined" || typeof document.head == "undefined")
        return false;
    typeof BUTTON_TITLE_EMPTY_THEN_INDEX == "boolean" ? AlertKit.__proto__.BUTTON_TITLE_EMPTY_THEN_INDEX = BUTTON_TITLE_EMPTY_THEN_INDEX : AlertKit.__proto__.BUTTON_TITLE_EMPTY_THEN_INDEX = true;
    if (body_fix == true) {
        document.body.style.margin = "0px";
    }
    // returns a random number
    function __AlertKitRandomNumberGenerator(len = 1) {
        if (typeof len != "number") {
            return false;
        }
        if (len <= 0 || len == null) {
            console.error("Invalid length.");
            return false;
        }
        if (len.toString().includes(".")) {
            return false;
        }
        var returnValue = "";
        var loop = true;

        function returnRandomNumberAsString() {
            var returnInteger = Math.floor(Math.random() * 10);
            return returnInteger.toString();
        }
        while (loop) {
            if (returnValue.length != len) {
                returnValue = parseInt(returnRandomNumberAsString() + returnValue).toString();
            } else {
                loop = false;
            }
        }
        return parseInt(returnValue);
    }
    //  classes
    AlertKit.__proto__.__alertModalClass = __AlertKitRandomNumberGenerator(15);
    AlertKit.__proto__.__alertModalInnerClass = __AlertKitRandomNumberGenerator(15);
    AlertKit.__proto__.__noScrollingClass = __AlertKitRandomNumberGenerator(15);
    AlertKit.__proto__.__buttonClass = __AlertKitRandomNumberGenerator(15);
    AlertKit.__proto__.__promptCancelButtonClass = __AlertKitRandomNumberGenerator(15);
    AlertKit.__proto__.__promptOKButtonClass = __AlertKitRandomNumberGenerator(15);
    AlertKit.__proto__.__promptInputClass = __AlertKitRandomNumberGenerator(15);
    AlertKit.__proto__.__promptMultiChoiceInputClass = __AlertKitRandomNumberGenerator(15);
    AlertKit.__proto__.__promptButtonContainerClass = __AlertKitRandomNumberGenerator(15);
    AlertKit.AlertKitDaemon.DAEMON_START = "start";
    AlertKit.AlertKitDaemon.DAEMON_STOP = "stop";
    AlertKit.AlertKitDaemon.DAEMON_STATUS = "status";
    typeof AlertKit.AlertKitDaemon.running == "undefined" ? AlertKit.AlertKitDaemon.running = false : void(0);
    AlertKit.buttonStyles = `<style>
.__b` + AlertKit.__proto__.__buttonClass + ` {
    border: solid black 1px;
    padding: 10px;
    border-radius: 8px;
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    -webkit-user-select: none;
} .__b` + AlertKit.__proto__.__buttonClass + `:active {
    background: rgba(0, 0, 0, 0.1);
} .__noScrolling_` + AlertKit.__proto__.__noScrollingClass + ` {
    overflow: hidden !important;
}</style>`;
    AlertKit.__proto__.__buttonClass = "__b" + AlertKit.__proto__.__buttonClass;
    document.head.innerHTML += AlertKit.buttonStyles;
    delete AlertKit.buttonStyles;
    AlertKit.alert.__proto__.executable = true;
    __alert ? (window.alert = function (a, b, c, d, e, f, g) {
        return AlertKit.alert(a, b, c, d, e, f, g);
    }) : void(0);
    __prompt ? (window.prompt = function (a, b, c, d, e, f, g) {
        return AlertKit.alert(a, b, c, d, e, f, g);
    }) : void(0);
    AlertKit.alert.__proto__.needsExecuted = [];
    if (nef != false)
        AlertKit.alert.__proto__.needsExecutedFirst = true;
    if (manualDismiss == true)
        AlertKit.alert.__proto__.manualDismiss = true;
    else
        AlertKit.alert.__proto__.manualDismiss = false;
    delete AlertKit.init;
    daemon ? AlertKit.AlertKitDaemon("start") : void(0);
}
//  returns a class name
//  what = 'static' name [string or int]
AlertKit.read = function (what) {
    if (typeof AlertKit.init == "undefined") {
        var names = [
            "alertModalClass",
            "alertModalInnerClass",
            "noScrollingClass",
            "buttonClass",
            "promptCancelButtonClass",
            "promptOKButtonClass",
            "promptInputClass",
            "promptButtonContainerClass"
        ]
        var mapping = {
            "0": AlertKit.__proto__.__alertModalClass,
            "1": AlertKit.__proto__.__alertModalInnerClass,
            "2": AlertKit.__proto__.__noScrollingClass,
            "3": AlertKit.__proto__.__buttonClass,
            "4": AlertKit.__proto__.__promptCancelButtonClass,
            "5": AlertKit.__proto__.__promptOKButtonClass,
            "6": AlertKit.__proto__.__promptInputButtonClass,
            "7": AlertKit.__proto__.__promptButtonContainerClass,
            "alertModalClass": AlertKit.__proto__.__alertModalClass,
            "alertModalInnerClass": AlertKit.__proto__.__alertModalInnerClass,
            "noScrollingClass": AlertKit.__proto__.__noScrollingClass,
            "buttonClass": AlertKit.__proto__.__buttonClass,
            "promptCancelButtonClass": AlertKit.__proto__.__promptCancelButtonClass,
            "promptOKButtonClass": AlertKit.__proto__.__promptOKButtonClass,
            "promptInputClass": AlertKit.__proto__.__promptInputButtonClass,
            "promptButtonContainerClass": AlertKit.__proto__.__promptButtonContainerClass
        }
        if (what == "mapping") {
            return mapping;
        }
        if (what == "names") {
            return names;
        }
        return (mapping[what] ? mapping[what] : (typeof what == "string" && mapping[what.replace(/__/g, "")] ? mapping[what.replace(/__/g, "")] : false));
    }
    return false;
}
//  displays an alert
//  title = alert's title [string]
//  text = alert's text [string]

//  using buttons

//  buttons = alert's buttons [array]
//  buttons[...] = button [array]
//  buttons[...][0] = button title [string]
//  buttons[...][1] = button onclick [function]
//  buttons[...][2] = button background [string]
//  buttons[...][3] = button background (active) [string]
//  buttons[...][4] = button text colour [string]
//  buttons[...][5] = button text colour (active) [string]
//  buttons[...][6] = button border colour [string]
//  buttons[...][7] = button border colour (active) [string]
//  buttons[...][8] = transition length in time [string]

//  using a prompt

//  buttons = prompt [object]
//  fields = array containing placeholders of fields [array]
//  fields[...] = placeholder ("" for no placeholder) [string]
//  cancelButtonTitle = title of cancel button [string]
//  okButtonTitle = title of ok button [string]
//  callback = function user input is passed to [function]

//  enableClickOut = dictates whether the alert's background can be clicked to close the alert [bool]
//  enterKey = dictates whether the enter key can be pressed to close the alert or submit a prompt [bool]
//  HTML = dictates whether HTML is allowed within the alert's title / text [bool]
//  seconds = amount of time the alert will be shown for [int]
AlertKit.alert = function(title = null, text = null, buttons = null, enableClickOut = true, enterKey_ = true, HTML = false, seconds = false) {
    delete AlertKit.alert.__proto__.callback;
    var noFadeIn = (AlertKit.alert.__proto__.noFadeIn == true);
    AlertKit.alert.__proto__.noFadeIn = false;
    //  enables or disables scrolling on desktop
    function __stopBodyScrolling(bool) {
        if (bool === true) {
            document.body.classList.add("__noScrolling_" + AlertKit.__proto__.__noScrollingClass);
        } else {
            document.body.classList.remove("__noScrolling_" + AlertKit.__proto__.__noScrollingClass);
        }
    }
    // random number generator
    function __AlertKitRandomNumberGenerator(len = 1) {
        if (typeof len != "number") {
            return false;
        }
        if (len <= 0 || len == null) {
            console.error("Invalid length.");
            return false;
        }
        if (len.toString().includes(".")) {
            return false;
        }
        var returnValue = "";
        var loop = true;

        function returnRandomNumberAsString() {
            var returnInteger = Math.floor(Math.random() * 10);
            return returnInteger.toString();
        }
        while (loop) {
            if (returnValue.length != len) {
                returnValue = parseInt(returnRandomNumberAsString() + returnValue).toString();
            } else {
                loop = false;
            }
        }
        return parseInt(returnValue);
    }
    //  call AlertKit.init with the default settings if it's not already been called
    if (typeof AlertKit.init != "undefined") {
        AlertKit.init();
    }
    //  pushes arguments to needsExecuted for later use then returns if executable == false  (or if manualDismiss is true and an alert is on screen)
    if (AlertKit.alert.__proto__.executable != true) {
        AlertKit.alert.__proto__.needsExecuted.push([arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]]);
        return false;
    } else if (AlertKit.alert.__proto__.removed != true && document.body.contains(document.getElementsByClassName(AlertKit.__proto__.__alertModalClass)[document.getElementsByClassName(AlertKit.__proto__.__alertModalClass).length - 1]) && AlertKit.alert.__proto__.manualDismiss == true) {
        AlertKit.alert.__proto__.needsExecuted.push([arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]]);
        return false;
    } else {
        AlertKit.alert.__proto__.executable = false;
        setTimeout(function () {
            AlertKit.alert.__proto__.executable = true;
        }, 500);
    }
    //  if an alert is already on screen, close it
    if (AlertKit.alert.__proto__.removed != true && document.body.contains(document.getElementsByClassName(AlertKit.__proto__.__alertModalClass)[document.getElementsByClassName(AlertKit.__proto__.__alertModalClass).length - 1])) {
        AlertKit.alert.close = function () {
            try {
                document.removeEventListener("keydown", AlertKit.__proto__.enterKey);
            } catch(err) { void(err); }
            delete AlertKit.alert.close;
            if (typeof AlertKit.alert.__proto__.closeAlert != "undefined") {
                clearTimeout(AlertKit.alert.__proto__.closeAlert);
                delete AlertKit.alert.__proto__.closeAlert;
            }
            AlertKit.alert.__proto__.modal.style.top = "100%";
            setTimeout(function () {
                document.body.removeChild(AlertKit.alert.__proto__.modal);
                __stopBodyScrolling(false);
                //  maybe open the first alert in needs executed
                if (AlertKit.alert.__proto__.needsExecuted.length > 0 && AlertKit.alert.__proto__.needsExecutedFirst === true) {
                    var args = [AlertKit.alert.__proto__.needsExecuted[0][0], AlertKit.alert.__proto__.needsExecuted[0][1], AlertKit.alert.__proto__.needsExecuted[0][2], AlertKit.alert.__proto__.needsExecuted[0][3], AlertKit.alert.__proto__.needsExecuted[0][4], AlertKit.alert.__proto__.needsExecuted[0][5]];
                    AlertKit.alert.__proto__.needsExecuted.shift();
                    AlertKit.alert(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
                }
            }, 500);
            if (typeof AlertKit.__proto__.__AlertKit_button_functions != "undefined") {
                delete AlertKit.__proto__.__AlertKit_button_functions;
            }
           AlertKit.alert.closed();
        }
        AlertKit.alert.close();
        AlertKit.alert.__proto__.removed = true;
        setTimeout(function () {
            //  call ourself now that the previous alert was cleaned up
            AlertKit.alert(title, text, buttons, enableClickOut, enterKey_, HTML, seconds);
        }, 500);
        return;
    }
    if (AlertKit.alert.__proto__.removed == true) {
        delete AlertKit.alert.__proto__.removed;
    }
    //  seconds
    if (typeof seconds == "number" && !seconds.toString().includes("-") && seconds != false && seconds >= 1) {
        AlertKit.alert.__proto__.closeAlert = setTimeout(function () {
            AlertKit.alert.close();
            clearTimeout(AlertKit.alert.__proto__.closeAlert);
            delete AlertKit.alert.__proto__.closeAlert;
        }, seconds * 1000);
    }
    //  enter to close
    if (buttons == null) {
        AlertKit.__proto__.enterKey = function() {
            if (event.key === "Enter") {
               event.preventDefault();
               AlertKit.alert.close();
            }
        }
        if (enterKey_ == true)
           document.addEventListener("keydown", AlertKit.__proto__.enterKey);
    }
    //  html replacement
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;',
        '`': '&#96;'
    };
    if (title != null && title != "") {
        if (HTML == false) {
            title = title.toString().replace(/[&<>"']/g, function (m) {
                return map[m];
            });
        } else {
            title = title.toString();
        }
    }
    if (text != null && text != "") {
        if (HTML == false) {
            text = text.toString().replace(/[&<>"']/g, function (m) {
                return map[m];
            }).replace(/\n/g, "<br>").replace(/\\<br>/g, "\n");
        } else {
            text = text.toString();
        }
    }
    //  get a z-index higher than anything else
    var elems = document.getElementsByTagName("*");
    var highest = 0;
    for (var i = 0; i < elems.length; i++) {
        var zindex = document.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index");
        if ((zindex > highest) && (zindex != 'auto')) {
            highest = parseInt(zindex);
        }
    }
    //  if there ain't a background, create one
    if (!document.body.contains(document.getElementsByClassName(AlertKit.__proto__.__alertModalClass)[document.getElementsByClassName(AlertKit.__proto__.__alertModalClass).length - 1])) {
        AlertKit.alert.__proto__.modalBG = document.createElement("div");
    }
    AlertKit.alert.__proto__.modal = document.createElement("div");
    //  set up the close function
    AlertKit.alert.close = function () {
        try {
            document.removeEventListener("keydown", AlertKit.__proto__.enterKey);
        } catch(err) { void(err); }
        delete AlertKit.alert.close;
        if (typeof AlertKit.alert.__proto__.closeAlert != "undefined") {
            clearTimeout(AlertKit.alert.__proto__.closeAlert);
            delete AlertKit.alert.__proto__.closeAlert;
        }
        if (AlertKit.alert.__proto__.needsExecuted.length == 0)
            AlertKit.alert.__proto__.modalBG.style.background = "rgba(0, 0, 0, 0.0)";
        AlertKit.alert.__proto__.modal.style.top = "100%";
        setTimeout(function () {
            if (document.body.contains(AlertKit.alert.__proto__.modalBG))
                document.body.removeChild(AlertKit.alert.__proto__.modalBG);
            if (document.body.contains(AlertKit.alert.__proto__.modal))
                document.body.removeChild(AlertKit.alert.__proto__.modal);
            __stopBodyScrolling(false);
            if (AlertKit.alert.__proto__.needsExecuted.length > 0) {
                AlertKit.alert.__proto__.noFadeIn = true;
                var args = [AlertKit.alert.__proto__.needsExecuted[0][0], AlertKit.alert.__proto__.needsExecuted[0][1], AlertKit.alert.__proto__.needsExecuted[0][2], AlertKit.alert.__proto__.needsExecuted[0][3], AlertKit.alert.__proto__.needsExecuted[0][4], AlertKit.alert.__proto__.needsExecuted[0][5]];
                AlertKit.alert.__proto__.needsExecuted.shift(0);
                AlertKit.alert(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
        }, 500);
        if (typeof AlertKit.__proto__.__AlertKit_button_functions != "undefined") {
            delete AlertKit.__proto__.__AlertKit_button_functions;
        }
       AlertKit.alert.closed();
    }
    if ((title == null || title == "") && (text == null || text == "") && (buttons == null || typeof buttons != "object" || buttons.toString() == "")) {
        AlertKit.alert.close();
        return false;
    }
    //  if we just created a background, style it
    if (!document.body.contains(document.getElementsByClassName(AlertKit.__proto__.__alertModalClass)[document.getElementsByClassName(AlertKit.__proto__.__alertModalClass).length - 1])) {
        AlertKit.alert.__proto__.modalBG.style.height = "100%";
        AlertKit.alert.__proto__.modalBG.style.width = "100%";
        AlertKit.alert.__proto__.modalBG.style.background = "rgba(0, 0, 0, 0.0)";
        if (noFadeIn)
            AlertKit.alert.__proto__.modalBG.style.background = "rgba(0, 0, 0, 0.6)";
        AlertKit.alert.__proto__.modalBG.style.position = "fixed";
        AlertKit.alert.__proto__.modalBG.style.top = "0";
        AlertKit.alert.__proto__.modalBG.style.left = "0";
        if (!noFadeIn)
            AlertKit.alert.__proto__.modalBG.style.transition = "500ms";
        AlertKit.alert.__proto__.modalBG.style.zIndex = highest + 1;
        AlertKit.alert.__proto__.modalBG.className = AlertKit.__proto__.__alertModalClass;
    }
    //  click-out stuff
    if (enableClickOut != false) {
        AlertKit.alert.__proto__.modalBG.onclick = function () {
            try {
                AlertKit.alert.close();
            } catch (err) {

            }
        };
    } else {
        AlertKit.alert.__proto__.modalBG.onclick = function () {
            void(0);
        };
    }
    //  style the actual alert
    AlertKit.alert.__proto__.modal.style.top = "-68%";
    AlertKit.alert.__proto__.modal.style.zIndex = highest + 1;
    AlertKit.alert.__proto__.modal.style.borderRadius = "10px";
    AlertKit.alert.__proto__.modal.style.fontFamily = "sans-serif";
    AlertKit.alert.__proto__.modal.style.transition = "500ms";
    AlertKit.alert.__proto__.modal.style.width = "75%";
    AlertKit.alert.__proto__.modal.style.margin = "0 12.5% 0 12.5%";
    AlertKit.alert.__proto__.modal.style.background = "white";
    AlertKit.alert.__proto__.modal.style.position = "fixed";
    AlertKit.alert.__proto__.modal.className = AlertKit.__proto__.__alertModalInnerClass;
    AlertKit.alert.__proto__.modal.style.overflow = "-moz-scrollbars-none";
    AlertKit.alert.__proto__.modal.innerHTML = "";
    //  add some html
    if (title != null && title != "") {
        if (text == null && buttons != null) {
            if (`<div style="padding: 20px; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><h3 style="margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">` + title + `</h3></div>` != `<div style="padding: 20px; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1); font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><h3 style="margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"></h3></div>`)
                AlertKit.alert.__proto__.modal.innerHTML = AlertKit.alert.__proto__.modal.innerHTML + `<div style="padding: 20px; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><h3 style="margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">` + title + `</h3></div>`;
        } else {
            if (`<div style="padding: 20px; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1); font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><h3 style="margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">` + title + `</h3></div>` != `<div style="padding: 20px; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1); font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><h3 style="margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"></h3></div>`)
                AlertKit.alert.__proto__.modal.innerHTML = AlertKit.alert.__proto__.modal.innerHTML + `<div style="padding: 20px; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1); font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><h3 style="margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">` + title + `</h3></div>`;
        }
    }
    if (text != null && text != "") {
        //AlertKit.alert.__proto__.modal.innerHTML = AlertKit.alert.__proto__.modal.innerHTML + `<div style="padding: 20px; max-height: 100px; overflow-y: scroll">` + text + `</div>`;
        if (`<div style="padding: 0 20px; max-height: 100px; overflow-y: scroll"><div style="height:20px;-webkit-user-select:none;"></div>` + text + `<div style="height:20px;-webkit-user-select:none;"></div></div>` != `<div style="padding: 0 20px; max-height: 100px; overflow-y: scroll"><div style="height:20px;-webkit-user-select:none;"></div><div style="height:20px;-webkit-user-select:none;"></div></div>`)
            AlertKit.alert.__proto__.modal.innerHTML = AlertKit.alert.__proto__.modal.innerHTML + `<div style="padding: 0 20px; max-height: 100px; overflow-y: scroll"><div style="height:20px;-webkit-user-select:none;"></div>` + text + `<div style="height:20px;-webkit-user-select:none;"></div></div>`;
    }
    //  check if buttons should be enabled
    var allowButtons = false;
    var allowPrompt = false;
    if (typeof buttons == "object" && buttons != null) {
        if (buttons.length != 0) {
            for (var i = 0; i < buttons.length; i++) {
                if (buttons[i].length != 0 && typeof buttons[i] == "object") {
                    allowButtons = true;
                    allowPrompt = false;
                }
            }
        }
    }
    if (buttons != null && typeof buttons.callback == "function" && buttons.toString() == "[object Object]" && typeof buttons.fields == "object" && buttons.fields.length > 0) {
        if (allowButtons == true) {
            AlertKit.alert.close();
            return false;
        }
        allowButtons = false;
        allowPrompt = true;
        for (var i = 0; i < buttons.fields.length; i++) {
            if (typeof buttons.fields[i] == "string") {
                buttons.fields[i] = buttons.fields[i].toString().replace(/[&<>"']/g, function (m) {
                    return map[m];
                })
            } else if (typeof buttons.fields[i] == "object") {
              for (var ii = 0; ii < buttons.fields[i].length; ii++) {
                if (typeof buttons.fields[i][ii] == "string") {
                    buttons.fields[i][ii] = buttons.fields[i][ii].toString().replace(/[&<>"']/g, function (m) {
                        return map[m];
                    })
                }
              }
            }
        }
        if (typeof buttons.okButtonTitle == "string")
            buttons.okButtonTitle = buttons.okButtonTitle.toString().replace(/[&<>"']/g, function (m) {
                return map[m];
            });
        if (typeof buttons.cancelButtonTitle == "string")
            buttons.cancelButtonTitle = buttons.cancelButtonTitle.toString().replace(/[&<>"']/g, function (m) {
                return map[m];
            });
    }
    if (allowPrompt) {
        AlertKit.alert.__proto__.callback = buttons.callback;
        var inputs = "";
        for (var i = 0; i < buttons.fields.length; i++) {
          if (typeof buttons.fields[i] == "string") {
            inputs += `<input class="` + AlertKit.__proto__.__promptInputClass + `" placeholder="` + function (buttons) {
                var ret = "";
                typeof buttons.fields[i] == "string" ? ret = buttons.fields[i] : ret = "";
                return ret;
            }(buttons) + `" style="display: block; margin: 5px 25px; padding: 10px; width: calc(100% - 50px); text-align: left; border-radius: 5px; border: none; border: solid 1px black">`;
          } else if (typeof buttons.fields[i] == "object") {
            inputs += `<select class="` + AlertKit.__proto__.__promptMultiChoiceInputClass + `" style="display: block; margin: 5px 25px; padding: 10px; width: calc(100% - 50px); text-align: left; border-radius: 5px; border: none; border: solid 1px black">
              ` + function (buttons) {
                var ret = "";
                for (var ii = 0; ii < buttons.fields[i].length; ii++) {
                  ret += `<option value="`
                  typeof buttons.fields[i][ii] == "string" ? ret += buttons.fields[i][ii] : ret += "";
                  ret += `">`;
                  typeof buttons.fields[i][ii] == "string" ? ret += buttons.fields[i][ii] : ret += "";
                  ret += `</option>`;
                }
                return ret;
              }(buttons) + `
            </select>`;
          }
        }
        var promptSection = `<div style="max-height: 21vh !important; padding: 20px 0; border-top: solid black 1px; overflow-x: scroll; overflow-y: scroll; white-space: nowrap;"><center id="AlertKit_prompt_fields">` + inputs + `</center><br><div style="display: flex; flex-flow: row wrap; position: relative; margin: 0 20px" class="` + AlertKit.__proto__.__promptButtonContainerClass + `"><div class="` + AlertKit.__proto__.__buttonClass + ` ` + AlertKit.__proto__.__promptCancelButtonClass + `" style="flex: 1 1 calc(20% - 35px); text-align: center" ontouchstart="" onclick="try { AlertKit.alert.close() } catch(err) { }">` + function (buttons) {
            var ret = "";
            typeof buttons.cancelButtonTitle == "string" ? ret = buttons.cancelButtonTitle : ret = "Cancel";
            return ret;
        }(buttons) + `</div><div class="` + AlertKit.__proto__.__buttonClass + ` ` + AlertKit.__proto__.__promptOKButtonClass + `" style="flex: 1 1 calc(20% - 35px); text-align: center" ontouchstart="" onclick="try { var AlertKit_Callback_Array = []; for(var i = 0; i < document.getElementById('AlertKit_prompt_fields').children.length; i++) { AlertKit_Callback_Array[AlertKit_Callback_Array.length] = document.getElementById('AlertKit_prompt_fields').children[i].value; }; AlertKit.alert.__proto__.callback(AlertKit_Callback_Array); } catch(err) { }">` + function (buttons) {
            var ret = "";
            typeof buttons.okButtonTitle == "string" ? ret = buttons.okButtonTitle : ret = "OK";
            return ret;
        }(buttons) + `</div></div>`;
        AlertKit.alert.__proto__.modal.innerHTML = AlertKit.alert.__proto__.modal.innerHTML + promptSection;
        AlertKit.__proto__.enterKey = function() {
            if (event.key === "Enter") {
               event.preventDefault();
               try { var AlertKit_Callback_Array = []; for(var i = 0; i < document.getElementById('AlertKit_prompt_fields').children.length; i++) { AlertKit_Callback_Array[AlertKit_Callback_Array.length] = document.getElementById('AlertKit_prompt_fields').children[i].value; }; AlertKit.alert.__proto__.callback(AlertKit_Callback_Array); } catch(err) { }
            }
        }
        if (enterKey_ == true)
            document.addEventListener("keydown", AlertKit.__proto__.enterKey);
    }
    if (allowButtons) {
        //var buttonSection = `<div style="padding: 20px; border-top: solid black 1px; overflow-x: scroll; overflow-y: hidden; white-space: nowrap;">`;
        //  firefox fix
        var buttonSection = `<div style="padding: 20px 0; border-top: solid black 1px; overflow-x: hidden; overflow-y: hidden; white-space: nowrap;"><div style="width: 20px; display: inline-block; -webkit-user-select: none;"></div>`;
        //  store the onclicks
        AlertKit.__proto__.__AlertKit_button_functions = new Array();
        //  add the buttons
        for (var i = 0; i < buttons.length; i++) {
            try {
                (function () {
                    try {
                        if (typeof buttons[i][1] == "function") {
                            AlertKit.__proto__.__AlertKit_button_functions[i] = buttons[i][1];
                        } else if (typeof buttons[i][1] == "string") {
                            AlertKit.__proto__.__AlertKit_button_functions[i] = Function(buttons[i][1]);
                        }
                    } catch (err) {
                        return;
                    }
                    if (typeof buttons[i][0] != "string" || buttons[i][0] == "" || buttons[i][0] == null) {
                        if (AlertKit.__proto__.BUTTON_TITLE_EMPTY_THEN_INDEX) {
                            buttons[i][0] = i.toString();
                        } else {
                            return;
                        }
                    }
                    //  no html in buttons
                    if (typeof AlertKit.__AlertKit_button == "string")
                        buttons[i][0] = buttons[i][0].replace(/[&<>"']/g, function (m) {
                            return map[m];
                        });
                    //  define some variables
                    var hex = "";
                    var r = "";
                    var g = "";
                    var b = "";
                    var __background__ = "";
                    var __selectedBackground__ = "";
                    var __colour__ = "";
                    var __selectedColour__ = "";
                    var __border__ = "";
                    var __selectedBorder__ = "";
                    var __transition__ = "";
                    var __randnum__ = __AlertKitRandomNumberGenerator(14);
                    //  if there's no specified colour, choose black or white depending on the background
                    if (typeof buttons[i][2] != "undefined") {
                        if (typeof buttons[i][2] == "string") {
                            if (buttons[i][2].length == 6) {
                                var hex = buttons[i][2];
                                r = parseInt("0x" + hex[0].toString() + hex[1].toString());
                                g = parseInt("0x" + hex[2].toString() + hex[3].toString());
                                b = parseInt("0x" + hex[4].toString() + hex[5].toString());
                                __background__ = "#" + hex;
                                if ((r * 0.299 + g * 0.587 + b * 0.114) > 186) {
                                    __colour__ = "#000000";
                                } else {
                                    __colour__ = "#FFFFFF";
                                }
                            } else if (buttons[i][3] == "") {
                                __background__ = "transparent";
                                __colour__ = "#000000";
                            }
                        }
                        //  hex codes can have transparency too!  use the background hex code with 0.88 opacity if no active background was specified
                        __selectedBackground__ = __background__ + "88";
                        if (typeof buttons[i][3] == "string") {
                            if (buttons[i][3].length == 6) {
                                __selectedBackground__ = "#" + buttons[i][3];
                            } else if (buttons[i][3] == "") {
                                __selectedBackground__ = "transparent";
                            }
                        }
                        //  colours
                        if (typeof buttons[i][4] == "string") {
                            if (buttons[i][4].length == 6) {
                                __colour__ = "#" + buttons[i][4];
                            }
                            /* else if (buttons[i][4] == "") {
                                __colour__ = "transparent";
                            }*/
                        }
                        __selectedColour__ = __colour__;
                        if (typeof buttons[i][5] == "string") {
                            if (buttons[i][5].length == 6) {
                                __selectedColour__ = "#" + buttons[i][5];
                            }
                            /* else if (buttons[i][5] == "") {
                                __selectedColour__ = "transparent";
                            }*/
                        }
                        //  borders
                        __border__ = "transparent";
                        if (typeof buttons[i][6] == "string") {
                            if (buttons[i][6].length == 6) {
                                __border__ = "#" + buttons[i][6];
                            } else if (buttons[i][6] == "") {
                                __border__ = "transparent";
                            }
                        }
                        __selectedBorder__ = __border__;
                        if (typeof buttons[i][7] == "string") {
                            if (buttons[i][7].length == 6) {
                                __selectedBorder__ = "#" + buttons[i][7];
                            } else if (buttons[i][7] == "") {
                                __selectedBorder__ = "transparent";
                            }
                        }
                        //  transition (idk how to check this, i trust y'all lul)
                        __transition__ = "0ms";
                        if (typeof buttons[i][8] == "string") {
                            __transition__ = buttons[i][8];
                        }
                        //  put it all together to get the button
                        buttonSection = buttonSection + `<style>.__b_custom` + __randnum__ + ` { -webkit-user-select: none; transition: ` + __transition__ + `; border: solid 1px ` + __border__ + ` !important; background: ` + __background__ + ` !important; color: ` + __colour__ + ` !important; } .__b_custom` + __randnum__ + `:active { -webkit-user-select: none; transition: ` + __transition__ + `; border: solid 1px ` + __selectedBorder__ + ` !important; background: ` + __selectedBackground__ + ` !important; color: ` + __selectedColour__ + ` !important; }</style>`;
                        buttonSection = buttonSection + `<div class="` + AlertKit.__proto__.__buttonClass + ` __b_custom` + __randnum__ + `" ontouchstart="" onclick="try { AlertKit.__proto__.__AlertKit_button_functions[` + i + `](this, ` + i + `) } catch(err) { console.log('%c[ERROR]%cAlertKit encountered an unexpected error. (' + err + ')', 'color: red'); }">` + buttons[i][0] + `</div>`;
                    } else {
                        //  if you didnt style the button, use the default style
                        buttonSection = buttonSection + `<div class="` + AlertKit.__proto__.__buttonClass + `" ontouchstart="" onclick="try { AlertKit.__proto__.__AlertKit_button_functions[` + i + `](this, ` + i + `) } catch(err) { }">` + buttons[i][0] + `</div>`;
                    }
                })();
            } catch (err) {
                console.log('%c[ERROR]%cAlertKit encountered an unexpected error. (' + err + ')', 'color: red');
            }
        }
        //buttonSection = buttonSection + "</div>";
        //  more firefox fixes
        buttonSection = buttonSection + `<div style="width: 20px; display: inline-block; -webkit-user-select: none;"></div></div>`;
        //if (buttonSection != `<div style="padding: 20px; border-top: solid black 1px; overflow-x: scroll; overflow-y: hidden; white-space: nowrap;"></div>`) {
        if (buttonSection != `<div style="padding: 20px 0; border-top: solid black 1px; overflow-x: scroll; overflow-y: hidden; white-space: nowrap;"><div style="width: 20px; display: inline-block; -webkit-user-select: none;"></div><div style="width: 20px; display: inline-block; -webkit-user-select: none;"></div></div>`) {
            //  add the buttons to the alert
            AlertKit.alert.__proto__.modal.innerHTML = AlertKit.alert.__proto__.modal.innerHTML + buttonSection;
        }
    }
    //  error handling
    if (AlertKit.alert.__proto__.modal.innerHTML == "") {
        //AlertKit.alert.close();
        //return false;
        AlertKit.alert.__proto__.modal.innerHTML = `<div style="padding: 20px; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1); font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><h3 style="margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Error</h3></div><div style="padding: 20px; max-height: 100px; overflow-y: scroll">The intended alert was not displayed because an unexpected error occurred.</div>`;
        AlertKit.alert.__proto__.modalBG.onclick = function () {
            AlertKit.alert.close();
        };
    }
    //  add the stuff
    AlertKit.alert.__proto__.newModalBG = false;
    if (!document.body.contains(document.getElementsByClassName(AlertKit.__proto__.__alertModalClass)[document.getElementsByClassName(AlertKit.__proto__.__alertModalClass).length - 1])) {
        document.body.appendChild(AlertKit.alert.__proto__.modalBG);
        AlertKit.alert.__proto__.newModalBG = true;
    }
    document.body.appendChild(AlertKit.alert.__proto__.modal);
    //  animate it in
    setTimeout(function () {
        __stopBodyScrolling(true);
        if (AlertKit.alert.__proto__.newModalBG) {
            AlertKit.alert.__proto__.modalBG.style.background = "rgba(0, 0, 0, 0.6)";
        }
        if (noFadeIn)
            AlertKit.alert.__proto__.modalBG.style.transition = "500ms";
        AlertKit.alert.__proto__.modal.style.top = "12.5%";
        delete AlertKit.alert.__proto__.newModalBG;
    }, 50);
    return true;
}

AlertKit.alert.closed = function () {}

//  replaces 'static' AlertKit CSS class names printed to the DOM in <style> tags with the dynamic name
//  control = control the daemon [string]
//  when = interval between code repetition [number]
AlertKit.AlertKitDaemon = function (control, when = 2500) {
    if (typeof AlertKit.init != "undefined") {
        return false;
    }
    if (typeof when != "number" || parseInt(when) < 6) {
        when = 2500;
    }
    if (control == "run") {
        for (var i = 0; i < document.getElementsByTagName("style").length; i++) {
            for (var ii = 0; ii < AlertKit.read("names").length; ii++) {
                document.getElementsByTagName("style")[i].innerHTML = document.getElementsByTagName("style")[i].innerHTML.replace(
                    new RegExp(AlertKit.read("names")[ii], 'g'), AlertKit.read(ii)
                );
                document.getElementsByTagName("style")[i].innerHTML = document.getElementsByTagName("style")[i].innerHTML.replace(
                    new RegExp("__" + AlertKit.read(ii), 'g'), AlertKit.read(ii)
                );
            }
        }
        return true;
    } else if (control == "start" && AlertKit.AlertKitDaemon.running == false) {
        AlertKit.AlertKitDaemon.running = true;
        AlertKit.AlertKitDaemon.Daemon = setInterval(function () {
            for (var i = 0; i < document.getElementsByTagName("style").length; i++) {
                for (var ii = 0; ii < AlertKit.read("names").length; ii++) {
                    document.getElementsByTagName("style")[i].innerHTML = document.getElementsByTagName("style")[i].innerHTML.replace(
                        new RegExp(AlertKit.read("names")[ii], 'g'), AlertKit.read(ii)
                    );
                    document.getElementsByTagName("style")[i].innerHTML = document.getElementsByTagName("style")[i].innerHTML.replace(
                        new RegExp("__" + AlertKit.read(ii), 'g'), AlertKit.read(ii)
                    );
                }
            }
        }, when);
        return true;
    } else if (control == "stop" && AlertKit.AlertKitDaemon.running == true) {
        AlertKit.AlertKitDaemon.running = false;
        clearInterval(AlertKit.AlertKitDaemon.Daemon);
        return true;
    } else if (control == "status") {
        return AlertKit.AlertKitDaemon.running;
    } else {
        return false;
    }
}
