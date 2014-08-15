var splashWin, autoCloseTimeoutHandle, ontopIntervalHandle;

function launchSplashWin(contentType, contentString, width, height, left, top, autoCloseTime) {

    var w = window.screen.width;
    var h = window.screen.height;
    var l = (left != null) ? left : (w-width)/2;
    var t = (top != null) ? top : (h-height)/2;

    var uri = (contentType.toLowerCase() == "uri") ? contentString : "";

    splashWin = window.open(uri, '_splash', 'fullscreen=1,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0' );

    splashWin.blur();	// Hide while updating
    window.focus();

    splashWin.resizeTo(width,height);
    splashWin.moveTo(l, t);

    if (contentType.toLowerCase() == "string") {
        var swd = splashWin.document;

        swd.open();
        swd.write(contentString);
        swd.close();
    }

    splashWin.focus();

    ontopIntervalHandle = splashWin.setInterval("window.opener.splashWin.focus();", 50);
    splashWin.document.body.onbeforeunload = function() {
        // Splash is being closed. no need to close it again
        window.clearInterval(autoCloseTimeoutHandle);
        window.onbeforeunload = null;
    };

    splashWin.document.body.onload = function() {splashWin.setInterval("window.opener.splashWin.focus();", 50);};

    window.clearTimeout(autoCloseTimeoutHandle);	// in case some one calls this twice
    if (autoCloseTime != null && autoCloseTime > 0) {
        autoCloseTimeoutHandle = window.setTimeout("splashWin.close()", autoCloseTime);
    }

    window.onbeforeunload = function() {splashWin.close();};	// Close splash when this page is unloaded
}