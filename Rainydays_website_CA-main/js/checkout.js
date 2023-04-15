const form = document.querySelector("#paymentForm");
const submitButton = document.querySelector("button[type='submit']");

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

  const payFirstName = document.querySelector("#paymentFirstName");

  console.log(payFirstName.value);
};

//firstname
const payFirstName = document.querySelector("#paymentFirstName");
const payFirstNameError = document.querySelector("#payFirstNameError");
const payFirstNameValid = document.querySelector("#payFirstNameSuccess");

function validateForm(event) {
  event.preventDefault();
  if (checkLength(payFirstName.value, 3) === true) {
    payFirstNameError.style.display = "none";
    payFirstNameValid.textContent = "First name valid!";
  } else {
    payFirstNameError.style.display = "block";
    payFirstNameValid.textContent = "";
  }

  //lastname
  const payLastName = document.querySelector("#paymentLastName");
  const payLastNameError = document.querySelector("#payLastNameError");
  const payLastNameValid = document.querySelector("#payLastNameSuccess");

  if (checkLength(payLastName.value, 3) === true) {
    payLastNameError.style.display = "none";
    payLastNameValid.style.display = "Last name valid!";
  } else {
    payLastNameError.style.display = "block";
    payLastNameValid.textContent = "";
  }

  // card
  const payCard = document.querySelector("#paymentCard");
  const payCardError = document.querySelector("#cardError");
  const payCardValid = document.querySelector("#cardSuccess");
  if (checkLength(payCard.value, 17) === true) {
    payCardError.style.display = "none";
    payCardValid.textContent = "Card number is valid!";
  } else {
    payCardError.style.display = "block";
    payCardValid.textContent = "";
  }

  // cvc
  const payCvc = document.querySelector("#paymentCvc");
  const payCvcError = document.querySelector("#cvcError");
  const payCvcValid = document.querySelector("#cvcSuccess");

  console.log(payCvc);

  if (validateCvc(payCvc.value, 4) === true) {
    payCvcError.style.display = "none";
    payCvcValid.textContent = "CVC is valid!";
  } else {
    payCvcError.style.display = "block";
    payCvcValid.textContent = "";
  }

  // exp
  const payExp = document.querySelector("#paymentExp");
  const payExpError = document.querySelector("#expError");
  const payExpValid = document.querySelector("#expSuccess");
  if (checkLength(payExp.value, 6) === true) {
    payExpError.style.display = "none";
    payExpValid.textContent = "Expiration date is valid!";
  } else {
    payExpError.style.display = "block";
    payExpValid.textContent = "";
  }
}

/* cvc regex retrieved from: https://regex101.com/r/wD7pW3/1 */
const payCvc = document.querySelector("#paymentCvc");

function validateCvc(payCvc) {
  const cvcRegEx = /^[0-9]{3,4}$/;
  const patternMatches = cvcRegEx.test(payCvc);
  return patternMatches;
}

/* onkeyup */

payCvc.onkeyup = function (event) {
  console.log(event.target.value.length);

  const len = event.target.value.length;

  characterCount.innerHTML = len;

  if (len >= 3) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};
