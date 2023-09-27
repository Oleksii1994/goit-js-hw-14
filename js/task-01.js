const categories = document.querySelector("#categories");
const allCategoriesArray = document.querySelectorAll(".item");
const numberOfCategories = allCategoriesArray.length;

console.log(`Number of Categories: ${numberOfCategories}\n `);

allCategoriesArray.forEach((element) => {
  console.log(
    `Category: ${element.firstElementChild.textContent}\n Elements: ${element.lastElementChild.children.length}\n `
  );
});
