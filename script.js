// Assignment Code
var generateBtn = document.querySelector("#generate");

var num = ["0","1","2","3","4","5","6","7","8","9"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var char = ["(","?","_","+","!","=","-","@","#","$","%","&","*",")"];
var temp = [];
var pass = ""

function generatePassword (){
  var long = prompt("How many characters would you like youre password to be (between 8 and 128)?");
    while (long < 8 || long > 128){
    alert("Your password must be between 8 and 128 characters!");
    long = prompt("How many characters would you like youre password to be (between 8 and 128)?");
    if (long >=8 && long <=128){
    console.log("Your password will be " + long + " characters in length");}
    }
    

      var numConfirm = confirm("Would you like to include numbers in your password?");
      console.log(numConfirm);
      if (numConfirm){
        alert("Your password may include numbers.");
        temp = temp.concat(num);
        console.log(temp)
      }else{
        alert("Your password will not include numbers.");
      }
      var upperConfirm = confirm("Would you like to include uppercase letters in your password?");
      console.log(upperConfirm);
      if (upperConfirm){
        alert("Your password may include uppercase letters.");
        temp = temp.concat(upper);
        console.log(temp)
      }else{
        alert("Your password will not include uppercase letters.");
      }
      var lowerConfirm = confirm("Would you like to include lowercase letters in your password?");
      console.log(lowerConfirm);
      if (lowerConfirm){
        alert("Your password may include lowercase letters.");
        temp = temp.concat(lower);
        console.log(temp)
      }else{
        alert("Your password will not include lowercase letters.");
      }
      var charConfirm = confirm("Would you like to include special characters (?_+!=-@#$%&*) in your password?");
      console.log(charConfirm);
      if (charConfirm){
        alert("Your password may include special characters.");
        temp = temp.concat(char);
        console.log(temp)
      }else{
        alert("Your password will not include special charaters.");
      }

    function gen(array) {
      for (let i = 0; i < long; i++){
        pass+=array[Math.floor(Math.random()*long)]
      }

      console.log(pass)

    }

    gen(temp);

};


  // start a fresh variable as an empty string
  // loop "long" times
  // pick a random number between 0 and the length of temp array (HINT var pass above)
  // with this random number, grab a random value out of the temp array (think array[randomNumber])
  // append this random value from temp array to a new string


//check for the options
//create temporary array and push array based on user's option selection
//generate random number to pick character from temporary array



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);