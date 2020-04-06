
/* Solution for excercise 1

document.write("Hello again!");
alert("Hello, welcome to the world of programming!");
console.log("It worked!");
var question1 = "What is your ";
var question2 = "name";
var question = question1 + question2 + "?";
var  myName = prompt(question);
var question3 = prompt("age/address?");
var myDetails = question3;
document.write("\r\nHello there " + myName); 
document.write("\tYou are " + myDetails + " years young!");

*/

// Solution for exercise from section 2, Arithmetic operators

/*
alert("Hello there user, let's do some magic with numbers!");
alert("Please enter a number");
var numOne = parseInt(prompt("Enter a number", ""));
var numTwo = parseInt(prompt("Enter another number",""));
var total = (numOne + numTwo);
alert("Your total is " + total);
*/

// Solution two for excercise from section 2, Arithmetic operators

/*
alert("Hello there user, let's do some magic with numbers!");
alert("Please enter your age");
var numOne = parseInt(prompt("Enter your age:", ""));
alert(typeof(numOne) == "number")
{ numOne++;}
alert("You will be " + numOne + " next year!");
*/

// Solution for excercise using ternary operator and assignment operator from section 2

alert("Hello there user, Please enter a number");
var a = parseInt(prompt("Please enter a number"));
var b = parseInt(prompt("Please enter another number"));

/*
if (a && b !== 'NaN')
{
    var myTernary = (a > b) ? "The first number is greater" : "The second number is greater"
    alert(myTernary);
}
else
{
    alert("Input only numbers");
}
*/
 b++;
console.log( (a==b) ? "True" : "False");
console.log( (a%2 == 0)? a + " is even" : a + " is odd");

