'use strict';
$( document ).ready(function() {
	
	console.log( "ready!" );
	
	// al_app
	function al_app () {

		var al_header = document.getElementById('al-header');
		var al_contacts = document.getElementById('contacts');

		function header_height() {
			al_header.style.height = window.innerHeight + 'px';
			al_contacts.style.height = window.innerHeight - window.innerHeight/4 + 'px';
			al_contacts.style.paddingTop = window.innerHeight/4 + 'px';
		};
		header_height();

		function global_resize() {
			header_height();
		};
		window.onresize = global_resize;

	};

	al_app();

	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});


});