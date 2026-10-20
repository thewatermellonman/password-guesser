const passwordInput = document.getElementById("passwordInput");

passwordInput.addEventListener("input", function() {
   const password = passwordInput.value;
   console.log(password.length);
});