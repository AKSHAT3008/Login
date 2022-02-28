const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "admin" && password === "admin123") {
    window.location = "all correct.html";
  } else if (username !== "admin" && password != "admin123") {
    window.location = "incorrect u&p.html";
  } else if (username !== "admin" && password === "admin123") {
    window.location = "incorrect u.html";
  } else if (username === "admin" && password !== "admin123") {
    window.location = "incorrect p.html";
  }
});
