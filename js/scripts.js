
$(function(){

	//scrollTo
	$('#sombra').localScroll({offset:-85, duration:800});
	//scroll fixed
	var nav = $('nav').offset().top;
	$(window).scroll(function(){
		if($(this).scrollTop()>nav){
		  $("nav").addClass("fixed");
		}else{
		  $("nav").removeClass("fixed");
		}
	});

})