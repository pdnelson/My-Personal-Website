// Navigation bar sticky
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

//Get the button
var topButton = document.getElementById("go-to-top");

// Get all collapsible elements
var coll = document.getElementsByClassName("collapsible") || 0;

// Add collapse function to each collapsible element
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
	expandCollapse(this);
  });
}

// Used to stick the navigation bar to the top at all times
function stickNav() {
	if (window.pageYOffset > sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

// Display the "scroll to top" button after scrolling x pixels
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topButton.style.display = "block";
	} else {
		topButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Handles expanding and collapsing of project/work items
function expandCollapse(item) {
	
	item.classList.toggle("active");
	var content = item.nextElementSibling;
	
	if (content.style.display === "block") {
		content.style.display = "none";
	} else {
		content.style.display = "block";
	}
	
	if (content.style.maxHeight){
		content.style.maxHeight = null;
	} else {
		content.style.maxHeight = content.scrollHeight + "px";
	} 
}

window.onscroll = function() {
	stickNav();
	if(topButton != null) scrollFunction();
};


