"use strict";

// Selecting the elements and also defining regex conditions
const body = document.getElementsByTagName("body")[0];
const registrationPage = document.getElementsByClassName("signup__card")[0];
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const inputField = document.getElementById("email");
const errorWarning = document.getElementsByClassName("error__message")[0];
const submitBtn = document.getElementsByTagName("button")[0];
const dismissBtn = document.getElementsByTagName("button")[1];

const confirmPage = document.getElementsByClassName("success__card")[0];

// Checking for valid elements
const checkEmail = () => {
  if (emailRegex.test(inputField.value) || inputField.value === "") {
    inputField.classList.remove("error__email");
    errorWarning.classList.add("hide");
  } else {
    inputField.classList.add("error__email");
    errorWarning.classList.remove("hide");
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailRegex.test(inputField.value)) {
    registrationPage.classList.add("hide");
    confirmPage.classList.remove("hide");
  }
});

dismissBtn.addEventListener("click", () => {
  confirmPage.classList.add("hide");
  registrationPage.classList.remove("hide");
  inputField.value = "";
});

const checkEmailTimeOut = setInterval(checkEmail, 1000);
