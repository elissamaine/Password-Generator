// character variables
var ucletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lcletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "t", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialchr = [" ", "!", "#", "$", "%", "^", "&", "'", "(", ")", "*", "+", ",", "-", "/", ".", ":", ";", "<", ">", "=", "?", "[", "]", "@", "_", "`", "|", "{", "}", "~"];

// function that is called in the writePassword function that is called when the generate button is clicked 
function generatePassword() {
  //password length is the input length from the prompt unless its not in the stated range and then an alert is given
  let passwordLength = prompt("Password length.", "pick a number between 8 and 128");
  if (passwordLength >= 8 && passwordLength <= 128) {

   } else {
    window.alert("Enterd value isnt in range.");
    return;
  };

  //the confirm statements that ask if the used whnts the stated characters in the password, 
  let selectChar = {};
  while (!Object.keys(selectChar).length) {
    selectChar.ucletters = window.confirm("Add upper case letters to your password?");
    selectChar.lcletters = window.confirm("Add lower case letter to your password?");
    selectChar.numbers = window.confirm("Add numbers to your password?");
    selectChar.specialchr = window.confirm("Add special characters to your password?");

    // if the user confirms the statement it is true. the if statement makes sure that when all the confirms are added together there is at least one true statement 
    selectedChar = Object.values(selectChar).map(x => x ? true : false);
    if (!selectedChar.filter(Boolean).length) {
      alert("You have to select at least one type of character to generate a password");
    };
  };

  // this addes the cinfirmed characters into one variable to randomly pick the number of characters stated in the prompt
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
    characters = characters.concat(specialchr);
  };
  // can be used to check the characters that were useed to generate the password
  console.log(characters)

  //this function creates and array, that is the provided length, from the randomized characters privided in the characters array 
  let genPass = [];
  for (let i=0; i< passwordLength; i++) {
    genPass.push(characters[Math.floor(Math.random()*characters.length)]);
  };

  //this joins the characters selected in the genPass array and takes the comas out from between the characters
  return genPass.join("");

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
