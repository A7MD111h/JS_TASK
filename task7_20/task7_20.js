
const form = document.getElementById("singUp")
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const dobInput = document.getElementById('dob');
const emailInput = document.getElementById('email');
const confirmEmailInput = document.getElementById('confirmEmail');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const mobileInput = document.getElementById('mobile');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm();
});
  
function validateForm() {
    resetErrors();
  
    const firstNamePattern = /^[A-Za-z]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,32}$/;
  
    let valid = true;
  
    if (!firstNamePattern.test(firstNameInput.value)) {
      valid = false;
      displayError(firstNameInput, 'First name should contain only letters.');
    }
    if (!isValidDate(dobInput.value)) {
        valid = false;
        displayError(dobInput, 'Invalid date of birth format.');
    }

}  
