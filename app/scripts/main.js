$( document ).ready(function() {
	// jquery functions
	// smooth scrolling for anchors
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 89
			}, 1000);
		}
	});
	// invite form masks
	$('#telephone').mask('+99999999999');
	// invite form validate
	 $('#al-invite').validate({
		rules: {
			'name': 'required',
			'lastname': 'required',
			'email': 'email',
			'telephone': 'required',
			'company': 'required',
			'work': 'required'
		},
		submitHandler: function(form) {
			console.log('sending form begin');
			$.ajax({
				type: 'POST',
				url: 'al_invite.php',
				data: $(form).serialize(),
				timeout: 3000,
				success: function() {alert('works');},
				error: function() {alert('failed');}
			});
			return false;
	  }
	});

	// vanilla functions
	function al_app () {
		// vanilla variables
		var al_header = document.getElementById('al-header');
		var al_contacts = document.getElementById('contacts');
		var al_ios_background = document.getElementById('al-ios-background');

		// set sizes for design blocks
		function sections_height() {
			al_header.style.height = window.innerHeight + 'px';
			al_contacts.style.height = window.innerHeight - window.innerHeight/4 + 'px';
			al_contacts.style.paddingTop = window.innerHeight/4 + 'px';
			al_ios_background.style.height = window.innerHeight/3 + 'px';
			al_ios_background.style.top = '-' + window.innerHeight/3 + 'px';
		};
		sections_height();

		// run all functions for resize event
		function global_resize() {
			sections_height();
		};
		window.onresize = global_resize;
	};
	// run vanilla app
	al_app();
});