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
	var content = item.nextElementSibling;
	
	content.style.display = "block";
	
	if (content.style.maxHeight){
		content.style.maxHeight = null;
	} else {
		content.style.maxHeight = content.scrollHeight + "px";
	} 
}

window.onscroll = function() {
	if(topButton != null) scrollFunction();
};