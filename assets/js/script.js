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
  var pass = "";
  for(var i = 1; i <= length; i++){
    var rand = Math.floor(Math.random()*93)+33;
    if(nums && rand >= 48 && rand <=57){pass+= String.fromCharCode(rand); console.log("Num: "+String.fromCharCode(rand));}
    else if(upper && rand >= 65 && rand <= 90){pass+= String.fromCharCode(rand); console.log("Upp: "+String.fromCharCode(rand));}
    else if(lower && rand >= 97 && rand <= 122){pass+= String.fromCharCode(rand); console.log("Low: "+ String.fromCharCode(rand));}
    else if(sp && (rand == 95 || rand == 33 || (rand >=35 && rand <=38) || rand == 63 || rand == 94)){pass+= String.fromCharCode(rand); console.log("Sp: "+ String.fromCharCode(rand));}
    else{i--;}
  }
  return pass;
}

generateBtn.addEventListener("click", writePassword);
