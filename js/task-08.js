
const form = document.querySelector('.login-form');
//console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert(`Заповніть всі поля!`)
    }
    
    const onFormResult = {};
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => { onFormResult[name] = value; })
    console.log(onFormResult); form.reset()
}