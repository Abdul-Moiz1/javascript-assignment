/* question 1: Write a program that takes two user inputs for first and last 
name using prompt and merge them in a new variable titled 
fullName. Greet the user using his full name. */

// var firstname = prompt("Enter you First Name: ");
// var lastname = prompt("Enter you Last Name: ");
// alert(`${firstname} ${lastname}`)





/* question 2: Write a program to take a user input about his favorite mobile 
phone model. Find and display the length of user input in your 
browser. */

// var user = prompt("Enter you Favourite Mobile Phone Model: ");
// var userlength = user.length
// alert(userlength)







/* question 3:  Write a program to find the index of letter “n” in the word 
“Pakistani” and display the result in your browser. */

// var string = "pakistani"
// var find = string.indexOf("n")
// document.write(`String: ${string} <br> Find: ${find}`)






/* question 4: Write a program to find the last index of letter “l” in the word 
“Hello World” and display the result in your browser. */

// var string  = "hello world"
// var find = string.lastIndexOf("l")
// alert(`String: ${string} \n Find: ${find}`)







/* question 5: Write a program to find the character at 3rd index in the word 
“Pakistani” and display the result in your browser. */

// var string = "pakistani"
// var find = string.charAt(3)
// alert(`String: ${string} \n FInd: ${find}`)








/* question 6: Repeat Q1 using string concat() method. */

















/* question 7: Write a program to replace the “Hyder” to “Islam” in the word 
“Hyderabad” and display the result in your browser. */

// var string = "hydrabad"
// var replace = string.replace( "hydra", "islama")
// alert(`Before: ${string} \n After: ${replace}`)










/* question 8: . Write a program to replace all occurrences of “and” in the 
string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”; */

// var  message = "Israr and moiz are best friend, they play cricket and fottball are together."
// var replace = message.replaceAll("and", "&")
// alert(`Before: ${message} \n After: ${replace}`)








/* question 9: . Write a program that converts a string “472” to a number 472.
Display the values & types in your browser. */

// var a = "472"
// var b = 472
// var typeof_a = typeof a
// var typeof_b = typeof b
// alert(`String: ${a} \n Type: ${typeof_a} \n\n Number: ${b} \n Type: ${typeof_b}`)








/* question 10: Write a program that take a URL as user input in the 
following format: (www.facebook.com / www.yahoo.com ). 
Extract the domain name & show in your browser. */


















/* question 11: Write a program that takes user input. Convert and show the 
input in capital letters. */

// var user = prompt("Enter your name");
// var convert = user.toUpperCase()
// alert(convert)







/* question 12: Write a program that takes user input. Convert and show the 
input in small letters. */

// var user = prompt("Enter any variables: ")
// var convert = user.toLowerCase()
// alert(convert) 







/*question 13: Write a program that takes user input. Convert and show the 
input in title case. */

// var user = prompt("enter any word: ")
// var firstletter = user.toUpperCase().slice(0,1)
// var otherwords = user.toLowerCase().slice(1)
// var titlecase = firstletter + otherwords
// alert(titlecase)

// for sentence 

// var user = prompt(`Enter any sentence: `);
// var word = user.toLowerCase().split(" ");
// for(i = 0; i < word.length; i++){
//     word[i] = word[i][0].toUpperCase() + word[i].slice(1);

// }
// var titlecase = word.join(" ");
// alert(titlecase)








/* question 14: Write a program that converts the variable num to string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser. */

















/* question 15: Write a program to display the value of x in your browser if a=”3” 
and b=”3”? */

// var a = "3"
// var b = "3"
// var merge = a + b
// alert(merge)






/* question 16: Write a program to display the value of y in your browser if a=”3” 
and b=”3”? */

// var a = "3"
// var b = "3"
// var merge = a - b
// alert(merge)





/* question 17: Write a program to take user input and store username in a 
variable. If the username contains any special symbol among 
[@ . , !], prompt the user to enter a valid username. For 
character codes of [@ . , !], refer to ASCII table at the end of 
this document. */

// var user = prompt("Enter your username: ");
// var specialcharacter = ["!", "@", "$", "%", "*", ",", ".", "&", "'"];

// for(i = 0; i < user.length; i++){
//     for(j = 0; j< specialcharacter.length; j++){
//         if(user[i] === specialcharacter[j]){
//             alert("your username is not valid please don't use this special characters: (@.,!)")
//             var user = prompt("Enter valid username: ")
//             i = -1
//             break
//         }
//     }
// }

// alert("valid username: " + user)










/* question 18: You have an array
 A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
 Write a program to enable “search by user input” in an array. 
 After searching, prompt the user whether the given item is 
 found in the list or not. 
 Note: Perform case insensitive search. Whether the user enters 
 cookie, Cookie, COOKIE or coOkIE, program should inform 
 about its availability. Example:  */

// var item = ["cake", "biryani", "burger", "roll", "sandwish", "rabri"];
// var user = prompt("Enter your item: ");
// var found = false;
// var searchitem = user.toLowerCase();

// for(i = 0; i < item.length; i++){
//     if(searchitem == item[i]){
//         found = true
//         break
//     }
// }

// if(found){
//     alert(`Yes! ${searchitem} is available in our bakkery`)
// }

// else{
//     alert(`Sorry! ${searchitem} is not available`)
// }


/* question 19: Write a program to take two input strings. Using string 
comparison, tell which string is greater than other or if they 
both are equal. */

// var string1 = prompt("Enter first string: ")
// var string2 = prompt("Enter second string: ")

// if(string1 == string2){
//     alert("Both strings are Equal")
// }

// else if(string1 > string2){
//     alert(`${string1} is greater than ${string2}`)
// }

// else{
//     alert(`${string1} less than ${string2}`)
// }







/* question 20: Write a program to take password as an input from user. The 
password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements, 
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII 
table at the end of this document. */

// var password = prompt("Enter you password: ")
// var hasalphabet = false;
// var hasnumber = false;

// if(password.length < 6){
//     alert("password must be atleast 6 a long")

// }
// else if(!isNaN(password[0])){
//     alert("passowrd should not start with a number")
// }

// else{
//     for(i = 0; i < password.length; i++){

//         var char = password[i];

//         if(isNaN((char))){
//             hasalphabet = true
//         }

//         if(!isNaN(char)){
//             hasnumber = true
//         }     

//     }
// }

// if(hasalphabet && hasnumber){
//     alert(`valid password: ${password}`)
// }
// else{
//     alert("password must contain alphabet or number")
// }







/* question 21: Write a program to convert the following string to an array 
using string split method.
 var university = “University of Karachi”;
Display the elements of array in your browser. */

// var string = "university of karachi"
// var arr = string.split("")

// for(i = 0; i < arr.length; i++){
//     document.write(arr[i] + "<br>")
// }



/*question 22: Write a program to display the last character of a user input. */

var user = prompt("Enter any words: ")
var lastchar = user[user.length -1]
alert(lastchar)