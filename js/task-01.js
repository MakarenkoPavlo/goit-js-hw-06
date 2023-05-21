const categoriesList = document.querySelector('#categories').children;


const numCategories = categoriesList.length;
console.log(`Number of categories: ${numCategories}`);


Array.from(categoriesList).forEach((category) => {
 
  const title = category.firstElementChild.textContent;
  const elements = category.lastElementChild.children;  
  const numElements = elements.length;


  console.log(`Category: ${title}`);
  console.log(`Elements: ${numElements}`);
});