//  AlertKit by 1GamerDev
//  Licensed under DBAD
//  Version 1.0.1
//  Released 22 of April, 2018
var AlertKit = {};
AlertKit.init = function(__alert = false) {
    AlertKit.__proto__.prototype = {};
    AlertKit.__proto__.prototype.random = function(len = 0) {
        if (typeof len != "number") {
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
                returnValue = returnValue + returnRandomNumberAsString();
            } else {
                loop = false;
            }
        }

        function getValueToReturn() {
            if (len <= 0 || len == null) {
                console.error("Invalid length.");
                return undefined;
            } else {
                return parseInt(returnValue);
            }
        }
        return getValueToReturn();
    }
    AlertKit.__proto__.__alertModalClass = AlertKit.__proto__.prototype.random(15);
    AlertKit.__proto__.__buttonClass = AlertKit.__proto__.prototype.random(15);
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
}</style>`;
    AlertKit.__proto__.__buttonClass = "__b" + AlertKit.__proto__.__buttonClass;
    document.head.innerHTML += AlertKit.buttonStyles;
    delete AlertKit.buttonStyles;
    AlertKit.alert.__proto__.executable = true;
    __alert ? (window.alert = function(a, b, c, d) {
        return AlertKit.alert(a, b, c, d);
    }) : void(0);
    delete AlertKit.__proto__.prototype.random;
    delete AlertKit.__proto__.prototype;
    delete AlertKit.init;
}
AlertKit.alert = function(title = null, text = null, buttons = null, enableClickOut = true, HTML = false) {
    function AlertKitRandomNumberGenerator(len = 0) {
        if (typeof len != "number") {
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
                returnValue = returnValue + returnRandomNumberAsString();
            } else {
                loop = false;
            }
        }

        function getValueToReturn() {
            if (len <= 0 || len == null) {
                console.error("Invalid length.");
                return undefined;
            } else {
                return parseInt(returnValue);
            }
        }
        return getValueToReturn();
    }
    if (typeof AlertKit.init != "undefined") {
        AlertKit.init();
    }
    if (AlertKit.alert.__proto__.executable != true) {
        return false;
    } else {
        AlertKit.alert.__proto__.executable = false;
        setTimeout(function() {
            AlertKit.alert.__proto__.executable = true;
        }, 500);
    }
    if (AlertKit.alert.__proto__.removed != true && document.body.contains(document.getElementsByClassName(AlertKit.__proto__.__alertModalClass)[document.getElementsByClassName(AlertKit.__proto__.__alertModalClass).length - 1])) {
        AlertKit.alert.close = function() {
            delete AlertKit.alert.close;
            AlertKit.alert.__proto__.modal.style.top = "100%";
            setTimeout(function() {
                document.body.removeChild(AlertKit.alert.__proto__.modal);
            }, 500);
            if (typeof AlertKit.__proto__.__AlertKit_button_functions != "undefined") {
                delete AlertKit.__proto__.__AlertKit_button_functions;
            }
        }
        AlertKit.alert.close();
        AlertKit.alert.__proto__.removed = true;
        setTimeout(function() {
            AlertKit.alert(title, text, buttons, enableClickOut)
        }, 500);
        return;
    }
    if (AlertKit.alert.__proto__.removed == true) {
        delete AlertKit.alert.__proto__.removed;
    }
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    if (title != null) {
        if (HTML == false) {
            title = title.toString().replace(/[&<>"']/g, function(m) {
                return map[m];
            });
        } else {
            title = title.toString();
        }
    }
    if (text != null) {
        if (HTML == false) {
            text = text.toString().replace(/[&<>"']/g, function(m) {
                return map[m];
            }).replace(/\n/g, "<br>").replace(/\\<br>/g, "\n");
        } else {
            text = text.toString();
        }
    }
    var elems = document.getElementsByTagName("*");
    var highest = 0;
    for (var i = 0; i < elems.length; i++) {
        var zindex = document.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index");
        if ((zindex > highest) && (zindex != 'auto')) {
            highest = parseInt(zindex);
        }
    }
    if (!document.body.contains(document.getElementsByClassName(AlertKit.__proto__.__alertModalClass)[document.getElementsByClassName(AlertKit.__proto__.__alertModalClass).length - 1])) {
        AlertKit.alert.__proto__.modalBG = document.createElement("div");
    }
    AlertKit.alert.__proto__.modal = document.createElement("div");
    AlertKit.alert.close = function() {
        delete AlertKit.alert.close;
        AlertKit.alert.__proto__.modalBG.style.background = "rgba(0, 0, 0, 0.0)";
        AlertKit.alert.__proto__.modal.style.top = "100%";
        setTimeout(function() {
            if (document.body.contains(AlertKit.alert.__proto__.modalBG))
                document.body.removeChild(AlertKit.alert.__proto__.modalBG);
            if (document.body.contains(AlertKit.alert.__proto__.modal))
                document.body.removeChild(AlertKit.alert.__proto__.modal);
        }, 500);
        if (typeof AlertKit.__proto__.__AlertKit_button_functions != "undefined") {
            delete AlertKit.__proto__.__AlertKit_button_functions;
        }
    }
    if (title == null && text == null && buttons == null) {
        AlertKit.alert.close();
        return false;
    }
    if (!document.body.contains(document.getElementsByClassName(AlertKit.__proto__.__alertModalClass)[document.getElementsByClassName(AlertKit.__proto__.__alertModalClass).length - 1])) {
        AlertKit.alert.__proto__.modalBG.style.height = "100%";
        AlertKit.alert.__proto__.modalBG.style.width = "100%";
        AlertKit.alert.__proto__.modalBG.style.background = "rgba(0, 0, 0, 0.0)";
        AlertKit.alert.__proto__.modalBG.style.position = "fixed";
        AlertKit.alert.__proto__.modalBG.style.top = "0";
        AlertKit.alert.__proto__.modalBG.style.left = "0";
        AlertKit.alert.__proto__.modalBG.style.transition = "500ms";
        AlertKit.alert.__proto__.modalBG.style.zIndex = highest + 1;
        AlertKit.alert.__proto__.modalBG.className = AlertKit.__proto__.__alertModalClass;
    }
    if (enableClickOut != false) {
        AlertKit.alert.__proto__.modalBG.onclick = function() {
            try {
                AlertKit.alert.close();
            } catch (err) {

            }
        };
    } else {
        AlertKit.alert.__proto__.modalBG.onclick = function() {
            void(0);
        };
    }
    AlertKit.alert.__proto__.modal.style.top = "-68%";
    AlertKit.alert.__proto__.modal.style.zIndex = highest + 1;
    AlertKit.alert.__proto__.modal.style.borderRadius = "10px";
    AlertKit.alert.__proto__.modal.style.fontFamily = "sans-serif";
    AlertKit.alert.__proto__.modal.style.transition = "500ms";
    AlertKit.alert.__proto__.modal.style.width = "75%";
    AlertKit.alert.__proto__.modal.style.margin = "0 12.5% 0 12.5%";
    AlertKit.alert.__proto__.modal.style.background = "white";
    AlertKit.alert.__proto__.modal.style.position = "fixed";
    AlertKit.alert.__proto__.modal.innerHTML = "";
    if (title != null)
        if (text == null && buttons != null)
            AlertKit.alert.__proto__.modal.innerHTML = AlertKit.alert.__proto__.modal.innerHTML + `<div style="padding: 20px; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><h3 style="margin: 0">` + title + `</h3></div>`;
        else
            AlertKit.alert.__proto__.modal.innerHTML = AlertKit.alert.__proto__.modal.innerHTML + `<div style="padding: 20px; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1); font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><h3 style="margin: 0">` + title + `</h3></div>`;
    if (text != null) {
        //AlertKit.alert.__proto__.modal.innerHTML = AlertKit.alert.__proto__.modal.innerHTML + `<div style="padding: 20px; max-height: 100px; overflow-y: scroll">` + text + `</div>`;
        AlertKit.alert.__proto__.modal.innerHTML = AlertKit.alert.__proto__.modal.innerHTML + `<div style="padding: 0 20px; max-height: 100px; overflow-y: scroll"><div style="height:20px"></div>` + text + `<div style="height:20px"></div></div>`;
    }
    var allowButtons = false;
    if (buttons != null) {
        if (buttons.length != 0) {
            for (var i = 0; i < buttons.length; i++) {
                if (buttons[i].length != 0 && typeof buttons[i] == "object") {
                    allowButtons = true;
                }
            }
        }
    }
    if (allowButtons) {
        //var buttonSection = `<div style="padding: 20px; border-top: solid black 1px; overflow-x: scroll; overflow-y: hidden; white-space: nowrap;">`;
        var buttonSection = `<div style="padding: 20px 0; border-top: solid black 1px; overflow-x: scroll; overflow-y: hidden; white-space: nowrap;"><div style="width: 20px; display: inline-block"></div>`;
        AlertKit.__proto__.__AlertKit_button_functions = new Array();
        for (var i = 0; i < buttons.length; i++) {
            try {
                try {
                    AlertKit.__proto__.__AlertKit_button_functions[i] = Function(buttons[i][1]);
                } catch (err) {
                    //throw new Error(err);
                }
                if (typeof AlertKit.__AlertKit_button == "string")
                    buttons[i][0] = buttons[i][0].replace(/[&<>"']/g, function(m) {
                        return map[m];
                    });
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
                var __randnum__ = AlertKitRandomNumberGenerator(14);
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
                    __selectedBackground__ = __background__ + "88";
                    if (typeof buttons[i][3] == "string") {
                        if (buttons[i][3].length == 6) {
                            __selectedBackground__ = "#" + buttons[i][3];
                        } else if (buttons[i][3] == "") {
                            __selectedBackground__ = "transparent";
                        }
                    }
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
                    __transition__ = "0ms";
                    if (typeof buttons[i][8] == "string") {
                        __transition__ = buttons[i][8];
                    }
                    buttonSection = buttonSection + `<style>.__b_custom` + __randnum__ + ` { transition: ` + __transition__ + `; border: solid 1px ` + __border__ + ` !important; background: ` + __background__ + ` !important; color: ` + __colour__ + ` !important; } .__b_custom` + __randnum__ + `:active { transition: ` + __transition__ + `; border: solid 1px ` + __selectedBorder__ + ` !important; background: ` + __selectedBackground__ + ` !important; color: ` + __selectedColour__ + ` !important; }</style>`;
                    buttonSection = buttonSection + `<div class="` + AlertKit.__proto__.__buttonClass + ` __b_custom` + __randnum__ + `" onclick="try { AlertKit.__proto__.__AlertKit_button_functions[` + i + `]() } catch(err) { console.log('%c[ERROR]%cAlertKit encountered an unexpected error. (' + err + ')', 'color: red'); }">` + buttons[i][0] + `</div>`;
                } else {
                    buttonSection = buttonSection + `<div class="` + AlertKit.__proto__.__buttonClass + `" onclick="try { AlertKit.__proto__.__AlertKit_button_functions[` + i + `]() } catch(err) { }">` + buttons[i][0] + `</div>`;
                }
            } catch (err) {
                console.log('%c[ERROR]%cAlertKit encountered an unexpected error. (' + err + ')', 'color: red');
            }
        }
        //buttonSection = buttonSection + "</div>";
        buttonSection = buttonSection + `<div style="width: 20px; display: inline-block"></div></div>`;
        //if (buttonSection != `<div style="padding: 20px; border-top: solid black 1px; overflow-x: scroll; overflow-y: hidden; white-space: nowrap;"></div>`) {
        if (buttonSection != `<div style="padding: 20px; border-top: solid black 1px; overflow-x: scroll; overflow-y: hidden; white-space: nowrap;"><div style="width: 20px; display: inline-block"></div><div style="width: 20px; display: inline-block"></div></div>`) {
            AlertKit.alert.__proto__.modal.innerHTML = AlertKit.alert.__proto__.modal.innerHTML + buttonSection;
        }
    }
    if (AlertKit.alert.__proto__.modal.innerHTML == "") {
        AlertKit.alert.__proto__.modal.innerHTML = `<div style="padding: 20px; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1); font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><h3 style="margin: 0">Error</h3></div><div style="padding: 20px; max-height: 100px; overflow-y: scroll">The intended alert was not displayed because an unexpected error occurred.</div>`;
        AlertKit.alert.__proto__.modalBG.onclick = function() {
            AlertKit.alert.close();
        };
    }
    AlertKit.alert.__proto__.newModalBG = false;
    if (!document.body.contains(document.getElementsByClassName(AlertKit.__proto__.__alertModalClass)[document.getElementsByClassName(AlertKit.__proto__.__alertModalClass).length - 1])) {
        document.body.appendChild(AlertKit.alert.__proto__.modalBG);
        AlertKit.alert.__proto__.newModalBG = true;
    }
    document.body.appendChild(AlertKit.alert.__proto__.modal);
    setTimeout(function() {
        if (AlertKit.alert.__proto__.newModalBG) {
            AlertKit.alert.__proto__.modalBG.style.background = "rgba(0, 0, 0, 0.6)";
        }
        AlertKit.alert.__proto__.modal.style.top = "12.5%";
        delete AlertKit.alert.__proto__.newModalBG;
    }, 50);
    return true;
}
