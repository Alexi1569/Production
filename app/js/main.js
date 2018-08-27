;
jQuery(document).ready(function($) {
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

	$('.scrollbar-inner').scrollbar({
		ignoreMobile: true,
	});

	var videoSlider = $('#js-video-slider');
	$(videoSlider).slick({
		slidesPerRow: 2,
		rows: 2,
		arrows: false,
		adaptiveHeight: true,
	});

	$(videoSlider).on('wheel', function(e) {
		e.preventDefault();

		if (e.originalEvent.deltaY < 0) {
	    $(this).slick('slickNext');
	  } else {
	    $(this).slick('slickPrev');
	  }
	});

	if ($('#js-photo-nav').length) {
		var nav = $('#js-photo-nav');

		$('.photo__nav-inner').css({
			'padding-top': $('.header').outerHeight() + 'px',
			'padding-bottom': $('.footer').outerHeight() + 'px',
		});

		$(nav).find('> li').each(function() {
			if (($(this).find('ul')).length) {
				$(this).addClass('no-line');
			}
		});

		$(nav).find('li').hover(function() {
			var offset = $(this)[0].getBoundingClientRect();
			var total = offset.x + offset.width;

			$(this).find('.photo__nav-inner').css({
				'left': total + 'px'
			});

			$('#js-nav-bg').css({
				'width': total + 'px',
			});




			$(this).addClass('active');

			var target = $(this).attr('data-img') || '';

			$('#js-nav-img').css({
				'background-image': 'url(' + target + ')',
			});

			$('#js-photo-title').css({
				'opacity': '0',
			});

		}, function() {
			$(this).removeClass('active');

			$('#js-nav-img').css({
				'background-image': 'none',
			});

			$('#js-nav-bg').css({
				'width': '50%',
			});

			$('#js-photo-title').css({
				'opacity': '1',
			});
		})
	}
});