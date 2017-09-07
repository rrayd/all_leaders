'use strict';

// al_app
function al_app () {

	var al_header = document.getElementById('al-header');

	function header_height() {
		al_header.style.height = window.innerHeight + 'px';
	};
	header_height();

	function global_resize() {
		header_height();
	};
	window.onresize = global_resize;

};

al_app();