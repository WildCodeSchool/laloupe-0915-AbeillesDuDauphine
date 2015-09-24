(function($){

	$('#header__icon').click(function(e){
		e.preventDefault();
		$('.header__menu').toggleClass('header__hidden');
	})

})(jQuery);