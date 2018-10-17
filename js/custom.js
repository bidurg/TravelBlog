$(document).ready(function(){

	/* NAVBAR TRANSPARENT */
	if ($(window).width() > 992) {
		$(window).scroll(function(){
			var scrollbar = $(window).scrollTop();
			if(scrollbar > 50){
				$('.mynavbar').addClass('nav-shrink');
			}
			else {
				$('.mynavbar').removeClass('nav-shrink');
			}
		});
	} else{
		$('.mynavbar').addClass('nav-shrink');
	}	

	/* FITVIDEO TO SCREEN SIZE */
	$(".blog-video").fitVids();

	/* INITIALIZE WOW JS */
		new WOW().init();

	/* SCROLL TO TOP */
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 100) {
			$('.scroll-to-top').css('display','block');
		}
		else{
			$('.scroll-to-top').css('display','none');
		}
	});
	$('.scroll-to-top').click(function(){
		$('body,html').animate({scrollTop : 0},500);
		return false;
	});

});
