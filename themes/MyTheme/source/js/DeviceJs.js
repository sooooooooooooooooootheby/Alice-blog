var deviceOS = '';
var userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (/android/i.test(userAgent)) {
    deviceOS = "Android";
} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    deviceOS = "iOS";
} else if (/Win64|Win32|Win16/.test(userAgent)) {
    deviceOS = "Windows";
} else if (/Macintosh/.test(userAgent)) {
    deviceOS = "MacOS";
} else if (/Linux/.test(userAgent)) {
    deviceOS = "Linux";
}

var deviceBrowser = '';
var userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (/OPR/i.test(userAgent)) {
    deviceBrowser = "Opera";
} else if (/Chrome/i.test(userAgent)) {
    deviceBrowser = "Chrome";
} else if (/Firefox/i.test(userAgent)) {
    deviceBrowser = "Firefox";
} else if (/Safari/i.test(userAgent)) {
    deviceBrowser = "Safari";
} else if (/MSIE/i.test(userAgent) || !!document.documentMode == true) {
    deviceBrowser = "IE";
} else {
    deviceBrowser = "Unknown";
}

let Text = document.getElementById('HomeTopWelcomeText');
if(deviceOS == 'iOS') {
    Text.style.textShadow = 'none';
}