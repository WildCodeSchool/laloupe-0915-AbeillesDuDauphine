$(document).ready(function() {
        $('.scrollTo').click( function() { // Au clic sur un élément
            var page = $(this).attr('href'); // Page cible
            var speed = 1200; // Durée de l'animation (en ms)
            $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
            return false;
        });
    });