

const list = document.querySelector('#categories');
//console.log(list);//

const items = list.querySelectorAll('.item');
//console.log(items);//

console.log('Number of categories:', items.length);

items.forEach(function callback(element) {

console.log('Category:', element.firstElementChild.textContent);
console.log('Elements:', element.childNodes[3].children.length);

});

