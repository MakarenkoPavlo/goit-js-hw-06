const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector(`#ingredients`);
const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const listItemEl = document.createElement('li');
  listItemEl.textContent = ingredient;
  listItemEl.classList.add('item');
  fragment.appendChild(listItemEl);
});

listEl.appendChild(fragment);