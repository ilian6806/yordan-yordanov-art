(function () {
    var ua = navigator.userAgent.toLocaleLowerCase(),
        regV = /ipod|ipad|iphone/gi,
        result = ua.match(regV),
        userScale = "";
    if (!result) {
        userScale = ",user-scalable=0"
    }
    document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');
})();