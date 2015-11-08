<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Simple Yoga - Testimonials</title>
	<meta http-equiv="generator" content="Notepad++" />
	<meta name="created" content="May 2011" />
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="author" content="Jonathan Holvey" />
	
	<?php include("resources.php"); ?>
	<style type="text/css">
		#testimonialsLink {
			color:#2E5963 !important;
			cursor:default
		}
		.testimonial,
		#content hr {
			width: 70%;
		}
		#content hr:last-child {
			display: none;
		}
	</style>
</head>
<body>
	<?php include("header.php"); ?>
	
	<div class="content">
		<div class="title">What people think of Simple Yoga</div>
		<?php 
			foreach ($testimonials as $quote) {
				printQuote($quote);
				echo "<hr/>";
			}
		?>
	</div>
	<?php include("footer.php"); ?>
</body>
</html>