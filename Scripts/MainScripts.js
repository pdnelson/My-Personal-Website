// Navigation bar sticky
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

// Used to stick the navigation bar to the top at all times
function stickNav() {
	if (window.pageYOffset > sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

window.onscroll = function() {
	stickNav();
};