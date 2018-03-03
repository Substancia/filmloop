$ (document).ready(function(){
	alert('hi');
});


$ ('.image').click(function(){
	
	$(this).css('background-color', '#000')
});

$(document).ready(function(){

	var click_default = 'Enter something'

	$('input[type="email"]').attr('value',click_default).focus(function(){
		if{(this).val() == click_default;
		$(this).attr('value','');
		}

		
	 	
	}).blur(function(){
		if{(this).val()='';
		$(this).attr('value',click_default);
	}

	}) ;
});