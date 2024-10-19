$(document).ready(function () 
{
	// click button menu
	$('.toggle-bar').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('no-scroll');
		$('.menu-overlay').toggleClass('open');
	});

	// smooth page
	$('.nav-next').click(function(event){
		event.preventDefault();
		var id = $(this).attr('href');
		var target = $(id).offset().top;
		$('html, body').animate({scrollTop:target}, 500);
	});

	// transition page
	$('.target-link').click(function(event){
		event.preventDefault();
		target = $(this).attr('href');
		gotopage();
	});

	function gotopage(){
		$('body').addClass('fadeout');
		setTimeout(function () {
			window.location.href = '';
			$(window).attr('location',target);
    	}, 850);
	}
});