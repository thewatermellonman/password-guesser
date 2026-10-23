const passwordInput = document.getElementById("passwordInput");
const lengthCheck = document.getElementById("lengthCheck");
const uppercaseCheck = document.getElementById("uppercaseCheck");
const lowercaseCheck = document.getElementById("lowercaseCheck");
const numberCheck = document.getElementById("numberCheck");
const symbolCheck = document.getElementById("symbolCheck");
const score = document.getElementById("score");
const lengthProgress = document.getElementById("lengthProgress")
const commonPasswordCheck = document.getElementById("commonPasswordCheck");

let commonPasswords = [];
let passwordsLoaded = false;

fetch("common-passwords.txt")
  .then(response => response.text())
  .then(data => {
    commonPasswords = data.split("\n").map(password => password.trim());
    passwordsLoaded = true;
  });

passwordInput.addEventListener("input", function() {
    const password = passwordInput.value;
    let points = 0;

    if (password.length >= 10) {
      lengthCheck.textContent = "Length: " + password.length + " characters (long enough!)";
      points = points + 40;
    } else {
      lengthCheck.textContent = "Length: " + password.length + " characters (not long enough!)";
    }

    const progress = Math.min(password.length / 10, 1) * 100;
    lengthProgress.style.width = progress + "%";

    const hasUppercase = /[A-Z]/.test(password);
    if (hasUppercase) {
      uppercaseCheck.textContent = "Present";
      points = points + 15;
    } else {
      uppercaseCheck.textContent = "Missing";
    }
   
    const hasLowercase = /[a-z]/.test(password);
    if (hasLowercase) {
      lowercaseCheck.textContent = "Present";
      points = points + 15;
    } else {
      lowercaseCheck.textContent = "Missing";
    }

    const hasNumber = /[0-9]/.test(password);
    if (hasNumber) {
      numberCheck.textContent = "Present";
      points = points + 15;
    } else {
      numberCheck.textContent = "Missing";
    }

    const hasSymbol = /[^a-zA-Z0-9]/.test(password);
    if (hasSymbol) {
      symbolCheck.textContent = "Present";
      points = points + 15;
    } else {
      symbolCheck.textContent = "Missing";
    };

    score.textContent = "Score: " + points + "/100";

  const isCommon = commonPasswords.some(
      commonPassword => commonPassword.toLowerCase() === password.toLowerCase()
  );

  if (passwordsLoaded) {
      if (isCommon) {
          commonPasswordCheck.textContent = "Warning: This is a common password!";
      } else {
          commonPasswordCheck.textContent = "Not found in our common-password list.";
      }
  } else {
      commonPasswordCheck.textContent = "Loading password list...";
  }
});