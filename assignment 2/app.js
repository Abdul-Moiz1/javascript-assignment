

                                 //Input and Conditional Statement




// question 1 
// var name;
// name = prompt("Enter your name: ")
// alert(`Hi, ${name}`)

// question 2
// var number = +prompt("Enter Number for Multiplication Table: ")

// if(isNaN(number) || number == 0){
//     number = 5;
// }

// document.write( 
//     `<h1> Table of  Multiplication ${number} </h1>`
// )

// for(i = 1; i <= 10; i++){
//     document.write(`${number} x ${i} = ${number * i} <br>`)
// }

// question 3
// var city = prompt("Enter your city name: ")
// if(city == "karachi"){
//     document.write(`City of Light`)
// }

// else if(city == "islamabad"){
//     document.write(`Burger Logg`)
// }

// else if(city == "lahor"){
//     document.write(`Dil waaley`)
// }

// else if(city == "peshawar"){
//     document.write(`Pakhtoon`)
// }

// question 4
// var gender = prompt("Gender? ")

// if(gender == "male"){
//     document.write("Good Morning Sir");
// }

// else if(gender == "female"){
//     document.write("Good morning Mam");
// }


// question 5
// var signal = prompt("Enter Signal Color: ")

// if(signal === "red"){
//     document.write("Vehicles must stop")
// }

// else if(signal === "yellow"){
//     document.write("Vehicles should get ready to move")
// }


// else if(signal === "green"){
//     document.write("Vehicles can move now")
// }

// question 6
// var age = +prompt("Enter your age: ")

// if(age >= 18){
//     document.write("Your Welcome")
// }

// else if(age <= 17){
//     document.write("Sorry you are under 18")
// }

// question 7
// var fuel = +prompt("Enter your car fuel:")

// if(fuel <= 0.55){
//     document.write("Please refel fefill the fuel in your car")
// }

// else if(fuel >= 0.56){
//     document.write("Good")
// }


// question 8
// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");    
// }
// alert show 

// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }
// alert not show

// var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// alert not show

// if (c === 13){
//  alert("condition 2 is true");
// }
// show alert

// if (++c < 14){
//  alert("condition 3 is true");
// }
// alert not show

// if(c === 14){
//  alert("condition 4 is true");
// }
// show alert 


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }
// show alert 

// if (true){
//  alert("True");
// }
// show alert 
// if (false){
//  alert("False");
// }
// alert not show

// if("car" < "cat"){
//  alert("car is smaller than cat");
// }
// show alert 


// question 9
// var name = prompt("Enter your Name:")
// var maths = +prompt("Enter your Math's Score: ")
// var physics = +prompt("Enter your Physics Score: ")
// var chemistry = +prompt("Enter your Chemistry Score: ")

// var obtained_mark = (maths + physics + chemistry)
// var percentage = (obtained_mark / 300) * 100
// var grade;

// if(percentage >= 90){
//     grade = "A One"
// }

// else if(percentage >= 80){
//     grade = "A+"
// }

// else if(percentage >= 70){
//     grade = "A"
// }

// else if(percentage >= 60){
//     grade = "B"
// }

// else if(percentage >= 50){
//     grade = "C"
// }

// else if(percentage >= 40){
//     grade = "D"
// }

// else{
//     grade = "Fail"
// }

// document.write(
//     `
//     <table border>
//     <tr>
//     <th>Student Name</th>
//     <th>Math's</th>
//     <th>Physics</th>
//     <th>Chemistry</th>
//     <th>Obtained Mark</th>
//     <th>Grade</th>
//     <th>Percentage</th>
//     </tr>

//     <tr>
//     <td> ${name} </td>
//     <td> ${maths} </td>
//     <td> ${physics} </td>
//     <td> ${chemistry} </td>
//     <td> ${obtained_mark} </td>
//     <td> ${grade} </td>
//     <td> ${percentage.toFixed(2)} </td>
//     </tr>


//     </table>

//     `
// )

// question 10
// var nameofitem1 = prompt("Enter Name of Item 1: " )
// var priceofitem1 = +prompt(`Enter Price of ${nameofitem1}: `)
// var quantityofitem1 = +prompt(`Enter Quantity of ${nameofitem1}: `)
// var nameofitem2 = prompt(`Enter Name of Item 2: `)
// var priceofitem2 = +prompt(`Enter Price of ${nameofitem2}: `)
// var quantityofitem2 = +prompt(`Enter Quantity of ${nameofitem2}: `)
// var shippingcharges = +prompt("Enter Shipping Charges: ")

// var totalcost = (priceofitem1 * quantityofitem1) + (priceofitem2 * quantityofitem2) + shippingcharges
// var discount;

// if(totalcost >= 2000){
//     discount = totalcost * 0.1
//     after_discount = totalcost - discount
// }
  
// document.write(`<h1>Shopping Cart Receipt</h1>`)
// document.write(
//     `

//     Price Of ${nameofitem1} is ${priceofitem1} <br>
//     Quantity Of ${nameofitem1} is ${quantityofitem1} <br>

//     Price Of ${nameofitem2} is ${priceofitem2} <br>
//     Quantity Of ${nameofitem2} is${quantityofitem2} <br><br>

//     Shipping Charges ${shippingcharges} <br>

//    `  
  
// )

// document.write(`Total Cost of your Order is ${totalcost} PKR <br>`)
// document.write(`After Discount Price is ${after_discount} PKR`)

// question 11
// var secretnumber = 3
// var usernumber = +prompt('Guess the Number?')

// if(usernumber === secretnumber){
//     document.write(`Bingoo! You Are Win`)
// }

// else if(usernumber === 2){
//     document.write(`Close enough to the Secret number`)

// }


// else if(usernumber === 4){
//     document.write(`Close enough to the Secret number`)

// }

// else{
//     document.write("Bad! You Are Lose")
// }

// question 12
// var number = +prompt("Enter a Number to check if it's divisible by 3: ")

// if(number % 3 === 0){
//     document.write("The is divisible by 3")
// }

// else{
//     document.write("The nunber is not divisible by 3")
// }

// question 13
// team1   = prompt("Enter Team A Name: ")
// score_of_team1 = +prompt("Enter Team A score: ")

// team2   = prompt("Enter Team B Name: ")
// score_of_team2 = +prompt("Enter Team B score: ")

// if(score_of_team1 > score_of_team2){
//     document.write(`Congratulation ${team1} Win The Match and their score is ${score_of_team1}`)
// }

// else if(score_of_team1 < score_of_team2){
//     document.write(`Congratulation ${team2} Win The Match and their score is ${score_of_team2}`)
// }

// else if(score_of_team1 == score_of_team2){
//     document.write(`Match Draw`)
// }

// question 14
// var string = prompt("Enter a String: ")
// var number = +prompt("Enter a Number: ")
// var boolean = prompt("Enter a Boolean: ") === "true"

// if(typeof(string) == "string"){
//     document.write(`${string} is a ${typeof(string)} <br>`)
// }


// if(typeof(number) == "number"){
//     document.write(`${number} is a ${typeof(number)} <br>`)
// }


// if(typeof(boolean) == "boolean"){
//     document.write(`${boolean} is a ${typeof(boolean)}`)
// }

// question 15
// var number = +prompt("Enter a Number: ")

// if((number % 2) === 0){
//     document.write(`${number} is a Even Number.`)
// }

// else{
//     document.write(`${number} is a Odd Number.`)
// }

// question 16
// var temp = +prompt("Enter Temprature Of karachi: ");

// document.write(`<h2>Today Weather of Karachi.</h2>`)
// if(temp >= 40){
//     document.write(`It is too Hot outside`);
// }

// else if(temp >= 30){
//     document.write(`The Weather Today is Normal.`);
// }

// else if(temp >= 20){
//     document.write(`Today's Weather  is Cool.`);
// }

// else if(temp >= 10){
//     document.write(`OMG! Today's Weather is So Cool.`);
// }

// else if(temp <= 10){
//     document.write(`OMG! Today's Weather is Very Very  Cool.`);
// }

// question 17
// var firstnumber = +prompt("Enter First Number: ")
// var secondnumber = +prompt("Enter Second Number: ")
// var operation = prompt(`Enter The Operation: (+, -, *, /, % )  `)
// var result;

// if(operation === "+"){
//     result = firstnumber + secondnumber
// }

// else if(operation === "-"){
//     result = firstnumber - secondnumber
// }

// else if(operation === "*"){
//     result = firstnumber * secondnumber
// }

// else if(operation === "/"){
//     if(secondnumber === "0"){
//         result = (`0 is not defined in division.`)
//     }

//     else{
//         result = firstnumber / secondnumber
//     }
// }

// else if(operation === "%"){
//     result = firstnumber % secondnumber
// }

// else{
//     alert(`invalid values`)
// }

// alert(`The Result is ${result}`)

// question 18
// var day = prompt(`Enter Day Name: `);

// if(day == "monday" ){
//     alert("It's a Week Day");
// }

// else if(day == "tuesday" ){
//     alert("It's a Week Day");
// }

// else if(day == "wednesday" ){
//     alert("It's a Week Day");
// }

// else if(day == "thursday" ){
//     alert("It's a Week Day");
// }

// else if(day == "friday" ){
//     alert("It's a Week Day");
// }

// else if(day == "saturday"){
//     alert("It's a Weekened");
// }

// else if(day == "sunday"){
//     alert("Yay! It's a Holiday");
// }

// else{
//     alert("it's not a Day");
// }

// question 19
// var score = +prompt(`Enter Your Math's Score: `)

// if(score >= 50){
//     alert(`You are Passed!`)
// }

// else{
//     alert(`Try again!`)
// }

// question 20
// var firstnumber = +prompt(`Enter First Number: `)
// var secondtnumber = +prompt(`Enter Second Number: `)

// if(firstnumber > secondtnumber ){
//     alert(`The Gratest Number of ${firstnumber} and ${secondtnumber} is ${firstnumber}`)
// }

// else if(firstnumber < secondtnumber ){
//     alert(`The Gratest Number of ${firstnumber} and ${secondtnumber} is ${secondtnumber}`)
// }

// else{
//     alert(`Both Number are same ${firstnumber} = ${secondtnumber}`)
// }

// question 21
// var lang_code = prompt(`Enter The Language Code (e,g: en, es, de)`)

// if(lang_code == "en"){
//     alert(`Hello World!`)
// }

// else if(lang_code == "es"){
//     alert(`Hola Mundo!`)
// }

// else if(lang_code == "de"){
//     alert(`Hallo walt!`)
// }

// else{
//     alert(`Hello World! (Default Language Code English)`)
// }

// question 22
// var number = +prompt( `Enter Number: `)

// if(number > 0){
//     alert(`The Number ${number} is Positive`)
// }

// else if(number < 0){
//     alert(`The Number ${number} is Negative`)
// }

// else{
//     alert(`The Number Is Zero`)
// }

// question 23
// var noun = prompt( `Enter a Noun (eg: cat, dog `)
// var number = +prompt( `Enter a Number: `)

// if(number === 1){
//     alert(`${number} ${noun}`)
// }

// else if(number > 1){
//     alert(`${number} ${noun}s`)
// }



                        //  IF…ELSE & ELSE IF STATEMENTS, TESTING SET OF CONDITIONS & SWITCH STATEMENT

// question 1
// var number = +prompt(`Enter a Number: `);

// if(number % 3 === 0){
//     alert(`The Number ${number} is Divisible By 3`)
// }

// else{
//     alert`The Number ${number} is not Divisible by 3`
// }

// question 2
// var number = +prompt(`Enter The Number: `);

// if(number % 2 === 0){
//     alert(`The Number ${number} is even`)
// }

// else{
//     alert(`The Number ${number} is  Odd`)
// }


// question 3
// var age = +prompt(`Enter Your Age: `)

// if(age > "18"){
//     alert(`Old Enough`)
// }

// else{
//     alert(`Too Young`)
// }

// question 4
// var myname = "Moiz";
// var username = prompt(`What's your Name? `);

// if(myname == username){
//     alert(`Hello ${username} it's Great to see you`)
// }

// question 5
// var number = +prompt(`Enter a Number: `);
// var reminder = number % 3;

// switch(reminder){
//     case 0:
//     alert(`The Number ${number} is Divisible by 3`)
    
//     default:
//         alert(`The Number ${number} is not Divisible by 3`)
// }
