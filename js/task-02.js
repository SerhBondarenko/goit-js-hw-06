const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');


ingredients.forEach(function callback(ingredient) {

const item = document.createElement('li');
item.textContent = ingredient;
  list.append(item);
  item.classList.add('item')
});

