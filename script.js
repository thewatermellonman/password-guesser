const passwordInput = document.getElementById("passwordInput");
const lengthCheck = document.getElementById("lengthCheck");
const uppercaseCheck = document.getElementById("uppercaseCheck");
const lowercaseCheck = document.getElementById("lowercaseCheck");
const numberCheck = document.getElementById("numberCheck");
const symbolCheck = document.getElementById("symbolCheck");
const score = document.getElementById("score");

passwordInput.addEventListener("input", function() {
    const password = passwordInput.value;
    let points = 0;

    if (password.length >= 10) {
      lengthCheck.textContent = "Length: " + password.length + " characters (long enough!)";
      points = points + 40;
    } else {
      lengthCheck.textContent = "Length: " + password.length + " characters (not long enough!)";
    }

    const hasUppercase = /[A-Z]/.test(password);
    if (hasUppercase) {
      uppercaseCheck.textContent = "Uppercase: Present";
      points = points + 15;
    } else {
      uppercaseCheck.textContent = "Uppercase: Missing";
    }
   
    const hasLowercase = /[a-z]/.test(password);
    if (hasLowercase) {
      lowercaseCheck.textContent = "Lowercase: Present";
      points = points + 15;
    } else {
      lowercaseCheck.textContent = "Lowercase: Missing";
    }

    const hasNumber = /[0-9]/.test(password);
    if (hasNumber) {
      numberCheck.textContent = "Numbers: Present";
      points = points + 15;
    } else {
      numberCheck.textContent = "Numbers: Missing";
    }

    const hasSymbol = /[^a-zA-Z0-9]/.test(password);
    if (hasSymbol) {
      symbolCheck.textContent = "Symbols: Present";
      points = points + 15;
    } else {
      symbolCheck.textContent = "Symbols: Missing";
    };

    score.textContent = "Score: " + points + "/100";
});