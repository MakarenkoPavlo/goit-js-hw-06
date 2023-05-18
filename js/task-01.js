const categoriesItem = document.querySelectorAll(`.item`);
const categoryCount = categoriesItem.length;
console.log(`Number of categories:`, categoryCount);

categoriesItem.forEach(el => {
    const title = el.querySelector('h2').textContent;
    const listItmeCount = el.querySelectorAll('li').length;

    console.log(`Category:`, title);
    console.log(`Elements:`, listItmeCount);
});


