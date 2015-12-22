<?php
	
	$subject=$_GET['inputSubject'] != "" ? $_GET['inputSubject'] : "Possible job offer!";
	$body=$_GET['inputBody'];
	$header="from:".$_GET['inputEmail'];
	
	//echo "Subject: $subject Body: $body Header: $header";
	
	echo mail("velascos.davida@gmail.com", $subject, $body, $header);
	
?>