const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refIngredients = document.querySelector('#ingredients')
console.log(refIngredients);


const makeNewEl = (ingredient) => { 
  return ingredients.map(opt => {
    const newEl = document.createElement('li');
    newEl.textContent = opt;
    newEl.classList.add('item')
    return newEl;
  })
}; 
    
const elements = makeNewEl(ingredients);
refIngredients.append(...elements)

