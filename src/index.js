import "./styles.css";

/**
 * @param {HTMLInputElement} emailInput
 * @param {HTMLInputElement} countryInput
 * @param {HTMLInputElement} Input
 * @param {HTMLFormElement} form
 */

function validateForm(Input) {
  Input.classList.add("dirty");

  if (Input.validity.valueMissing) {
    Input.setCustomValidity("Input cannot be empty");
  } else if (Input.value.length < Input.minLength) {
    Input.setCustomValidity(
      `Length too short it should be atleast ${Input.minLength} characters!`,
    );
  } else {
    Input.setCustomValidity("");
  }

  if (Input.id === "confirm-password") {
    if (Input.value !== passwordInput.value) {
      Input.setCustomValidity("Passwords must be same");
    } else {
      Input.setCustomValidity("");
    }
  }
}

const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const postalInput = document.querySelector("#postal");
const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("form");
const docBody = document.querySelector("body");

emailInput.addEventListener("input", () => validateForm(emailInput));
countryInput.addEventListener("input", () => validateForm(countryInput));
postalInput.addEventListener("input", () => validateForm(postalInput));
passwordInput.addEventListener("input", () => {
  validateForm(passwordInput);
  validateForm(confirmPassword);
});
confirmPassword.addEventListener("input", () => validateForm(confirmPassword));
form.addEventListener("submit", (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
    form.reportValidity();
  } else {
    if (document.querySelector(".success-message")) {
      return;
    }
    const highFive = document.createElement("h1");
    highFive.classList.add("success-message");
    highFive.textContent = "High Five!";
    form.reset();

    docBody.appendChild(highFive);
  }
});
