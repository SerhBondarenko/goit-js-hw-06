
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
});

//value - содержит текущий текстовый контент элементов форм.
// event.currentTarget - элемент, на котором выполняется обработчик события.
//Параметр event это и есть обьект события, который автоматически передается первым аргументом при вызове коллбэк функции. 
