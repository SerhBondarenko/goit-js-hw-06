function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const linkInput =document.querySelector('input')
const linkBtnCreate =document.querySelector('[data-create]')
const linkBtnDectroy =document.querySelector('[data-destroy]')
const linkBoxes =document.querySelector('#boxes')
const linkControls = document.querySelector('#controls')

console.log(linkInput)
console.log(linkBtnCreate)
console.log(linkBtnDectroy)
console.log(linkBoxes)
console.log(linkControls)



function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let elem = 1; elem < amount + 1; elem ++) {
    const navLinkDiv = document.createElement('div');
    navLinkDiv .classList.add('boxes')
  linkInput.textContent = amount.currentTarget;
  navLinkDiv.style.backgroundColor = getRandomHexColor();
  navLinkDiv.style.width = width +'px';
  navLinkDiv.style.height = height + 'px';
  width += 10;
	height += 10;
  linkBoxes.append(navLinkDiv);
  console.log(navLinkDiv) 

  }
  
} 

//создание div
linkBtnCreate.addEventListener("click", (event) => {
  const numBoxes = Number(linkInput.value);
	createBoxes(numBoxes);
  
});


//удаление div
function destroyBoxes() {
	linkBoxes.innerHTML = '';
}
linkBtnDectroy.addEventListener("click", () => {
  destroyBoxes()
});
  