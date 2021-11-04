const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');


const ingredientEl = ingredients.map(ingredient => {

const item = document.createElement('li');
item.textContent = ingredient;
  item.classList.add('item')
   return item;
});

list.append(...ingredientEl);