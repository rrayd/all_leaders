'use strict';

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