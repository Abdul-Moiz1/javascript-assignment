// password generator

var charactor = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678910!@#$%^&*()|/?.,<>";
var user = +prompt("Enter your password length: ");
var password = "";

for(i = 0; i < user; i++){
    var random = Math.floor(Math.random() * charactor.length)
    password += charactor[random]
}

alert(password)