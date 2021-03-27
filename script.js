// Assignment Code
var generateBtn = document.querySelector("#generate");

//Add function generatePassword()
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
}

var keylist = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
var temporary = "";

function getPassword(passwordLength){
  temporary = "";
  for (var i = 0; i < passwordLength; i++) {
      temporary += keylist.charAt(Math.floor(Math.random))
  } 
  return temporary;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
