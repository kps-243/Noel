





document.addEventListener('DOMContentLoaded', function() {

	'use strict';

	let device, is_ie;
	device = {
		'phone':        false,
		'tablet':       false,
		'desktop':      false
	};










	// ---------- DETECTION device
	(function() {

		let Device = () => {
			if (window.innerWidth < 768) {
				device.phone			= true;
				device.tablet			= false;
				device.desktop		= false;
				// console.log('----- device.phone');
			} else if ((window.innerWidth >= 768) && (window.innerWidth < 1024)) {
				device.phone			= false;
				device.tablet			= true;
				device.desktop		= false;
				// console.log('----- device.tablet');
			} else if (window.innerWidth >= 1024) {
				device.phone			= false;
				device.tablet			= false;
				device.desktop		= true;
				// console.log('----- device.desktop');
			} else {
				// console.error('function Device() non détecté');
			}
		}// let Device = () => {

		Device();
		window.onresize = Device;

	}());
	// ---------- /DETECTION device










	// ---------- DETECTION IE
	(function() {

		let ua, msie;
		ua            = window.navigator.userAgent;
		msie          = ua.indexOf("MSIE ");

		is_ie         = (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));

		// console.log(`is_ie = ${is_ie}`);

	})();
	// ---------- /DETECTION IE










	// ---------- LAZY animations
	(function() {


		// ----- Init

		const lazy = document.querySelectorAll('.lazy-anim');

		if (!is_ie) {
			const observer = new IntersectionObserver(function (p_entries) {
				p_entries.forEach(p_entry => {
					(p_entry.intersectionRatio > 0)
					 ? p_entry.target.classList.add('playing')
					 : p_entry.target.classList.remove('playing');
				});
			});


			// ----- Traitement

			lazy.forEach(image => {
				// console.log('lazy', image);
				observer.observe(image);
			});
		};

	}());
	// ---------- /LAZY animations










});// document.addEventListener('DOMContentLoaded', function() {






























// ---------- FONCTIONS COMMUNES

const FadeIn = (p_elt, p_display = 'block') => {

	// ----- Init
	let cible, fadeIncr;
	cible                 = document.getElementById(p_elt);
	cible.style.opacity   = 0;
	cible.style.display   = p_display;
	fadeIncr              = 0.1;
	
	// ----- Traitement
	(function Fade() {
		let opacite;
		opacite = parseFloat(cible.style.opacity);
		if (!((opacite += fadeIncr) > 1)) {
			cible.style.opacity = opacite;
			requestAnimationFrame(Fade);
		}// if (!((opacite += fadeIncr) > 1)) {
	})();
	
	}// const FadeIn = (p_elt, p_display = 'block') => {










const FadeOut = (p_elt) => {
	
	// ----- Init
	let cible, fadeIncr;
	cible                 = document.getElementById(p_elt);
	fadeIncr              = 0.1;
	cible.style.opacity   = 1;
	
	// ----- Traitement
	(function Fade() {
		if ((cible.style.opacity -= fadeIncr) < 0) {
			cible.style.display = 'none';
		} else {
			requestAnimationFrame(Fade);
		}// if ((cible.style.opacity -= fadeIncr) < 0) {
	})();
	
}// const FadeOut = (p_elt) => {










const GetOffsetTop = (p_elt) => {

	/**
	*
	* Calcule la position offsetTop d'un objet par rapport au haut de la page
	*
	* @param {string} p_elt		sélecteur correspondant à l'objet à animer
	* @returns {number}				offsetTop de l'objet dans la page
	*
	*/

	let cible, output;
	cible						= document.getElementById(p_elt);
	output					= 0;

	do {
	  if (!isNaN(cible.offsetTop)) {
	      output		+= cible.offsetTop;
	  }// if (!isNaN(cible.offsetTop)) {
	} while (cible = cible.offsetParent);

	return output;

}// const GetOffsetTop = (p_elt) => {





// ---------- /FONCTIONS COMMUNES
