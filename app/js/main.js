;
jQuery(document).ready(function($) {
	var windowWidth = $(window).width();

	(function initMobileMenu() {
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
	})();
	
	(function initScrollbar() {
		$('.scrollbar-inner').scrollbar();
	})();

	(function initFormGroups() {
		$('.form-group').each(function() {
			$(this).on('input', function(e) {
				if (!e.target.value) {
					$(this).removeClass('active');
				} else {
					$(this).addClass('active');
				}
			});
		});
	})();

	(function initBlogSlider() {
		if ($('#js-blog-slider').length) {
			var blogSlider = $('#js-blog-slider');
			$(blogSlider).slick({
				arrows: false,
				slidesToShow: 3,
				touchThreshold: 200,
				responsive: [
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 2,
						}
					},
					{
						breakpoint: 420,
						settings: {
							slidesToShow: 1,
						}
					}
				]
			});
		}

		$(blogSlider).on('wheel', function(e) {
			e.preventDefault();

			if (e.originalEvent.deltaY < 0) {
		    $(this).slick('slickNext');
		  } else {
		    $(this).slick('slickPrev');
		  }
		});
		
	})();

	(function initPhotoItemSlider() {
		if ($('#js-photo-item-slider').length) {
			var photoItemSlider = $('#js-photo-item-slider');
			$(photoItemSlider).slick({
				arrows: false,
				touchThreshold: 200,
				adaptiveHeight: true
			});
		}

		$(photoItemSlider).on('wheel', function(e) {
			e.preventDefault();

			if (e.originalEvent.deltaY < 0) {
		    $(this).slick('slickNext');
		  } else {
		    $(this).slick('slickPrev');
		  }
		});
		
	})();



	(function initPhotoSlider() {
		if ($('#js-photo-items-slider').length) {
			var photoSlider = $('#js-photo-items-slider');
			$(photoSlider).slick({
				rows: 2,
				slidesPerRow: 4,
				arrows: false,
				touchThreshold: 200,
				dots: true,
				appendDots: '.photo-items__controls',
				dotsClass: 'photo-items__dots',
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 900,
						settings: {
							slidesPerRow: 3,
						}
					},
					{
						breakpoint: 650,
						settings: {
							slidesPerRow: 2,
						}
					},
					{
						breakpoint: 450,
						settings: {
							slidesPerRow: 1,
						}
					}
				]
			});
		}

		$(photoSlider).on('wheel', function(e) {
			e.preventDefault();

			if (e.originalEvent.deltaY < 0) {
		    $(this).slick('slickNext');
		  } else {
		    $(this).slick('slickPrev');
		  }
		});
		
	})();
	

	(function initVideoSlider() {
		if ($('#js-video-slider').length) {
			var videoSlider = $('#js-video-slider');
			$(videoSlider).slick({
				slidesPerRow: 2,
				touchThreshold: 200,
				rows: 2,
				arrows: false,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 767,
						settings: {
							slidesPerRow: 1
						}
					}
				]
			});

			$(videoSlider).on('wheel', function(e) {
				e.preventDefault();

				if (e.originalEvent.deltaY < 0) {
			    $(this).slick('slickNext');
			  } else {
			    $(this).slick('slickPrev');
			  }
			});
		}
	})();

	(function initHoverEffectsOnCategoryMenu() {
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
	})();
});