
const inputValidation = document.querySelector('#validation-input')
const numOfCharactersInput = parseInt(inputValidation.dataset.length);

inputValidation.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === numOfCharactersInput) {
        inputValidation.classList.add('valid');
    }
    else { inputValidation.classList.add('invalid') }
}) // console.log(inputValidation)