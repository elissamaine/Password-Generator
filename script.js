// Assignment code here
var ucletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lcletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "t", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialchr = [" ", "!", "#", "$", "%", "^", "&", "'", "(", ")", "*", "+", ",", "-", "/", ".", ":", ";", "<", ">", "=", "?", "[", "]", "@", "_", "`", "|", "{", "}", "~"];

function generatePassword() {
  let passwordLength = prompt("Password length.", "pick a number between 8 and 128");
  if (passwordLength >= 8 && passwordLength <= 128) {

   } else {
    window.alert("Enterd value isnt in range.")
  };

  let selectChar = {};
  while (!Object.keys(selectChar).length) {
    selectChar.ucletters = window.confirm("Add upper case letters to your password?");
    selectChar.lcletters = window.confirm("Add lower case letter to your password?");
    selectChar.numbers = window.confirm("Add numbers to your password?");
    selectChar.specialchr = window.confirm("Add special characters to your password?");

    selectedChar = Object.values(selectChar).map( x => x ? true : false);
    if (!selectedChar.filter(Boolean).length) {
      alert("You have to select at least one type of character to generate a password");
    };
  };

  let characters = [];
  if (selectChar.ucletters) {
    characters = characters.concat(ucletters);
  };
  if (selectChar.lcletters) {
    characters = characters.concat(lcletters);
  };
  if (selectChar.numbers) {
    characters = characters.concat(numbers);
  };
  if (selectChar.specialchr) {
    characters = characters.concatx(specialchr);
  };

  /*let selectUCL;
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

  };*/

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
