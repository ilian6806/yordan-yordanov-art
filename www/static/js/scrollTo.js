$(window).load(function () {

    function scrollTo(hash) {
        try {
            let $el = $(hash);
            if ($el.length) {
                $('html, body').stop().animate({
                    'scrollTop': $el.offset().top + 3
                }, 1000, 'swing', function () {
                    window.location.hash = hash;
                });
            }
        } catch (e) {}
    }

    $('a').each(function () {
        var link = $(this).attr('href');
        var firstChar = link.substr(0,1);
        if (firstChar === '#') {
            $(this).on('click', function (e) {
                e.preventDefault();
                let hash = $(this).attr('href');
                scrollTo(hash);
            });
        } else if (firstChar === '/') {
            $(this).attr('href', window.location.origin + link);
        }
    });

    if (window.location.hash) {
        scrollTo(window.location.hash);
    }
});
