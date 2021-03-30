/**
 *
 * form variables
 */

// register dom
let regnameDom = document.querySelector("#reg-name");
let regemailDom = document.querySelector("#reg-email");
let regpwdDom = document.querySelector("#reg-pwd");
let regbtnDom = document.querySelector("#reg-btn");
// show password
let checkboxUp = document.querySelector("#toggle-pwd-up");

checkboxUp.onchange = () => {
  if (checkboxUp.checked) {
    regpwdDom.setAttribute("type", "text");
  } else {
    regpwdDom.setAttribute("type", "password");
  }
};

/**
 *
 * register functionality
 */
regbtnDom.addEventListener("click", () => {
  // check if fields are empty
  if (
    regnameDom.value.trim() === "" ||
    regemailDom.value.trim() === "" ||
    regpwdDom.value.trim() === ""
  ) {
    alert("You must fill all the fields below");
  } else {
    localStorage.setItem("username", regnameDom.value);
    localStorage.setItem("email", regemailDom.value);
    localStorage.setItem("pwd", regpwdDom.value);
    window.location.href = "index.html";
  }
});
