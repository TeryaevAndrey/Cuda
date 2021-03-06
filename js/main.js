$(function() {
	let homeH = $("#header"),
	scrollOffset = $(window).scrollTop();
	checkScroll(scrollOffset);
	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});
	function checkScroll(scrollOffset) {
		if(scrollOffset >= homeH) {
			header.addClass("fixed");
		}else {
				removeClass("fixed");
		}
	}
});
 $('a[href^="#"]').click(function(){ 
    let anchor = $(this).attr('href');  
$('html, body').animate({           
    scrollTop:  $(anchor).offset().top  
    }, 600);                            
});

