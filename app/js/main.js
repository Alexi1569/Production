;
$(document).ready(function($) {
	var windowWidth = $(window).width();

	if (windowWidth <= 570) {
		$('#mobile-menu').mmenu({
			navbar: {
				title: 'Красиво делай продакшн'
			},
			navbars: {
				content : [ "close" ],
			},
			extensions: [
        "theme-dark"
     ]
		});
	}
});