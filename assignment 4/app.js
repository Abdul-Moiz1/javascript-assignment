// question 1
// for(i = 0; i <= 5; i++){
//     document.write("hellow world <br>")
// }

// question 2
// for(i = 1; i <= 10; i++){
//     document.write(i+"<br>")
// }

// question 3
// var user = +prompt("Enter any Number: ")

// for(i = 1; i <= 10; i++){
//     document.write(
//         `
//         ${user} x ${i} = ${i * user} <br> 
//         `
//     )
// }

// question 4
// var mobile = ["nokia", "apple", "samasung", "huwawi", "sony"]

// for(i = 0; i < mobile.length; i++){
//     document.write(`${mobile[i]} <br>`)
// }

// question 5
// var fruits = ["apple", "banana", "strawberry", "orange"]

// for(i = 0; i < fruits.length; i++){
//     document.write(`${fruits[i]} <br>`)
// }

// question 6
// var numberofitem = +prompt(`Enter number of item: `)
// var items = []

// for(i = 1; i <= numberofitem; i++){
//     var item = prompt(`Enter item ${i}:`) + "<br>"
//     items.push(item)
// }

// document.write(items)

// question 7
// document.write(`<h3>Counting</h3>`)
// for(var i = 1; i <= 15; i++){
//     document.write(`${i}, `)
// }

// document.write(`<h3>Reverse Counting</h3>`)
// for(var i = 15; i >=1; i--){
//     document.write(`${i}, `)
// }

// document.write(`<h3>Even</h3>`)
// for(var  i = 0; i <= 15; i += 2){
//     document.write(`${i}, `)
// }

// document.write(`<h3>Odd</h3>`)
// for(var  i = 1; i <= 15; i += 2){
//     document.write(`${i}, `)
// }

// document.write(`<h3>Series</h3>`)
// for(var  i = 0; i <= 20; i += 2){
//     document.write(`${i}K `)
// }

// question 8
// var list = ["apple", "banana", "cake", "jelly", "shake"]
// var userinput = prompt(`Enter item name who you want: `).toLowerCase()

// if(list.includes(userinput)){
//     alert(`${userinput} is available in our bakery`)
// }

// else{
//     alert(`Sorry, ${userinput} is not available in our bakery`)
// }

// question 9
// var A = [24, 53, 78, 91, 12];

// var smallest = A[0]; 
// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i]; 
//   }
// }

// alert(`The smallest number is: ${smallest}`);

// question 10
// var A = [24, 53, 78, 91, 12];

// var largest = A[0]; 
// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i]; 
//   }
// }

// alert(`The Largest number is: ${largest}`);



// question 11
// var A = [24, 53, 78, 91, 12];

// var largest = A[0]; 
// var smallest = A[0]; 

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
//   if (A[i] < smallest) {
//     smallest = A[i]; 
//   }
// }

// alert("The Largest number is: " + largest + "\nThe Smallest number is: " + smallest);



// question 12
// for (let i = 5; i <= 100; i += 5) {
//   console.log(i);
// }





// question 15
// var A = [
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9]
// ];

// for (let i = 0; i < A.length; i++) {
//   let row = ""; 
//   for (let j = 0; j < A[i].length; j++) {
//       row += A[i][j]; 
//   }
//   console.log(row); 
// }







// question 16
// var num = parseFloat(prompt("Enter a number:"));
// while (num > 0) {
//     console.log(num);
//     num -= 0.5; 
// }




// question 17
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//       console.log(i + " is even");
//   } else {
//       console.log(i + " is odd");
//   }
// }




// question 18
// var product = 1;

// for (let i = 1; i <= 7; i++) {
//     if (i % 2 !== 0) { 
//         product *= i; 
//     }
// }

// document.write("The product of odd integers from 1 to 7 is: " + product);




// // question 19
// var n = parseInt(prompt("Enter the initial number of stars:"));

// for (let i = n; i > 0; i--) {
//     let stars = ""; 
//     for (let j = 0; j < i; j++) {
//         stars += "*"; 
//     }
//     console.log(stars); 
// }



// question 20
// var n = +prompt("Enter number of lines:");
// var result = "";

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// alert(result);


// var n = parseInt(prompt("Enter number of lines:"));
// var result = "";

// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// alert(result);


// var n = parseInt(prompt("Enter number of lines:"));
// var result = "";

// for (let i = n; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// alert(result);

// var result = "";
// for(var i = 0; i<5; i++){
//     for(var j=0; j<5; j++){
//         document.write(result += "*" );
//     }

//     document.write(result+= "<br>");
// }





                                           // practice

// question 19
// var star = +prompt("Enter Any Number: ")

// for(i = star; i > 0; i--){
//     for(j = 0; j < i; j++){
//         document.write(`*`)
//     }
//     document.write(`<br>`)
// }



// question 20
// var n = +prompt(`Enter any number: `)

// for(i = 0; i < n; i++){
//     for(j = 0; j < n; j++){
//         document.write(`*`)
//     }
//     document.write(`<br>`)
// }




