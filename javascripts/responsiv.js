(function($){

	$('#header__icon').click(function(e){
		e.preventDefault();
		$('body').toggleClass('with__sidebar');
	})

})(jQuery);