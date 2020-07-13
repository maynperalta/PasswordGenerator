// Assignment Code
var generateBtn = document.querySelector("#generate");

//These variables include the four arrays of available options for the password, as well as a blank temporary array for the chosen options to be concatenated into. I also have a blank string which will eventually hold our randomized password. I could've probably made these all strings instead of arrays to save myself a lot of time and headache. 

var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var char = ["(", "?", "_", "+", "!", "=", "-", "@", "#", "$", "%", "&", "*", ")"];
var temp = [];
var pass = "";

//Here is our generatePassword function. This function initiates with the click of the "Generate Password" button on the HTML page. The first two lines after the function are there in order to clear out the temp array and pass string if another password was to be generated after the first one. Without clearing out the string and array, everything stacks on top of each other and creates a mess.

function generatePassword() {
  temp = []
  pass = "";

//The x and long variables are to ensure that the entered value is registered as an integer. If a decimal is entered, everything after the decimal is disregarded (example: if 12.9 is entered, the password will only be 12 characters in length). Also, there are the if/else statements which will take take place if the entry isn't a number, left blank, or "cancel" is clicked. The generatePassword call is present after invalid choices are made or entered which will start the process over again with the first prompt.

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

//After an acceptable entry is entered into the length of password prompts, the user gets to select what types of characters will make up the random password. If the user clicks "okay" on the popup, those characters will be concatenated into the "temp" array to be pulled from later. If the user clicks "cancel", those character will not be included in the "temp" array. Either choice is logged into the console.

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

//If the user clicks "cancel" on all four prompts, an alert will pop up notifying the user that at lease one option must be selected. If this happens, a call for the generatePassword function is present to start the process over from the beginning. 

    if (charConfirm === false && lowerConfirm === false && upperConfirm === false && numConfirm === false) {
      alert("You must select at least one character category. Please try again.");
      console.log("No character types selected.");
      generatePassword();
    } else {
      gen(temp, long);
    }
  }
}

//Once the generatePassword function has completed, the gen function will initiate. This includes a "for" loop which randomly selects characters that were concatenated into the "temp" array and places them into the "pass" string. Because the variables "temp" and "long" were used in the previous function, they had to be represented by different words here. In this case "array" and "passwordLen" respectively. Otherwise, the script gets confused and nothing will work. After this function takes place, an alert will appear with the new, randomized password, and it will also be logged into the console. 

function gen(array, passwordLen) {
  for (var i = 0; i < passwordLen; i++) {
    pass += array[Math.floor(Math.random() * array.length)];
  }
  alert("Your secure password is " + pass);
  console.log("Your secure password is " + pass);
}

//Finally, the randomized password will have to be placed into the text area of the HTML file. This is what will appear on the actual webpage. Here we have the writePassword function which calls the generatePassword function and places the result into the text area of the HTML file that is given the ID "password". This is to ensure the password has a place to go in the document. We do this with a "querySelector" that looks for the password ID in which to enter the text that is now a part of the "pass" string.

function writePassword() {
  generatePassword();
  document.querySelector("#password").innerText = pass;
}

//This is the event listener which starts off the process when the "Generate Password" button is clicked. Notice that after "click" is "writePassword". This initiates the function above which in turn calls the generatePassword to begin. 
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);