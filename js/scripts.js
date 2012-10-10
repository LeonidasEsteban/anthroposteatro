
$(function(){
	var nav = $('nav').offset().top;
	$(window).scroll(function(){
		if($(this).scrollTop()>nav){
		  $("nav").addClass("fixed");
		}else{
		  $("nav").removeClass("fixed");
		}
	});

})