const form = document.querySelector(".login-form");

const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");

const showSuccessMessage = document.querySelector(".success");

function validateForm(event) {
  event.preventDefault();

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    //console.log("email riktig ingen feilmelding skal vises");
  } else {
    emailError.style.display = "block";
    //console.log("email feil feilmelding skal vises");
  }
  showSuccessMessage.style.display = "block";
  form.style.display = "none";
}

/* if (validateEmail(email.value) === true) {
  showSuccessMessage.style.display = "block";
  form.style.display = "none";
} else {
  console.log("no way");
} */

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
