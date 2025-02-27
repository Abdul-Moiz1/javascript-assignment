/* question 1: Write a program that takes a positive integer from user & 
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

// var user = +prompt("Enter positive number: ")
// if(user > 0){
//     document.write(`<h2>Number: ${user} </h2>`)
//     document.write(`<h2>Round of Number: ${Math.round(user)} </h2>`)
//     document.write(`<h2>Floor of Number: ${Math.floor(user)} </h2>`)
//     document.write(`<h2>Ceil of Number: ${Math.ceil(user)} </h2>`)
// }

// else{
//     alert(`Please enter positive number`)
// }





/* question 2: Write a program that takes a negative integer from user & 
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number  */

// var user = +prompt(`Enter negative number: `)
// if(user < 0){
//     document.write(`<h2>Number: ${user} </h2> `)
//     document.write(`<h2>Round Off Number: ${Math.round(user)} </h2> `)
//     document.write(`<h2>Floor of Number: ${Math.floor(user)} </h2> `)
//     document.write(`<h2>Ceil of Number: ${Math.ceil(user)} </h2> `)
// }

// else{
//     alert(`Please enter negative number`)
// }





/* question 3: Write a program that takes a positive floating point number 
from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number  */

// var user = +prompt(`Enter Floating number: `)
// if(user > 0){
//     document.write(`<h2>Number: ${user} </h2> `)
//     document.write(`<h2>Round Off Number: ${Math.round(user)} </h2> `)
//     document.write(`<h2>Floor of Number: ${Math.floor(user)} </h2> `)
//     document.write(`<h2>Ceil of Number: ${Math.ceil(user)} </h2> `)
// }

// else{
//     alert(`Please enter a number`)
// }







/* question 4: Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

// var user = +prompt(`Enter negative Floating number: `)
// if(user < 0){
//     document.write(`<h2>Number: ${user} </h2> `)
//     document.write(`<h2>Round Off Number: ${Math.round(user)} </h2> `)
//     document.write(`<h2>Floor of Number: ${Math.floor(user)} </h2> `)
//     document.write(`<h2>Ceil of Number: ${Math.ceil(user)} </h2> `)
// }

// else{
//     alert(`Please enter negative number`)
// }






/* question 5: Write a program that displays the absolute value of a number. 
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

// var num = +prompt("Enter number: ")
// var absolutenumber = Math.abs(num)
// alert(`The absolute number ${num} is ${absolutenumber}`)






/* question 6: Write a program that simulates a dice using random() method 
of JS Math class. Display the value of dice in your browser */

// var dice = Math.floor(Math.random() * 7)
// alert(`Random dice value: ${dice}`)





/* question 7: Write a program that simulates a coin toss using random() 
method of JS Math class. Display the value of coin in your 
browser. */

// var random = Math.floor(Math.random() * 2);
// if(random === 0){
//     alert("Heads")

// }

// else{
//     alert("Tails")
// }





/* question 8: Write a program that shows a random number between 1 and 
100 in your browser. */

// var random = Math.floor(Math.random() * 101);
// alert(random)




/* question 9: Write a program that asks the user about his weight. Parse the 
user input and display his weight in your browser. Possible user 
inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms */

// var user = prompt("Entter you Weight: ")
// var weight = parseFloat(user)
// alert(`Your weight is ${weight} kg`)





/* question 10: Write a program that stores a random secret number from 1 
to 10 in a variable. Ask the user to input a number between 1 
and 10. If the user input equals the secret number, congratulate 
the user. */

// var secret = Math.floor(Math.random() * 11);
// var chance = 3;

// while(chance > 0){

//     var userguess = +prompt(`Guess the Number between 0 to 10 you have ${chance} chances: `);

//     if(secret == userguess){
//         alert("Congratulations! you win the game")
//         break
//     }
    
//     else{
//         chance--;

//         if(chance == 0){
//             alert("Sorry you lose the match")
//         }

//         else{
//             alert("try again")
//         }


//     }

// }




/* question 11: Write a program that displays current date and time in your 
browser. */

// var date = new Date()
// alert(date)



/* question 12: Write a program that alerts the current month in words. For 
example December. */

// var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "novmber", "december"  ]
// var month = new Date().getMonth()
// alert(months[month])



/* question 13: Write a program that alerts the first 3 letters of the current 
day, for example if today is Sunday then alert will show Sun. */


// var  days = ["Sunday", "Monday", "Tuesday", " Wednesday", "Thursday", "Friday", "Saturday"]
// var date = new Date().getDay()
// alert(`Today is ${days[date]}`)


/* question 14: Write a program that displays a message “It’s Fun day” if its 
Saturday or Sunday today. */

// var today = new Date().getDay()
// if(today == 0 || today == 6){
//     alert("It's Funday")
// }

// else{
//     alert("It's a  normal day")
// }



/* question 15: Write a program that shows the message “First fifteen days of the 
month” if the date is less than 16th of the month else shows “Last 
days of the month”. */

// var date = new Date().getDate()
// if(date < 16){
//     alert("First fifiteen days of the monnth")
// }
// else{
//     alert("last day of the months")
// }





/* question 16: Write a program that determines the minutes since midnight, Jan. 
1, 1970 and assigns it to a variable that hasn't been declared 
beforehand. Use any variable you like to represent the Date object. */

// var currentDate = new Date()
// var midnightsec = new Date().getTime()
// var midnightmin = new Date().getTime() / (1000 * 60)

// alert(`current Date: ${currentDate} \n Midnight Sec: ${Math.floor(midnightsec)} \n Midnight Min: ${Math.floor(midnightmin)}`)




/* question 17: Write a program that tests whether it's before noon and alert “Its 
AM” else “its PM”. */

// var hours = new Date().getHours()
// var min = new Date().getMinutes()
// if(hours < 12){
//     alert(`${hours} : ${min} AM`)
// }

// else{
//     alert(`${hours}:${min} PM`)
// }



/* question 18: Write a program that creates a Date object for the last day of the 
last month of 2020 and assigns it to variable named laterDate  */

// var laterdate = new Date("august 23, 2020")
// alert(laterdate)



/* question 19: Create a date object of the starting date of this Ramadan and alert 
the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015 */

// var past = new Date("march 11, 2024").getTime();
// var present = new Date().getTime();
// var difference = present - past
// var days = difference / (1000 * 60 * 60 * 24);
// alert(`${Math.floor(days)} days have passed since 1st ramadan 2024 `)






/* question 20: Write a program that displays in your browser the seconds that 
elapsed between the reference date and the beginning of 2015. */

// var currentdate = new Date()
// var previousdate = new Date("11 march, 2024")
// var different = currentdate - previousdate
// var sec = different / (1000)
// alert(`${Math.floor(sec)} seconds has passed since 11 march 2024`)





/* question 21: Create a Date object for the current date and time. Extract the 
hours, reset the date object an hour ahead and finally display the 
date object in your browser. */

// var currentDate = new Date()
// var currentDate1 = new Date()
// var extracthours = currentDate1.getHours()
// currentDate1.setHours(extracthours + 1)
// alert(`current date: ${currentDate} \n updated hours: ${currentDate1}`)




/* question 22: Write a program that creates a date object and show the date 
in an alert box that is reset to 100 years back? */

// var currentDate = new Date() 
// alert(`Current Date ${currentDate}`)

// currentDate.setFullYear(currentDate.getFullYear() - 100)
// alert(`Previous 100 days: ${currentDate}`)





/* question 23: Write a program to ask the user about his age. Calculate and 
show his birth year in your browser */

var currentDate = new Date().getFullYear()
var userDate = +prompt("Enter your age: ")
var Birthyear = currentDate - userDate
alert(`your birth year: ${Birthyear}`)