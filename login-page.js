const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "admin" && password === "admin123") {
    alert("You have successfully logged in.");
  } else if (username !== "admin" && password != "admin123") {
    alert("Invalid credentials");
  } else if (username !== "admin" && password === "admin123") {
    alert("Please enter correct username");
  } else if (username === "admin" && password !== "admin123") {
    alert("Please enter correct password");
  }
});
