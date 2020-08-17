// HTML element selector
var generateBtn = document.querySelector("#generate");

// Array variables for password character options

var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var char = ["(", "?", "_", "+", "!", "=", "-", "@", "#", "$", "%", "&", "*", ")"];
var temp = [];
var pass = "";

// Password generator function which empties string and array

function generatePassword() {
  temp = []
  pass = "";

// Prompts for length of password as well as options for characters password can contain.

  var x = prompt("How many characters would you like your password to be? Please select a number between 8 and 128.");
  var long = parseInt(x);
  if (x === null || x === "" || isNaN(x)){
    alert("You're here for a password, aren't you? Let's try that again.")
    generatePassword();
  }else if (long < 8 || long > 128) {
    alert("Your password must be between 8 and 128 characters!");
    generatePassword();
  } else {
    alert("Your password will be " + long + " characters long.");
    console.log("Your password will be " + long + " characters long.");

// if/else statements to concatenate selected characters into temporary password array.

    var numConfirm = confirm("Would you like to include numbers in your password?");
    console.log(numConfirm);
    if (numConfirm) {
      alert("Your password may include numbers.");
      temp = temp.concat(num);
      console.log("Password may include numbers.");
    } else {
      alert("Your password will not include numbers.");
      console.log("Password will not include numbers.");
    }

    var upperConfirm = confirm("Would you like to include uppercase letters in your password?");
    console.log(upperConfirm);
    if (upperConfirm) {
      alert("Your password may include uppercase letters.");
      temp = temp.concat(upper);
      console.log("Password may include uppercase letters.");
    } else {
      alert("Your password will not include uppercase letters.");
      console.log("password will not include uppercase letters.");
    }

    var lowerConfirm = confirm("Would you like to include lowercase letters in your password?");
    console.log(lowerConfirm);
    if (lowerConfirm) {
      alert("Your password may include lowercase letters.");
      temp = temp.concat(lower);
      console.log("Password may include lowercase letters.");
    } else {
      alert("Your password will not include lowercase letters.");
      console.log("password will not include lowercase letters.");
    }

    var charConfirm = confirm("Would you like to include special characters (?_+!=-@#$%&*) in your password?");
    console.log(charConfirm);
    if (charConfirm) {
      alert("Your password may include special characters.");
      temp = temp.concat(char);
      console.log("Password may include special characters.");
    } else {
      alert("Your password will not include special charaters.");
      console.log("Password will not include special characters.");
    }

// Alert if user doesn't select any password character types.

    if (charConfirm === false && lowerConfirm === false && upperConfirm === false && numConfirm === false) {
      alert("You must select at least one character category. Please try again.");
      console.log("No character types selected.");
      generatePassword();
    } else {
      gen(temp, long);
    }
  }
}

// Function to generate password after choices have been made.

function gen(array, passwordLen) {
  for (var i = 0; i < passwordLen; i++) {
    pass += array[Math.floor(Math.random() * array.length)];
  }
  alert("Your secure password is " + pass);
  console.log("Your secure password is " + pass);
}

// Function to write password into HTML element and event listener to initiate upon clicking Generate Password button.

function writePassword() {
  generatePassword();
  document.querySelector("#password").innerText = pass;
}

generateBtn.addEventListener("click", writePassword);