<?php
header('Content-Type: text/xml');
 echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
   	$num1=$_GET['num1'];
   	$num2=$_GET['num2'];
   	$sum = $num2 + $num1;

  	echo $sum;
   
echo '</response>';


?>