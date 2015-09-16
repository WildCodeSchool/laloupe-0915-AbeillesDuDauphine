(function($) {
    
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt > a').click(function() {
  	var $currentPanel = $(this).parent().next();
    allPanels.slideUp();
    if ( $currentPanel.style.display == "block" ){ 
    	$currentPanel.slideDown();
    }
    else {

    };
    return false;
  });

})(jQuery);