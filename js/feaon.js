$(document).ready(function() {

	var sync1 = $("#sync1");
	var sync2 = $("#sync2");
	var slidesPerPage = 7; //globaly define number of elements per page
	var syncedSecondary = true;
  
	sync1.owlCarousel({
	  items : 1,
	  slideSpeed : 3000,
	  nav: true,
	  autoplay: true,
	  navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
	  dots: true,
	  loop: true,
	  responsiveRefreshRate : 100,
	}).on('changed.owl.carousel', syncPosition);
  
	sync2
	  .on('initialized.owl.carousel', function () {
		sync2.find(".owl-item").eq(0).addClass("current");
	  })
	  .owlCarousel({
	  items : slidesPerPage,
	  dots: false,
	  nav: false,
	  smartSpeed: 200,
	  slideSpeed : 500,
	  slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
	  responsiveRefreshRate : 100
	}).on('changed.owl.carousel', syncPosition2);
  
	function syncPosition(el) {
	  //if you set loop to false, you have to restore this next line
	  //var current = el.item.index;
	  
	  //if you disable loop you have to comment this block
	  var count = el.item.count-1;
	  var current = Math.round(el.item.index - (el.item.count/2) - .5);
	  
	  if(current < 0) {
		current = count;
	  }
	  if(current > count) {
		current = 0;
	  }
	  
	  //end block
  
	  sync2
		.find(".owl-item")
		.removeClass("current")
		.eq(current)
		.addClass("current");
	  var onscreen = sync2.find('.owl-item.active').length - 1;
	  var start = sync2.find('.owl-item.active').first().index();
	  var end = sync2.find('.owl-item.active').last().index();
	  
	  if (current > end) {
		sync2.data('owl.carousel').to(current, 100, true);
	  }
	  if (current < start) {
		sync2.data('owl.carousel').to(current - onscreen, 100, true);
	  }
	}
	
	function syncPosition2(el) {
	  if(syncedSecondary) {
		var number = el.item.index;
		sync1.data('owl.carousel').to(number, 100, true);
	  }
	}
	
	sync2.on("click", ".owl-item", function(e){
	  e.preventDefault();
	  var number = $(this).index();
	  sync1.data('owl.carousel').to(number, 300, true);
	});
  });

  (function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

//featured on

$(document).ready(function() {

	$('.counter').each(function () {
	$(this).prop('Counter',0).animate({
	Counter: $(this).text()
	}, {
	duration: 4000,
	easing: 'swing',
	step: function (now) {
	$(this).text(Math.ceil(now));
	}
	});
	});
	
	});


//Grid img src change
$(document).ready(function(){

    $(".grid-item1").click(function(){

		$(".change_img").attr("src", "image/freshsvg/C1.svg");
	});  
	$(".grid-item2").click(function(){

        $(".change_img").attr("src", "image/freshsvg/C2.svg");
	});    
	$(".grid-item4").click(function(){

        $(".change_img").attr("src", "image/freshsvg/C3.svg");
	});    
	$(".grid-item5").click(function(){

        $(".change_img").attr("src", "image/freshsvg/C4.svg");
    });    

});