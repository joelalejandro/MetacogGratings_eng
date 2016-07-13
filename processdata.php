<?php	
$link = mysql_connect('localhost','pablo','tijuana') or 
	die("cannot connect"); 
mysql_select_db("GenMetacog",$link) or 
	die("cannot select DB");


$var1 = $_POST["Code"]; 
$var2 = $_POST["Name"]; 
$var3 = $_POST["Trial"];
$var4 = $_POST["Side"]; 
$var5 = $_POST["Response"]; 
$var6 = $_POST["ReactionTime"]; 
$var7 = $_POST["Correct"]; 
$var8 = $_POST["Confidence"]; 
$var9 = $_POST["ReactionTimeConfidence"]; 
$var10 = $_POST["Contrast"]; 
$var11 = $_POST["StaircaseNumber"]; 
$var12 = $_POST["Orientation"]; 
$var13 = $_POST["Direction"]; 
$var14 = $_POST["Numreversals"]; 
$var15 = $_POST["ThetaRad"]; 
$var16 = $_POST["PhaseRad"]; 
 
 
$var1 = mysql_real_escape_string($var1);
$var2 = mysql_real_escape_string($var2);
$var3 = mysql_real_escape_string($var3);
$var4 = mysql_real_escape_string($var4); 
$var5 = mysql_real_escape_string($var5); 
$var6 = mysql_real_escape_string($var6); 
$var7 = mysql_real_escape_string($var7); 
$var8 = mysql_real_escape_string($var8); 
$var9 = mysql_real_escape_string($var9); 
$var10 = mysql_real_escape_string($var10); 
$var11 = mysql_real_escape_string($var11); 
$var12 = mysql_real_escape_string($var12); 
$var13 = mysql_real_escape_string($var13); 
$var14 = mysql_real_escape_string($var14); 
$var15 = mysql_real_escape_string($var15); 
$var16 = mysql_real_escape_string($var16); 



// To protect MySQL injection
$var1 = stripslashes($var1);
$var2 = stripslashes($var2);
$var3 = stripslashes($var3);
$var4 = stripslashes($var4);
$var5 = stripslashes($var5);
$var6 = stripslashes($var6);
$var7 = stripslashes($var7);
$var8 = stripslashes($var8);
$var9 = stripslashes($var9);
$var10 = stripslashes($var10);
$var11 = stripslashes($var11);
$var12 = stripslashes($var12);
$var13 = stripslashes($var13);
$var14 = stripslashes($var14);
$var15 = stripslashes($var15);
$var16 = stripslashes($var16);

 
$sqll = "INSERT INTO ExpeData (Code, Name, Trial, Side, Response, ReactionTime, Correct, Confidence,
							   ReactionTimeConfidence, Contrast, StaircaseNumber, Orientation, Direction, 
							   Numreversals, ThetaRad, PhaseRad )
				VALUES ('$var1', '$var2', '$var3', '$var4', '$var5', '$var6', '$var7', '$var8', '$var9', '$var10',
				        '$var11', '$var12', '$var13', '$var14', '$var15', '$var16')";	
$table= 0;
while (!$table) 
{$table= mysql_query($sqll);}
?> 






