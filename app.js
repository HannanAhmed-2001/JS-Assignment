// ASSIFNMENTS
// Chapter : 01 - ALERTS


// 1. Write a script to greet your website visitor using JS alert 
// box.
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \n Welcome to my website!");

// 2. Write a script to display following message on your web 
// page?
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \n Error! Please enter a valid password.");

// 3. Write a script to display following message on your web 
// page: (Hint : Use line break)
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \n Welcome to JS Land... \n Happy Coding!");

// 4. Write a script to display following messages in sequence:
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \n Welcome to JS Land...");
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \n Happy Coding!");

// 5. Generate the following message through browser’s 
// developer console:
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \n Hello... I can run JS through my web browser's console");

// 6. Make use of alerts in your new/existing HTML & CSS 
// project.


// 7. Practice placement of <script></script> element in 
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)



// Chapter : 02 - VARIABLES FOR STRINGS

// 1. Declare a variable called username.
var username;

// 2. Declare a variable called myName & assign to it a string 
// that represents your Full Name.
var myName = "HANNAN AHMED JUTT";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
var message;
message = "Hello World";
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \n" + message);

// 4. Write a script to save student’s bio data in JS variables and 
// show the data in alert boxes.
var studentName = "HANNAN AHMED JUTT";
var studentAge = 21;
var studentCourse = "Web & Mobile Hybrid Application Development";
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nStudent Name: " + studentName);
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nStudent Age: " + studentAge);
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nStudent Course: " + studentCourse);

// 5. Write a script to display the following alert using one JS 
// variable:
var pizzaMessage = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \n" + pizzaMessage);

// 6. Declare a variable called email and assign to it a string that 
// represents your Email Address(e.g. example@example.com). 
// Show the blow mentioned message in an alert box.(Hint: use 
// string concatenation)
var email = "h3089467@gmail.com";
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nYour email address is: " + email);

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
var book = "A smarter way to learn JavaScript";
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nI am trying to learn from the book " + book);

// 8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through JavaScript");

// 9. Store following string in a variable and show in alert and 
// browser through JS
var designMessage = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \n" + designMessage);
document.write(designMessage);

// CHAPTER : 03 - VARIABLES FOR NUMBERS

// 1. Declare a variable called age & assign to it your age. Show 
// your age in an alert box.
var age = 21;
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nI am " + age + " years old"); 

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her 
// number of visits on your web page. For example: “You have 
// visited this site N times”.
var visitCount = 14;
alert("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nYou have visited this site " + visitCount + " times");            

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 2002;
document.write("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nMy birth year is " + birthYear + "<br>Data type of my declared variable is number");

// 4. A visitor visits an online clothing store www.xyzClothing.com. Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title 
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var visitorName = "HANNAN AHMED JUTT";
var productTitle = "T-shirt(s)";
var quantity = 5;
document.write("<br>HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \n" + visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store");

// Chapter : 04 - VARIABLE NAMES: LEGAL & ILLEGAL

// 1. Declare 3 variables in one statement.
var var1, var2, var3;

// 2. Declare 5 legal & 5 illegal variable names.
// Legal variable names
var myName;
var age1;
var _total;
var $price;
var userData;
// Illegal variable names
// var 1illegalVar; // Cannot start with a number
// var illegal-Var; // Cannot contain hyphens
// var illegal Var; // Cannot contain spaces
// var illegalVar!; // Cannot contain special characters
// var illegalVar@; // Cannot contain special characters    

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
document.write("<br>HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nRules for naming JS variables <br><br>");
document.write("Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable <br>");
document.write("Variables must begin with a letter, $ or _. For example: $name, _name or name <br>");
document.write("Variable names are case sensitive <br>");
document.write("Variable names should not be JS keywords");

// CHAPTER : 05 - MATH EXPRESSIONS

// 1. Write a program that take two numbers & add them in an alert box.
var num1 = 5;
var num2 = 10;
var sum = num1 + num2;
document.write("HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nThe sum of " + num1 + " and " + num2 + " is: " + sum);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
var difference = num1 - num2;
document.write("<br>HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nThe difference of " + num1 + " and " + num2 + " is: " + difference);

var product = num1 * num2;
document.write("<br>HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nThe product of " + num1 + " and " + num2 + " is: " + product);

var quotient = num1 / num2;
document.write("<br>HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nThe quotient of " + num1 + " and " + num2 + " is: " + quotient);

var modulus = num1 % num2;
document.write("<br>HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nThe modulus of " + num1 + " and " + num2 + " is: " + modulus);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.    
var myVariable;
document.write("<br>HANNAN AHMED JUTT \n Roll No: 360749 \n Batch: 9 \nValue after variable declaration is: " + myVariable);

// c. Initialize the variable with some number.
myVariable = 5;
document.write("<br>Value after variable initialization is: " + myVariable);
// d. Increment the variable.
myVariable++;
document.write("<br>Value after increment is: " + myVariable);
// e. Add 7 to the variable.
myVariable += 7;
document.write("<br>Value after adding 7 is: " + myVariable);   
// f. Decrement the variable.
myVariable--;
document.write("<br>Value after decrement is: " + myVariable);
// g. Show the remainder after dividing the variable’s value by 3.
var remainder = myVariable % 3;
document.write("<br>The remainder after dividing the variable's value by 3 is: " + remainder);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store the cost of a ticket in a variable & calculate the cost of buying 5 tickets to a movie. Example output: “Total cost to buy 5 tickets to a movie is 3000 PKR”
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("<br>Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");

// 5. Write a script to display multiplication table of any number in your browser. E.g.:
var number = 5;
document.write("<br>Multiplication Table of " + number + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var celsiusTemp = 30;
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
document.write("<br>" + celsiusTemp + "°C is " + fahrenheitTemp + "°F");
// c. Now store a Fahrenheit temperature into a variable.
var fahrenheitTemp2 = 86;
// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
document.write("<br>" + fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
var priceItem1 = 1000;
var priceItem2 = 500;
var quantityItem1 = 2;
var quantityItem2 = 3;
var shippingCharges = 200;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("<br><h2>Shopping Cart Receipt</h2>");
document.write("Price of item 1: " + priceItem1 + " PKR<br>");
document.write("Quantity of item 1: " + quantityItem1 + "<br>");
document.write("Price of item 2: " + priceItem2 + " PKR<br>");
document.write("Quantity of item 2: " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br>");
document.write("<h3>Total Cost: " + totalCost + " PKR</h3>");


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = 500;
var marksObtained = 450;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<br>Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var usDollars = 10;
var saudiRiyals = 25;
var totalInPKR = (usDollars * 104.80) + (saudiRiyals * 28);
document.write("<br>Total Currency in Pakistani Rupees: " + totalInPKR + " PKR");

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2 Perform all calculations in a single expression.
var initialNumber = 10;
var finalResult = ((initialNumber + 5) * 10) / 2;
document.write("<br>Final Result: " + finalResult);

// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable.
var currentYear = 2024;
// b. Store their birth year in a variable.
var birthYear = 1990;
// c. Calculate their age based on the stored values.
var age = currentYear - birthYear;
// d. Output them to the screen like so: “They are NN years old”.
document.write("<br>Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are " + age + " years old");

// 12. The Geometrizer: Calculate properties of a circle, using the definitions here.
// a. Store a radius into a variable.
var radius = 5;
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
var circumference = 2 * Math.PI * radius;
document.write("<br>Radius: " + radius + "<br>");
document.write("The circumference is " + circumference);
// c. Calculate the area based on the radius, and output “The area is NN”.
var area = Math.PI * Math.pow(radius, 2);
document.write("<br>The area is " + area);

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable
var favoriteSnack = "Chocolate Chip Cookies";
// b. Store your current age into a variable.
var currentAge = 21;
// c. Store a maximum age into a variable.
var maxAge = 80;
// d. Store an estimated amount per day (as a number).
var amountPerDay = 3;
// e. Calculate how many would you eat total for the rest of your life.
var yearsRemaining = maxAge - currentAge;
var totalSnacks = yearsRemaining * 365 * amountPerDay;
// f. Output the result to the screen like so: “You will need NN to last you until the ripe old age of X”.
document.write("<br>Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Maximum Age: " + maxAge + "<br>");
document.write("Estimated Amount Per Day: " + amountPerDay + "<br>");
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);
