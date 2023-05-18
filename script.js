// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");
  if (!isValidLength(passwordLength)) {
    passwordLength = prompt("Invalid length! Please enter a number between 8 and 128:");
  }

}