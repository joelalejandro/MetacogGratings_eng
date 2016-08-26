<?php	


$link = mysql_connect('localhost','pablo','tijuana') or 
	die("cannot connect"); 
mysql_select_db("GenMetacog",$link) or 
	die("cannot select DB");



$var1 = $_POST["Code"]; 
$var2 = $_POST["Name"]; 
$var3 = $_POST["Gender"]; 
$var4 = $_POST["Age"]; 
$var5 = $_POST["System"]; 
$var6 = $_POST["Mobile"]; 
$var7 = $_POST["Input_type"]; 
$var8 = $_POST["Screen_width"]; 
$var9 = $_POST["Screen_height"]; 

$var1 = mysql_real_escape_string($var1);
$var2 = mysql_real_escape_string($var2);
$var3 = mysql_real_escape_string($var3);
$var4 = mysql_real_escape_string($var4); 
$var5 = mysql_real_escape_string($var5);
$var6 = mysql_real_escape_string($var6);
$var7 = mysql_real_escape_string($var7); 
$var8 = mysql_real_escape_string($var8); 
$var9 = mysql_real_escape_string($var9); 

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
 
$sql = "INSERT INTO SubjectData (Code, Name, Gender, Age, System, Mobile, Input_type, Screen_width, Screen_height) VALUES ('$var1', '$var2', '$var3', '$var4', '$var5', '$var6', '$var7', '$var8', '$var9')";	
$table = mysql_query($sql) or 
	die ("could not save data");            
?> 

