$(document).ready(function() {

    var currentURL = location.pathname;
	$('.main-nav a[href="' + currentURL + '"]').addClass('active');

});
