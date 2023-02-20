	$(document).ready(function(){
 		var body = $("body");
 		body.fadeIn(300);
 		$(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])", function(e) {
  			e.preventDefault();
  			$("body").fadeOut(300);
  			var self = this;
  			setTimeout(function () {
   		window.location.href = $(self).attr("href");
  		}, 300);
 	});
});


$(function() {
	let firstPage = $("firstPage"),
	whyWe = $('#whyWe').offset().top,
	aboutCompany = $('#aboutCompany').offset().top,
	works = $('#works').offset().top,
	firstPageHeight = $("#firstPage").innerHeight(),
	scrollOffset = $(window).scrollTop(),
	header__nav = $('#header__nav'),
	footer = $('#footer').offset().top,
	project__item = $(".project__item");

	$(window).on('scroll', function() {

	scrollOffset = $(this).scrollTop();
	});

	$("[data-scroll]").on('click', function(event) {
		event.preventDefault();

		let blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top,
			$this = $(this);

		
		$("html, body").animate({
			scrollTop: blockOffset
		}, 500)
	});




});




let project__item = document.querySelector("project__item");

$(project__item).on('click', function(){

	project__item = $(this).style.width = "47%";
});


$(".header__burger").click(function(event){
	$('.header__burger, .header__nav__list').toggleClass('active');
});

$('.header__nav__item').click(function(event){
	$('.header__burger, .header__nav__list').removeClass('active');
});

