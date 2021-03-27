// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var length = window.prompt("What is the length of the password?");
  if (length < 8 || length > 128){
    alert("Try again. Choose within the limit.");
    return;
  }
  var lowCase = window.confirm("Are the letters lower case?");
  var capLet = window.confirm("Are the letter's capitalized?");
  var specChar = window.confirm("Are there any special charachters?");
  var number = window.confirm("Are there any numbers?")
  getPassword();
}

function getPassword() {
  if (lowCase,capLet,specChar,number) {
    for ( i=0; i < length + 1; i++) {
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
