/**
 * amphiHover v1.0 beta - jQuery image hover effect plugin
 * Use on a HTML <a></a> Tag.
 * http://www.livingconcept.de
 * Released under dual MIT/GPL license just like jQuery.
 * 2013 Bartos Lazarski - http://www-lazba.net
 */


(function($){  
 	$.fn.amphiHover= function(options) {  
  
  		// Default var
  		var defaults = {    
		  	effect: 'e5',
			easing_effect: 'easeInBack',
			duration_time:  'slow',
			bottom_text:  '<button>Some Text</button>',
			bg_color: 'rgba(0,0,0,0.5)',
  		};  
  		var options = $.extend(defaults, options);  
   
  		return this.each(function() {  
			
 		$(this).hover(
  			function () {

  				// Clear Queue
  				// $('.image_hover_layer').clearQueue();
	
				// Variablen
			    var hoehe =  $(this).height();
				var weite =  $(this).width();
				var hoehep =  $(".image_hover_layer p *").height();

				// Remove old layer
				$('.image_hover_layer').remove();

				// Add new layer
				$(this).append('<div class="image_hover_layer"><p>' + options.bottom_text + '</p></div>');

				// Set Button CSS
				$(".image_hover_layer p").css({"margin-top" : (hoehe/2)-20, display: "inline-block", "padding-left" :20, "padding-right" :20});

				// Set Layer CSS 
				$(".image_hover_layer").stop(true, true).css({opacity: 0, background : options.bg_color, "z-index" : 100});	
				
					// Effect abfrage
					if (options.effect == "e1") {			
						/* Animation 1 top */
						$(".image_hover_layer").css({top: -hoehe});	
						$(".image_hover_layer").animate({top: 0, opacity: 1}, {duration: options.duration_time, easing: options.easing_effect});
					} else if (options.effect == "e2") {	
						/* Animation 2 bottom */
						$(".image_hover_layer").css({bottom: -hoehe});	
						$(".image_hover_layer").animate({bottom: 0, opacity: 1}, {duration: options.duration_time, easing: options.easing_effect});		
					} else if (options.effect == "e3") {			
						/* Animation 3 left */
						$(".image_hover_layer").css({left: -weite});	
						$(".image_hover_layer").animate({left: 0, top: 0, opacity: 1}, {duration: options.duration_time, easing: options.easing_effect});		
					} else if (options.effect == "e4") {			
						/* Animation 4 right */
						$(".image_hover_layer").css({right: -weite});		
						$(".image_hover_layer").animate({right: 0, top: 0, opacity: 1}, {duration: options.duration_time, easing: options.easing_effect});	
					} else if (options.effect == "e5") {		
						/* Animation 4 right */
						$(".image_hover_layer").css({top: 0, left: 0, opacity: 0});		
						$(".image_hover_layer").animate({opacity: 1}, {duration: options.duration_time, easing: options.easing_effect});	
					}
				
			  },
			  function () {
					$('.image_hover_layer').fadeOut(300, function() {
						$(this).animate(
							{opacity: 0}, {duration: options.duration_time, easing: options.easing_effect});
					}); 
			  });
		});  
	};  
})(jQuery);  


$(document).ready(function() {
	 $('.image.demo1 a').amphiHover( {bottom_text:  '<button class="blue">Some Text</button>'});  
	 $('.image.demo2 a').amphiHover( {effect: 'e1', easing_effect: 'swing', bottom_text:  '<button class="minimal">Some Text</button>', bg_color: 'rgba(0,0,0,0.1)',});  
	 $('.image.demo3 a').amphiHover( {effect: 'e2', easing_effect: 'easeOutBounce', bottom_text:  '<button class="thoughtbot">Some Text</button>', bg_color: 'rgba(0,0,0,0.3)',});  
	 $('.image.demo4 a').amphiHover( {effect: 'e3', easing_effect: 'easeOutCirc', bottom_text:  '<button class="minimal">Some Text</button>', bg_color: 'rgba(0,0,0,0.85)',});  
	 $('.image.demo5 a').amphiHover( {effect: 'e4', easing_effect: 'easeInOutCubic', bottom_text:  '<button class="minimal">Some Text</button>'});  
	 $('.image.demo6 a').amphiHover( {effect: 'e5', easing_effect: 'easeInOutQuart', bottom_text:  '<button class="minimal">Some Text</button>'});  
	 $('.image.demo7 a').amphiHover( {effect: 'e1', easing_effect: 'easeOutBounce', bottom_text:  'Some Text here', bg_color: 'rgba(255,255,255,0.8)'});  
}); 

