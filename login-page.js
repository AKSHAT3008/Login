const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  var username = loginForm.username.value;
  var password = loginForm.password.value;

  if (username == "" || password.length < 6) {
    window.location = "incorrect u&p.html";
  } else {
    window.location = "code.html";
  }
});
