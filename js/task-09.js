function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector('body');
console.log(body);
const spanColor = document.querySelector('.color');
console.log(spanColor);
const button = document.querySelector(".change-color");
console.log(button);

button.addEventListener("click", handle);


function handle() {
  const palettColor = getRandomHexColor();
  body.style.backgroundColor = palettColor;
  spanColor.textContent = palettColor;
}