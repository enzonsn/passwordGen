var generateBtn = document.querySelector("#generate");

function writePassword() {
  var charNum = Number(window.prompt("How many characters? (from 8-128)"));
  if(!Number.isInteger(charNum)|| charNum<=7 || charNum>=129){window.alert("You did not input a valid number! Please try again!"); return;}
  var charUp = window.confirm("Include UPPERCASE letters?");
  var charLow = window.confirm("Include lowercase letters?");
  var charNums = window.confirm("Include numbers?");
  var charSpec = window.confirm("Include special characters?");

  var password = generatePassword(charNum, charUp, charLow, charNums, charSpec);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length, upper, lower, nums, sp){
  


}

generateBtn.addEventListener("click", writePassword);
