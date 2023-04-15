const characterCount = document.querySelector(".character-count span");
const submitButton = document.querySelector("button[type='submit']");

const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

form.onsubmit = function (event) {
  event.preventDefault();

  console.log(event);

  const firstName = document.querySelector("#firstName");

  console.log(firstName.value);
};

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const firstNameValid = document.querySelector("#firstNameValid");

function validateForm(event) {
  event.preventDefault();
  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
    firstNameValid.textContent = "First name is valid!";
  } else {
    firstNameError.style.display = "block";
    firstNameValid.textContent = "";
  }

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const emailValid = document.querySelector("#emailValid");

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    emailValid.textContent = "Email is valid!";
  } else {
    emailError.style.display = "block";
    emailValid.textContent = "";
  }

  const messageId = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");
  const messageValid = document.querySelector("#messageValid");

  if (checkLength(messageId.value, 9) === true) {
    messageError.style.display = "none";
    messageValid.textContent =
      "Your message fulfills the requirements to be sent!";
  } else {
    messageError.style.display = "block";
    messageValid.textContent = "";
  }
}

function validateEmail(email) {
  // regex retrieved from: "https://masteringjs.io/tutorials/fundamentals/email-regex"
  const regEx = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

const message = document.querySelector("textarea");
message.onkeyup = function (event) {
  console.log(event.target.value.length);

  const len = event.target.value.length;

  characterCount.innerHTML = len;

  if (len >= 10) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};


  