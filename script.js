// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    
  passwordText.value = password;
  
}
var opt = 0; 
  while(!(opt>=2 && opt<=10)){
    opt = prompt("how long do you want your password to be (between 2-10)")
    if (!(opt>=2 && opt<=10)){
      window.alert("invalid input")
    }  
  }
  var length =opt;

  var passwordText = document.querySelector("#password");
  var LowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var Num = '1234567890'.split('');
  var Character = '!#$%&()*+,-./:;<=>?@[]^_`{|}~'.split('');
  var selected = []
  var pass_type_count = 0 ;
  if (window.confirm("Do you want Lower Case alphabets in your password")){
    selected[0]= (LowerCase)
    }
    if (window.confirm("Do you want Upper Case alphabets in your password")){
     for(let i = 0;i<selected.length;i++){
      pass_type_count++
     }
     selected[pass_type_count]= (UpperCase)
     pass_type_count = 0 ;
    }
    if (window.confirm("Do you want Number in your password")){
      for(let i = 0;i<selected.length;i++){
       pass_type_count++
      }
      selected[pass_type_count]= (Num)
      pass_type_count = 0;
  
     }
     if (window.confirm("Do you want Characters in your password")){
      for(let i = 0;i<selected.length;i++){
       pass_type_count++
      }
      selected[pass_type_count]= (Character)
      pass_type_count = 0;
  
     }
     var pass="";
     for(var i =1; i<= length; i++){
      var random = Math.floor(Math.random()*selected.length)
      pass+= selected[random];
    }
    console.log(pass)
    
     function generatePassword(){
      // for(var i =1; i<= length; i++){
      //   var random = Math.floor(Math.random()*selected.length)
      //   selected[random]
      // }
     }

 
generateBtn.addEventListener("click", writePassword);
