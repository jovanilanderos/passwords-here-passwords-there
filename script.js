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

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type!");

    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }

  var password = generateRandomPassword(
    parseInt(passwordLength),
    includeLowercase,
    includeUppercase,
    includeNumeric,
    includeSpecial
  );

  return password;
}

function isValidLength(length) {
  var parsedLength = parseInt(length);
  return !isNaN(parsedLength) && parsedLength >= 8 && parsedLength <= 128;
}

function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
