function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
};

ibg();

$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

document.querySelectorAll('.img-conteiner img').forEach(img => {
	img.onclick = () => {
		document.querySelector('.pop-up').style.display = 'block';
		document.querySelector('.pop-up img').src = img.getAttribute('src');
	}
});

document.querySelector('.pop-up img').onclick = () => {
	document.querySelector('.pop-up').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
	var imageLinks = document.querySelectorAll(".footer__yelo");
 
	imageLinks.forEach(function (link) {
	  link.addEventListener("click", function (event) {
		 event.preventDefault();
	  });
	});
	$(document).ready(function(){
$('.image-popup-vertical-fit').magnificPopup({
	type: 'image',
  mainClass: 'mfp-with-zoom', 
  gallery:{
			enabled:true
		},

  zoom: {
    enabled: true, 

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    opener: function(openerElement) {

      return openerElement.is('img') ? openerElement : openerElement.find('img');
  }
}

});

});
	var menuItem = document.querySelectorAll('.menu__link')
 
	var closeMobileMenu = () => {
	  $('.menu__body').removeClass('active');
	  $('.icon-menu').removeClass('active');
	  $('body').removeClass('lock');
	}
 
	menuItem.forEach(function (item) {
	  item.addEventListener("click", closeMobileMenu);
	});
	
 });


document.addEventListener("DOMContentLoaded", function () {
	var imageLinks = document.querySelectorAll(".brands__item");

	imageLinks.forEach(function (link) {
		link.addEventListener("click", function (event) {
			event.preventDefault();
		});
	});
});


