var Dialog = function(){

	var $ = jQuery;

	// default settings
	var settings = {
		'width' : 300,
		'offset_top' : 100
	}

	return {

		init: function(){
		},

		// Open Dialog box by passing the id of the dialog div
		open: function(id, callback){

			// position dialog in center of window
			var winX = $(window).width();
			$(id).css('left', (winX/2)-(settings.width/2));
			$(id).css('top', $(window).scrollTop() + settings.offset_top);

			$('#dialog_screen').fadeIn('fast', function(){
				$(id).fadeIn('fast', function(){
					Dialog.add_close_click(id);
				});
			});
			if(typeof(callback)!=='undefined')
			{
				callback();
			}
		},

		close: function(id){
			$(id).fadeOut('fast', function(){
				$('#dialog_screen').fadeOut('fast', function(){
					// reset the state of the dialog after you close it
					$('fieldset.dialog-response').hide();
					$('p.success').hide();
					$('p.error').hide();
					$('fieldset.dialog-field').show();
				});
			});
		},
		
		add_close_click: function(id){
			$('a.dialog-close').click(function(){
				Dialog.close(id);
				return false;
			});

			$('button.btn-cancel').click(function(){
				Dialog.close(id);
				return false;
			});
		}
		
	};

}();
