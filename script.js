// Assignment code here
var ucletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lcletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "t", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialchr = [" ", "!", "#", "$", "%", "^", "&", "'", "(", ")", "*", "+", ",", "-", "/", ".", ":", ";", "<", ">", "=", "?", "[", "]", "@", "_", "`", "|", "{", "}", "~"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let selectUCL;
    if (confirm("Add upper case letters to your password?") == true){

    } else {

    };


  let selectLCL;
    if (confirm("Add lower case letters to your password?") == true){

    } else {

    };

  let selectNUM;
    if (confirm("Add numbers to your password?") == true){

    } else {

    };

  let selectSC;
    if (confirm("Add special characters to your password?") == true){

    } else {

    };
  
  let passwordLength = prompt("Password length.", "pick a number between 8 and 128");
    if (passwordLength >= 8 && passwordLength <= 128) {

    } else {
        window.alert("Enterd value isnt in range.")
    };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
