const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const ERROR = 'error'


// Show input error message
const showError = ((input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
});


// Show success outline
const showSuccess = ((input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    console.log(formControl);
});



// Check passwords match
const checkPasswordsMatch = ((input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}); 


// Check email is valid
const checkEmail = ((input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not vaild')
    }
  });


// Get fieldname
const getFieldName = ((input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1,);
});


// Check required fileds
const checkRequired = ((inputArr) => {
    inputArr.forEach((input)=>{
        if (input.value === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
})



// Check input length
const checkLength = ((input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be at less than ${max} characters`);
    }
})


// Event Listners
form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2)
})
