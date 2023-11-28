console.log('%c Proudly Crafted BY deeAjith.', 'background: #222; color: #bada55');
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
						spaceBetween: 30,
					},
					991: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					767: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					575: {
						slidesPerView: 1,
						spaceBetween: 5,
					}
				}
			});

		}
	}
	 	//Custom Pager Slider / Testimonials Slider
	if($('.banner-slider').length){
		var customPagerSlider = $(".banner-slider").bxSlider({
			adaptiveHeight: true,
			//auto:false,
			controls: true,
			pause: 5000,
			speed: 1000,
			nextText: '<span class="fa fa-angle-right"></span>',
			prevText: '<span class="fa fa-angle-left"></span>',
			pagerCustom: '#banner-pager',
			//onSlideAfter: function() {
				//customPagerSlider.stopAuto();
				//customPagerSlider.startAuto();
			//}
		});
	}
	
	//Custom Pager Slider / Testimonials Slider
	if($('.testimonials-slider').length){
		var customPagerSlider = $(".testimonials-slider").bxSlider({
			adaptiveHeight: true,
			auto:true,
			controls: true,
			pause: 5000,
			speed: 1000,
			nextText: '<span class="control-icon fa fa-angle-right"></span>',
			prevText: '<span class="control-icon fa fa-angle-left"></span>',
			pagerCustom: '#testimonials-pager',
			onSlideAfter: function() {
				customPagerSlider.stopAuto();
				customPagerSlider.startAuto();
			}
		});
	}
})(window.jQuery);