$(window).load(function () {
    $('a').each(function () {
        var link = $(this).attr('href');
        var firstChar = link.substr(0,1);
        if (firstChar === '#') {
            $(this).attr('href', window.location.origin + window.location.pathname + link);
        } else if (firstChar === '/') {
            $(this).attr('href', window.location.origin + link);
        }
    });
    if (window.location.hash) {
        $('html, body').stop().animate({
            'scrollTop': $(window.location.hash).offset().top + 2
        }, 1400, 'swing');
    }
});
