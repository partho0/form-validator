const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password');
// show input error
function showError(input, message) {
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;
}
// show success outline
function showSuccess(input) {
   const formControl = input.parentElement;
   formControl.className = 'form-control success'
}

// check if email is valid
function checkEmail(email) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    }else{
       showError(input, 'EMail not valid')
    }
}

// Check required fields
function checkRequired(inputArr) {
   inputArr.forEach(function(input) {
      if (input.value.trim() ==='') {
         showError(input, `${getFieldName(input)} is required`)
      } else {
         showSuccess(input);
      }
   })
}
// check input checkLength
function checkLength(input,min,max) {
   if (input.value.length < min) {
      showError(input, `${getFieldName(input)} must be at least ${min} characters`);
   }else if(input.value.length > max){
      showError(
         input,`${getFieldName(input)} must be lee than ${max} characters`
      );
   }else{
      showSuccess(input)
   }
}
// check pass match
function checkPasswordMatch(input1, input2) {
   if (input1.value != input2.value) {
      showError(input2, 'Passwords do not match');
   }
}
// get getFieldName
function getFieldName(input) {;
}
// event listeners
form.addEventListener('submit', function(e) {
   e.preventDefault();
   
   checkRequired([username, email, password, password2]);
   checkLength(username, 3, 15);
   checkLength(password, 6, 50);
   checkEmail(email);
   checkPasswordMatch(password,password2)
});
















































