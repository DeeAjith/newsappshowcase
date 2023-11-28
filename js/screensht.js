(function($) {
		
"use strict";
        
	

	if ($('.appScreenshotCarousel-container').length) {
		if ($('.appScreenshotCarousel-container').length) {

			var swiper = new Swiper('.appScreenshotCarousel-container', {
				effect: 'coverflow',
				loop: true,
				centeredSlides: true,
				slidesPerView: 4,
				initialSlide: 4,
				keyboardControl: true,
				mousewheelControl: false,
				lazyLoading: true,
				preventClicks: false,
				preventClicksPropagation: false,
				lazyLoadingInPrevNext: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				coverflow: {
					rotate: 0,
					stretch: 0,
					depth: 250,
					modifier: .5,
					slideShadows: false,
				},
				breakpoints: {
					1199: {
						slidesPerView: 3,
						spaceBetween: 5,
					},
					991: {
						slidesPerView: 3,
						spaceBetween: 5,
					},
					767: {
						slidesPerView: 2,
						spaceBetween: 5,
					},
					420: {
						slidesPerView: 1,
						spaceBetween: 5,
					}
				}
			});

		}
	}
})(window.jQuery);