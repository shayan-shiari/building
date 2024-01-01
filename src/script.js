const passwordInput = document.getElementById("password");
const passwordIcon = document.getElementById("password-icon");

passwordIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordIcon.setAttribute("name", "hide");
    console.log("sa");
    passwordInput.type = "text";
  } else {
    passwordIcon.setAttribute("name", "show");
    passwordInput.type = "password";
  }
});


