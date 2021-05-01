$(document).ready(function() {
	/* Apply fancybox to multiple items */
	
	$("a.lightbox").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	true,
		'titleShow'		:	true,
		helpers : {
    		title : {
    			type : 'inside'
    		},
			overlay : {
				css : {
					'background' : 'rgba(51, 51, 51, 0.90)'
				}
        	}
    	},
		'cyclic'		:	true
	});
	
});