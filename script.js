// Assignment Code
var generateBtn = document.querySelector("#generate");
var pass_type_count = 0;
var opt = 0;
var length = opt;

var passwordText = document.querySelector("#password");
var LowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var Num = "1234567890".split("");
var Character = "!#$%&()*+,-./:;<=>?@[]^_`{|}~".split("");
var selected = [];
var pass = [];
var config = {
  hasLowercase: false,
  hasUppercase: false,
  hasNumber: false,
  hasCharacter: false,
  passwordlength: 0,
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  while (!(opt >= 2 && opt <= 10)) {
    opt = prompt("how long do you want your password to be (between 2-10)");
    if (!(opt >= 2 && opt <= 10)) {
      window.alert("invalid input");
    }
    console.log(opt);
  }
  if (window.confirm("Do you want Lower Case alphabets in your password")) {
    config.hasLowercase = true;
    console.log(config);
  }
  if (window.confirm("Do you want Upper Case alphabets in your password")) {
    config.hasUppercase = true;
    console.log(config);
  }
  if (window.confirm("Do you want Number in your password")) {
    config.hasNumber = true;
    console.log(config);
  }
  if (window.confirm("Do you want Characters in your password")) {
    config.hasCharacter = true;
    console.log(config);
  }
  console.log(config);
  for (var i = 1; i <= opt; i++) {
    if (config.hasLowercase) {
      var random = Math.floor(Math.random() * LowerCase.length);
      console.log(LowerCase[random]);
      selected.push(LowerCase[random]);
      //select a lower case from lower case array and put into the pass word
    }
    if (config.hasUppercase) {
      var random = Math.floor(Math.random() * UpperCase.length);
      console.log(UpperCase[random]);
      selected.push(UpperCase[random]);
    }
    if (config.hasNumber) {
      var random = Math.floor(Math.random() * Num.length);
      console.log(Num[random]);
      selected.push(Num[random]);
    }
    if (config.hasCharacter) {
      var random = Math.floor(Math.random() * Character.length);
      console.log(Character[random]);
      selected.push(Character[random]);
    }
  }
  console.log(selected);
  for (var i = 1; i <= opt; i++) {
    var random = Math.floor(Math.random() * selected.length);
    pass.push(selected[random]);
  }
  return pass.join("");
}

//

generateBtn.addEventListener("click", writePassword);
