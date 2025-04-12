/* question 1: Write a function that displays current date & time in your 
browser. */

// function currentdate(){

//     setInterval(() => {
//         var now = new Date();
//         alert(now)
//     } )   
// }



/* question 2: Write a function that takes first & last name and then it 
greets the user using his full name. */

// function fullname(){


//     var firstname = document.getElementById("firstname").value
//     var lastname = document.getElementById("lastname").value

//     var fullname = `${firstname} ${lastname}`
//     alert(`hello ${fullname}`)

// }


/* question 3: Write a function that adds two numbers (input by user) 
and returns the sum of two numbers. */

// function sum(){
//     var firstnumber = +document.getElementById("firstnumber").value
//     var lastnumber = +document.getElementById("lastnumber").value
//     var getsum = firstnumber + lastnumber
//     alert(getsum)
// }


// question 4
// function calculator(operator){
//     var firstnumber = +document.getElementById("firstnumber").value;
//     var lastnumber = +document.getElementById("lastnumber").value;
//     var result;

//     if(operator === "+"){
//         result = firstnumber + lastnumber
//     }

//     else if(operator === "-"){
//         result = firstnumber - lastnumber
//     }

//     else if(operator === "/"){
//         result = firstnumber / lastnumber
//     }

//     else if(operator === "*"){
//         result = firstnumber * lastnumber
//     }

//     alert(result)
// }


/* question 5: Write a function that squares its argument */
// function findsquare(){
//     var num = +document.getElementById("num").value
//     var square = num * num
//     document.getElementById("result").innerHTML = `Square of ${num} is ${square}`
// }



/* quesion 6: Write a function that computes factorial of a number. */
// function findfactorial(){
//     var number = +document.getElementById("num").value;
//     factorial = 1;

//     if(number === 0){
//         document.getElementById("result").innerHTML = "please do not enter less than 0 number"
//         return
//     }

//     for(i = 1; i<= number; i++){
//         factorial *= i
    
//     }
//     document.getElementById("result").innerHTML = factorial
// }


/* question 7: Write a function that take start and end number as inputs 
& display counting in your browser. */
// function counting(){
//     var getstartnumber = document.getElementById("startnumber").value;
//     var getendnumber = document.getElementById("endnumber").value;    
//     var result = "";

//     for(i = getstartnumber; i <= getendnumber; i++){
//         result += i + "<br>"
//     }
//     document.getElementById("result").innerHTML = result
// }




/* question 8: Write a nested function that computes hypotenuse of a 
right angle triangle. 
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare() */









/*question 9: Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables */

// as value 
// function rectangular(width, height){
//     return width * height
// }

// console.log(rectangular(10, 10))


// as variable
// function rectangular(width, height){
//     return width, height
// }

// var width = 10
// var height = 10

// console.log(rectangular(width, height))





/* question 10: Write a JavaScript function that checks whether a passed 
string is palindrome or not? */
// function palindrome(){
//     var getinp = document.getElementById("inp").value;
//     var reverse = "";

//     for(i = getinp.length - 1; i >= 0; i-- ){
//         reverse += getinp[i]
//     }

//     if(getinp === reverse){
//         document.getElementById("result").innerHTML = "It's Palindrome"
//     }

//     else{
//         document.getElementById("result").innerHTML = "Not Palindrome"
//     }

// }



/* question 11: Write a JavaScript function that accepts a string as a 
parameter and converts the first letter of each word of the 
string in upper case. 
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox' */
// function capitalize(){
//     var getinp = document.getElementById("inp").value
//      var getcapitalize = getinp.split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ")


//     console.log(getcapitalize)
// }




question 12:  






















// function capitalizeWords(str) {
//     return str.split(' ') 
//               .map(word => word.charAt(0).toUpperCase() + word.slice(1))  
//               .join(' ');  
// }

// let example = 'the quick brown fox';
// console.log(capitalizeWords(example)); 
