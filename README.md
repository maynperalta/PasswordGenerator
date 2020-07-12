# Homework Assignment Number 3
This homework assignment asked us to create a random password generator in JavaScript with specific criteria. The criteria included that a series of prompts would be presented with each presenting options on what types of characters would be included in the password. These options would include numbers, uppercase letters, lowercase letters, and special characters (i.e. !@#$%^^ etc.). The prompts would initiate with the "Generate Password" button that was coded into the HTML file beforehand. 

![](assets/Screen%20Shot%202020-07-11%20at%207.58.05%20PM.png)

## Process

### Character Selection

The CSS and HTML files were provided with no additional coding needed. Everything was coded into a JavaScript file. The provided JavaScript file had a few lines of code, but everything else was up to us to code in ourselves and make work. I started by realizing that I'd need to make some array variables in order to give the options of what characters to include in the password. I made the variables arrays, but later found out I could've made them strings. In hindsight, making them strings would've been a lot easier, but I had already done a bunch of work by that point. I made the four arrays for the four options of character types. I also included a blank array which would serve as our temporary array to present all chosen character types to be randomly selected from, as well as a blank string, which would contain our final randomized password. 

![](assets/Screen%20Shot%202020-07-11%20at%208.03.50%20PM.png)


</br>

Next, I would need to begin my series of prompts which would be initiated by the click of the "Generate Password" button. These prompts would be inside of the "generatePassword" function which allowed them to begin with the button click. The first prompt would ask the user how many characters would like to be used for a password. The available range is between 8 and 128 characters. This prompt also went into a "while" loop where if a value was chosen that was either less than 8 characters, or more than 128 characters, an alert would appear that would request the user to select a value within that range. Once the user selected a value within range, the while loop would end and the next popup would appear and the result would be logged in the console.

![](assets/Screen%20Shot%202020-07-11%20at%208.15.32%20PM.png)

</br>

After selecting the number of characters, prompts would appear that would ask the user what character types should be included in the password. These prompts would appear (in order) as numbers, uppercase letters, lowercase letters, and special characters with each of those options being available as an array at the top of the code. These prompts appeared as confirmation popups. If the user clicked "okay", the action would be logged as "true" in the console and the array would be concatenated into a temp array which would house all available chosen characters for the password. If the user clicked "cancel" the action would be logged as "false" in the console and that particular array wouldn't be included in the temp array. If "false" was logged in all four categories (meaning the user clicked "cancel" on all four "confirm" popups), an alert would pop up advising the user at least one character type needs to be selected and the function would return to the beginning. An example of one confirm code and the return code are below.

![](assets/Screen%20Shot%202020-07-11%20at%208.28.44%20PM.png)
</br>
![](assets/Screen%20Shot%202020-07-11%20at%208.28.55%20PM.png)

Once selections were made regarding the four character types, the "generatePassword" function would come to an end. 

### Password Randomization
After the "generatePassword" function has wrapped up, the next function, "gen" would begin. This would be the function that does the actual randomizing of the password based on the "temp" array from before. The code for this function is as follows:

![](assets/Screen%20Shot%202020-07-11%20at%208.38.43%20PM.png)

In order for this to function properly, I had to code a different call value of "gen" which would inlcude the previous variables "temp" (the temporary array with our character options) and "long" (the user's specified length of the password). This was done because attempting to use the variables "temp" and "long" resulted in errors which rendered the script unusable. So, in the function itself, "temp" is now represented by "array" and "long" is represented by "passwordLen."

This function includes a "for" loop which will pull a random character from the "temp" array and put it into the "pass" string variable, which up until now was empty. This process will repeat until the number of times the operation takes place is equal to the specified length of the password. 

### Random Password Display

After the "gen" function has completed, the random password will appear in an alert, as well as a console log and it will also appear in the password field of the HTML document. This is made possible by a new function - "writePassword." This function includes a variable named "password" which would be the result of the entire "generatePassword" function as well as a query selector which would take the randomly generated password that was written to the "pass" string and write it into the text area of the HTML file which was given the ID of #password. a picture of the code of this operation is below.

![](assets/Screen%20Shot%202020-07-11%20at%208.55.21%20PM.png)

### Final Thoughts

I had a lot of trouble with this assignment. It was only one JavaScript file, but I must've missed something important during class. I struggled to get the functions to work. Some mistakes were as simple as attempting to "push" arrays into the temp array rather than concatenate them. Others were the funcitons and for loops not working at all. I dealt with a great amount of frustration and there were moments I didn't think I'd even be able to turn in a finished assignment. But, here it is. I do hope that I've met the critera for an acceptable job. 