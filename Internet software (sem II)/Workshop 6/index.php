<!-- Ameesha Shah
2332937 -->

<!-- 1.	To count 5 to 15 using PHP loop. -->
 <?php
for ($x = 5; $x <= 15; $x++) {
    echo "$x <br>";
}
?>

<!-- 2.	To print “Hello World” using PHP variable. -->
<?php
$message = "Hello World";
echo $message;
?>


<!-- 3.	To check student grade based on marks. -->

<?php 

$marks = [40, 50, 60, 70, 80, 90]; 

foreach ($marks as $mark) { 

    if ($mark >= 80) { 
        echo "Grade A <br>"; 
    } 
    elseif ($mark >= 70) { 
        echo "Grade B <br>"; 
    } 
    elseif ($mark >= 60) { 
        echo "Grade C <br>"; 
    } 
    elseif ($mark >= 50) { 
        echo "Grade D <br>"; 
    } 
    elseif ($mark >= 40) { 
        echo "Grade E <br>"; 
    } 
    else { 
        echo "Grade F <br>"; 
    } 
}
?>


<!-- 4.	To find factorial of a number using loop in PHP -->

<?php

//Function to calculate factorial of a number 

function factorial($num){
    $factorial = 1; 
    for ($x=$num; $x>=1; $x--){
      $factorial = $factorial * $x;
    }
    return $factorial;
}

//Example 
$num = 5; 
echo "Factorial of $num is " . factorial($num);
?>


<!-- 5.	To create a given pattern with * using for loop -->

<?php

for($i=1; $i<=5; $i++)
{
    for($j=1; $j<=$i; $j++)
    {
        echo "*";
    }
    echo "<br>";
}
?>


<!-- 6.	$list = array( "Italy"=>"Rome", "Luxembourg"=>"Luxembourg", "Belgium"=> "Brussels", "Denmark"=>"Copenhagen", "Finland"=>"Helsinki", "France" => "Paris", "Slovakia"=>"Bratislava", "Slovenia"=>"Ljubljana", "Germany" => "Berlin", "Greece" => "Athens", "Ireland"=>"Dublin", "Netherlands"=>"Amsterdam", "Portugal"=>"Lisbon", "Spain"=>"Madrid", "Sweden"=>"Stockholm", "United Kingdom"=>"London", "Cyprus"=>"Nicosia", "Lithuania"=>"Vilnius", "Czech Republic"=>"Prague", "Estonia"=>"Tallin", "Hungary"=>"Budapest", "Latvia"=>"Riga", "Malta"=>"Valetta", "Austria" => "Vienna", "Poland"=>"Warsaw") ;
Create a PHP script which displays the capital and country name from the above array $list. Sort the list by the name of the capital. -->

<?php

$list = array( 
	"Italy"=>"Rome", 
	"Luxembourg"=>"Luxembourg", 
	"Belgium"=> "Brussels", 
	"Denmark"=>"Copenhagen", 
	"Finland"=>"Helsinki", 
	"France" => "Paris", 
	"Slovakia"=>"Bratislava", 
	"Slovenia"=>"Ljubljana", 
	"Germany" => "Berlin", 
	"Greece" => "Athens", 
	"Ireland"=>"Dublin", 
	"Netherlands"=>"Amsterdam", 
	"Portugal"=>"Lisbon", 
	"Spain"=>"Madrid", 
	"Sweden"=>"Stockholm", 
	"United Kingdom"=>"London", 
	"Cyprus"=>"Nicosia", 
	"Lithuania"=>"Vilnius", 
	"Czech Republic"=>"Prague", 
	"Estonia"=>"Tallin", 
	"Hungary"=>"Budapest", 
	"Latvia"=>"Riga", 
	"Malta"=>"Valetta", 
	"Austria" => "Vienna", 
	"Poland"=>"Warsaw"
);

ksort($list);

foreach ($list as $country => $capital) {
	echo $capital . " is the capital of " . $country . "<br>";
}

?>


<!-- 7.	Write a PHP function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or dad or noon -->

<?php 
function palindrome($str){
	$reverseStr = strrev($str);
	if($str == $reverseStr){
		echo "It is a palindrome";
	}
	else{
		echo "It is not a palindrome";
	}

}

palindrome("noon");

?>

<!-- 8.	To swap two variables
Eg: $a = 1; $b =2; Result: $a = 2; $b=1; -->

<?php 
    $a = 1;
    $b = 2;
    $temp = 0;
    
    $temp = $a;
    $a = $b;
    $b = $temp;
    
    echo "a = ".$a;
    echo " b = ".$b;
?>

<!-- 9.	To print the multiple of a given number
Example:
define(‘a’,5);
5 10 15 20 25 30 35 40 45 50 use <br> to print in each line -->

<?php

$a = 5;
for($i=1;$i<=10;$i++)
{
echo $a*$i;
echo "<br>";
}
?>

<!-- 10.	To find whether given number is Armstrong or not.
Example:
$number = 153
If ($number == 1*1*1+5*5*5+3*3*3)
Return Armstrong number
Other number: 1, 0, 371, 407 etc   -->

<?php
$number = 153;
$temp = $number;
$sum = 0;

while ($temp != 0) 
{
    $r = $temp % 10;
    $sum = $sum + ($r*$r*$r);
    $temp = $temp / 10;
}

if ($sum == $number)
    echo "Armstrong number";
else
    echo "Not an Armstrong number";








?>

