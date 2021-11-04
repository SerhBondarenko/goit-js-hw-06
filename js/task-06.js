
const inputValidation = document.querySelector('#validation-input')
const numOfCharactersInput = parseInt(inputValidation.dataset.length);

inputValidation.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === numOfCharactersInput) {
        inputValidation.classList.add('valid');
        inputValidation.classList.remove('invalid');
    }
    else {
        inputValidation.classList.add('invalid')
        inputValidation.classList.remove('valid');}
})
// console.log(inputValidation)