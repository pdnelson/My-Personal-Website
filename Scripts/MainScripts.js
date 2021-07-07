//Get the button
var topButton = document.getElementById("go-to-top");

// Get all collapsible elements
var collapsibleItems = document.getElementsByClassName("collapsible") || 0;

// Add collapse function to each collapsible element
for (var i = 0; i < collapsibleItems.length; i++) {
  collapsibleItems[i].addEventListener("click", function() {
	expandCollapse(this, true);
  });
}

// Expand/collapse mobile categories on projects
var projCategoriesExpanded = false;
document.getElementById("proj-categories-mobile-button").addEventListener("click", function() {
	expandCollapse(this, false);
	if(!projCategoriesExpanded) {
		projCategoriesExpanded = true;
		document.getElementById("proj-categories-mobile-button").innerHTML = "Hide Categories &#10506;";
	}
	else {
		projCategoriesExpanded = false;
		document.getElementById("proj-categories-mobile-button").innerHTML = "Show Categories &#10507;";
	}
})

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
function expandCollapse(item, nextElement) {
	var content;
	if(nextElement) content = item.nextElementSibling;
	else content = item.previousElementSibling;
	
	content.style.display = "block";
	
	if (content.style.maxHeight){
		content.style.maxHeight = null;
	} else {
		content.style.maxHeight = content.scrollHeight + "px";
	} 
}

function collapseAllItems(items) {
	for (var i = 0; i < items.length; i++) {
		items[i].nextElementSibling.style.maxHeight = null;
	}
}

window.onscroll = function() {
	if(topButton != null) scrollFunction();
};

// If the window is resized, collapse everything that is collapsible
window.onresize = function() {
	collapseAllItems(collapsibleItems);
	
	// Must collapse the project categories separately
	if(projCategoriesExpanded) document.getElementById("proj-categories-mobile-button").click();
};