$(document).ready(function() {
	// replace hr tags with images
	$("hr").each(function() {
		$(this).replaceWith("<img src=\"images/rule.png\" alt=\"\" class=\"rule\"/>");
	});
	
	// add quote marks to quotes
	$(".quote").prepend("<span class=\"open\">&ldquo;</span>");
	$(".quote").append("<span class=\"close\">&rdquo;</span>");
});