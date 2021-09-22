// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Create Arrays for all character types. Could've been spliced, but next time!

let charOne = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let charTwo = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];


let charThr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let charFou = ["!", "@", "#", "$", "%", "^", "&", "*"];

let pLength = "";

// Use function to generate password with user's criteria.

function generatePassword() {
  let createPass = confirm(
    "Would you like to create a password? Select 'OK' for 'yes' and 'CANCEL' for 'no.'"
  );

  if (createPass === false) {
    alert("Then why'd you come here!?! Maybe next time!");
    passCheck = "";
  } else {
    // Type of Password Section

    let lowChar = confirm(
      "Would you like lowercase letters (abc) in your password? Select 'OK' for 'yes' and 'CANCEL' for 'no.'"
    );

    console.log(lowChar);

    let uppChar = confirm(
      "Would you like UPPERCASE letters (ABC) in your password? Select 'OK' for 'yes' and 'CANCEL' for 'no.'"
    );

    console.log(uppChar);

    let numChar = confirm(
      "Would you like numbers (012345) in your password? Select 'OK' for 'yes' and 'CANCEL' for 'no.'"
    );

    console.log(numChar);

    let speChar = confirm(
      "Would you like special characters (!@#$%) in your password? Select 'OK' for 'yes' and 'CANCEL' for 'no.'"
    );

    console.log(speChar);

    let passLength = prompt(
      "Please select the length of your password. (8-128 Characters)"
    );

    console.log("User selected " + passLength);

    while (passLength < 8 || passLength > 128) {
      let pLength = prompt(
        "Please select the length of your password. Remember, only 8-128 characters are allowed), or type X to exit."
      );
      console.log("Incorrect password length");
      passLength = pLength;
    }
    let comboChar = [];
    
    // Conditions to create password using user defined criteria.

    if (lowChar) {
      comboChar = comboChar.concat(charOne);
      console.log("comboChar's length is now " + comboChar.length);
    } if (uppChar) {
      comboChar = comboChar.concat(charTwo);
      console.log("comboChar's length is now " + comboChar.length);
    } if (numChar) {
      comboChar = comboChar.concat(charThr);
      console.log("comboChar's length is now " + comboChar.length);
    } if (speChar) {
      comboChar = comboChar.concat(charFou);
      console.log("comboChar's length is now " + comboChar.length);
      console.log (comboChar);
    }   

    // Creating the password using randonmly selected characters using a for loop

    let createPass=[];
    for (i = 0; i < passLength; i++) {
      //Math.floor(Math.random()*comboChar.length)
      let index = comboChar[Math.floor(Math.random()*comboChar.length)];
      createPass.push(index);   
      console.log("Added " + createPass);
      }
      let finalPass = createPass.join("");
      return finalPass;
  }
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

// End of Javascript.
