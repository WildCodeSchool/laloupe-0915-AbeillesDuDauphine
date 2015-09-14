 $(document).ready(function() {
            var navpos = $('.top-menu').offset();
                console.log(navpos.top);
                $(window).bind('scroll', function() {
            if ($(window).scrollTop() > navpos.top) {
                $('.top-menu').addClass('fixed');
                }
            else {
                $('.top-menu').removeClass('fixed');
                }
            });
        });