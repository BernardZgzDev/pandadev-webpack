export const init = () => {

    $(document).ready(function(){
		
		perfilToggle();

		downloadButtomToggle();

		$('#aboutme').click(function () {
			$('#toggle-icon-aboutme').toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
		});

		$('#contact').click(function () {
			$('#toggle-icon-contact').toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
		});

		$('#skills').click(function () {
			$('#toggle-icon-skills').toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
		});

		$('#myprojects').click(function () {
			$('#toggle-icon-projects').toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
		});

		$('.skill').mouseover(function () { 
			$(this).parent().siblings().children('p').children().animate({fontSize: '110%'}, 'fast');
			$(this).parent().siblings().children('p').children().animate({fontSize: '100%'}, 'fast');                
		});

		$('.stars').mouseover(function () {         
			$(this).parent().siblings().children('p').animate({fontWeight: '700'}, 'fast');
			$(this).parent().siblings().children('p').animate({fontWeight: '400'}, 'fast');                       
		});

		$(document).on('show.bs.modal', '.modal', function () {
			$(this).appendTo('body');
		});

	});

	$(window).resize(function(){
		perfilToggle();
	});

	function perfilToggle() {
		var w = $(document).width();

		if(w >= 752) {
			$(".altura").addClass("vh-100");
			$("#aboutme-details, #contact-details, #skills-details, #projects-details").addClass("show");    
			$(".toggle-icon").addClass("fa-chevron-up");    
			$(".toggle-icon").removeClass("fa-chevron-down");    
			   
		} else {
			$(".altura").removeClass("vh-100");
			$("#aboutme-details, #contact-details, #skills-details, #projects-details").removeClass("show"); 
			$(".toggle-icon").addClass("fa-chevron-down");    
			$(".toggle-icon").removeClass("fa-chevron-up");    
		}
	}  
	
	function downloadButtomToggle() {

		$(window).scroll(function() {
			if ($(this).scrollTop() > 0) {
				$('.float-button').fadeOut();
			} else {
				$('.float-button').fadeIn();
			}
		});
	}
}