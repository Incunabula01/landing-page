'use strict';

(function() {

	var header = $('header');

	header.waypoint({
		handler: function(direction){

			var sticky = $('#sticky-header');

			if(direction === 'down'){
				sticky.addClass('stuck');
				$(this).css({
					height: 60
				});
			} else {
				sticky.removeClass('stuck');
				$(this).css({
					height: 'auto'
				});
			}
		},
		offset: function(){
			return -header.outerHeight();
		}
	}); 

	$('#Two').waypoint({
		handler: function(direction){

			var pullQuote = $('.pull-quote');

			if(direction === 'down'){
				pullQuote.fadeIn(3000);
			} else if(direction === 'up'){
				pullQuote.fadeOut(2000);
			} 
		},
		offset: function(){

			var sectionWidth = $('#Two').outerHeight();
			var windowWidth = $(window).width();

			if(windowWidth <= 640){
				return	sectionWidth / 6;
			} else {
				return  sectionWidth / 2;
			}
			
		}
	});
	
})(jQuery);
