<?php
$link = mysql_connect('localhost','pablo','tijuana') or 
	die("cannot connect"); 
mysql_select_db("GenMetacog",$link) or 
	die("cannot select DB");
?>
