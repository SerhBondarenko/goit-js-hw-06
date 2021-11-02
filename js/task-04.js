
const decrementBtn = document.querySelector('[data-action=decrement]');
const incrementBtn = document.querySelector('[data-action=increment]');
const valueEl = document.querySelector('#value');

let valueBtm = 0;

decrementBtn.addEventListener('click',  () => {
    valueBtm -= 1;
    valueEl.textContent = valueBtm;
});

incrementBtn.addEventListener('click',  () =>{
  
     valueBtm += 1;
    valueEl.textContent = valueBtm;
});