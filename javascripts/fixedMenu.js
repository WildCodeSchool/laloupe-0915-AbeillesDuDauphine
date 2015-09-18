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


var elementPosition = $('#sticky').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top - 50){
              $('#sticky').css('position','fixed').css('top','45px');
        } else {
            $('#sticky').css('position','static');
        }    
});