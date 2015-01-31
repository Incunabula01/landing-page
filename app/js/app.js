'use strict';

(function() {

	var header = $('header');
	var sticky = $('#sticky-header');

	header.waypoint({
		handler: function(direction){
			if(direction === 'down'){
				sticky.addClass('stuck');
				$(this).css({
					height: 60
				}, 200);
			} else {
				sticky.removeClass('stuck');
				$(this).css({
					height: "auto"
				});
			}
		},
		offset: function(){
			return -header.outerHeight();
		}
	}) 

	$('#Two').waypoint({
		handler: function(direction){
			if(direction === 'down'){
				$('.pull-quote').fadeIn({
					easeInQuad: 200
				});
				return true;
			}
			return false;
		}
	});

	$('#Three').waypoint({
		handler: function(direction){
			if(direction === 'down'){
				$('p').fadeIn({
					easeInQuad: 200
				});
				return true;
			}
			return false;
		}
	})
	
})(jQuery);
