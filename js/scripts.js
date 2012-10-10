
jQuery(document).ready(function($) {

	$(window).scroll(function(){
		if($(this).scrollTop()>480){
		  $("nav").addClass("fixed");
		}else{
		  $("nav").removeClass("fixed");
		}
	});
});