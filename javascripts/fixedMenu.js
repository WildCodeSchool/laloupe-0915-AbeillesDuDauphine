 $(document).ready(function() {
            var navpos = $('.top-bar-menu').offset();
                console.log(navpos.top);
                $(window).bind('scroll', function() {
            if ($(window).scrollTop() > navpos.top) {
                $('.top-bar-menu').addClass('fixed');
                }
            else {
                $('.top-bar-menu').removeClass('fixed');
                }
            });
        });