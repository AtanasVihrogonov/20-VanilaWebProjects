const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm-password');

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, password, confirmpassword]);
  checkLength(username, 5, 10);
  checkLength(password, 6, 12);
  checkEmail(email);
  checkPasswordMatch(password, confirmpassword);
});

// Show input error outline and message
function showError(input, message) {
  const formControl = input.parentElement;
  // Outline the input with error color
  formControl.className = 'form-control error';

  // Add error message
  const small = formControl.querySelector('small');
  small.innerText = message;
};

// Show input success outline and message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
};

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input);
    }
  });
};

// Check inpit length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};

// Check password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  } 
};

// Get fieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

