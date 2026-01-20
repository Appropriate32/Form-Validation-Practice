import "./styles.css";

/**
 * @param {HTMLInputElement} emailInput
 * @param {HTMLInputElement} countryInput
 * @param {HTMLInputElement} Input
 */

function validateForm(Input) {
  Input.classList.add("dirty");

  if (Input.validity.valueMissing) {
    Input.setCustomValidity("Input cannot be empty");
    Input.reportValidity();
  } else if (Input.value.length < Input.minLength) {
    Input.setCustomValidity(
      `Length too short it should be atleast ${Input.minLength} characters!`,
    );
    Input.reportValidity();
  } else {
    Input.setCustomValidity("");
  }
}

const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const postalInput = document.querySelector("#postal");
const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("form");

emailInput.addEventListener("input", () => validateForm(emailInput));
countryInput.addEventListener("input", () => validateForm(countryInput));
postalInput.addEventListener("input", () => validateForm(postalInput));
passwordInput.addEventListener("input", () => validateForm(passwordInput));
confirmPassword.addEventListener("input", () => validateForm(confirmPassword));
