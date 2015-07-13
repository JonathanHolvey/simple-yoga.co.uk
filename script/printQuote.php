<?php
	// load quotes
	$testimonials = simplexml_load_file("testimonials.xml");
	
	// print quote
	function printQuote($quote = null) {
		if (!$quote) {
			global $testimonials;
			$quote = $testimonials -> quote[rand(0,count($testimonials -> quote) - 1)];
		}
		echo "<div class=\"testimonial\"><p class=\"quote\">" . $quote . "</p><p class=\"cite\">- " . $quote["author"] . "</p></div>";
	}	
?>