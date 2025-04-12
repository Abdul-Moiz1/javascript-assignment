/* question 1: . Write a custom function power ( a, b ), to calculate the value of 
a raised to b. */

// function power(a, b){

//     var result = 1
//     for(i = 0; i< b; i++){
//          result *= a
//     }

//     return result
// }


// console.log(power(5, 2))


/* question 2: Any year is entered through the keyboard. Write a function to 
determine whether the year is a leap year or not. */
function getleap(){
    var year = document.getElementById("year").value 
    var result = isleapyear(year)
    document.getElementById("result").innerHTML = result
}


function isleapyear(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        return `${year} is a leap year`
    }else{
        return `${year} not a leap year`
    }
}

