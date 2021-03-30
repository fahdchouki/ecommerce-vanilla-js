/**
 *
 * form variables
 */
// login dom
let logemailDom = document.querySelector("#log-email");
let logpwdDom = document.querySelector("#log-pwd");
let logbtnDom = document.querySelector("#btn-log");

// show password
let checkboxIn = document.getElementById("toggle-pwd-in");

checkboxIn.onchange = () => {
  if (checkboxIn.checked) {
    logpwdDom.setAttribute("type", "text");
  } else {
    logpwdDom.setAttribute("type", "password");
  }
};

// check user info
logbtnDom.addEventListener("click", () => {
  const email = localStorage.getItem("email");
  const pwd = localStorage.getItem("password");
  if (logemailDom.value.trim() === email || logpwdDom.value.trim() === pwd) {
    window.location.href = "index.html";
  } else {
    alert("Incorrect Email or Password");
  }
});
