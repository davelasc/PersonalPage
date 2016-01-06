<?php
/*
	*Last update: January 5, 2016
	*Author: David Velasco
	*Contains: Personal web page
	*Focus: tecnical experience block
/**/
	//session_start();
	define ("ABS_PATH", $_SERVER['DOCUMENT_ROOT']);
	//$_SESSION["ABS_PATH"] = ABS_PATH;
?>

<!doctype html>
<html>
    <head>
        <title>David's Portfolio</title>
        <meta charset="utf-8" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
		
        <script type="text/javascript" src="jquery.min.js" > </script>
        <link rel="stylesheet" type="text/css" href="css/styles.css" />
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
		
    </head>
	
    <body data-spy="scroll" data-target=".navbar-collapse">
    	
    	<div id="topMenu" class="navbar navbar-default navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<!-- TO-DO: Add a home page icon if possible, check this at the end -->
					<a class="navbar-brand" href="#divAboutMe">David Velasco's Portfolio </a>
					<button type="button" class="navbar-toggle" data-toggle="collapse" 
					data-target=".navbar-collapse">
						<span class="sr-only"> Toggle Navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<!-- TO-DO: Update menu to reflect version -->
				<div class="collapse navbar-collapse">
					<ul class="nav navbar-nav" id="myMenu">
						<li><a href="#divEducation">Education</a></li>
						<li><a href="#divExperience">Experience</a></li>
						<li><a href="#divPortfolio">Portfolio</a></li>
						<li><a href="#divContactMe">Contact Me</a></li>
					</ul>
				</div>
			</div>
		</div>
    
    	<!-- TO-DO: Missing small style edits -->
    	<?php 
    		/*TO-DO: Ensure that patch works properly*/
    		include (ABS_PATH . "/private_test_html/pageDivisions/greetingBlock.php"); 
    	?>
    	
    	<!-- TO-DO: Add technical experience block -->
    	<?php
    		/*TO-DO: Currently the link does not work*/
    		//include (ABS_PATH . "/private_test_html/pageDivisions/techExpBlock.php"); 
    	?>
    	
    </body>
</html>
