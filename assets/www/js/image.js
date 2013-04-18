$(function(){

	$('#navigation a').click(function() {
		
		var button=$(this).attr('id');
		var current_image=$('#image img.active');
		var next;
		if(button == 'previous') {
			next = ($('#image img.active').prev().length > 0) ?
				$('#image img.active').prev():
				$('#image img:last-child');
		}else{
			next=($('#image img.active').next().length > 0) ?
				$('#image img.active').next():
				$('#image img:first-child');
		}

		next.css('z-index', 2).show();

		current_image.fadeOut(300, function(){
			$(this).css('<-index', 1).removeClass('active')
			next.css('z-index', 3).addClass('active')
		});

		return false;

	});

});