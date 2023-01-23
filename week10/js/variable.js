//
//differents way of variables declaratin
var name ="Ameesha";
name="Norge";

let name1 ="Bibek";
name1="Rundup";

const name2 ="Ichhya";
//name2="Silash";
var num=1;

//console run our js (note)
console.log(typeof name);
console.log(typeof name1);
console.log(typeof name2);
console.log(typeof num);

//prompt like a "scanner" in java:(note)//
let number = prompt("Enter a number:");
console.log(number);

//(only for color)
document.getElementsByClassName("paragraph")[1].style.backgroundColor="red"

//to change color, font-size, and background of html (shortcut)//
document.getElementsByClassName("paragraph")[2].style.cssText="background:blue; color:white; font-size:60px";

//for change paragraph//
document.getElementsByClassName("paragraph")[2].innerHTML="Hi this is week 10!!!";

//to select h1 by html//
document.getElementsByTagName("h1")[1].innerHTML="DOM getElementsByTagName example";