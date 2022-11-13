const categoriesItem = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesItem.length}`);

const firstCategory = categoriesItem[0].firstElementChild;
console.log(`Category: ${firstCategory.textContent}`);
const elemCategory = firstCategory.nextElementSibling;

console.log(`Elements: ${elemCategory.children.length}`)





const secondCategory = categoriesItem[1].firstElementChild;
console.log(`Category: ${secondCategory.textContent}`);
const secondElemCategory = secondCategory.nextElementSibling;

console.log(`Elements: ${secondElemCategory.children.length}`)




const thirdCategory = categoriesItem[2].firstElementChild;
console.log(`Category: ${thirdCategory.textContent}`);
const thirdElemCategory = thirdCategory.nextElementSibling;

console.log(`Elements: ${thirdElemCategory.children.length}`)




