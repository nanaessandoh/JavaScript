//////////////////////////////////////////////////
///////////// SIBLING AND CHILDREN  //////////////
//////////////////////////////////////////////////

// Get Reference to Parent
const article = document.querySelector('article');

// Convert HTML Collection to Array
Array.from(article.children);


Array.from(article.children).forEach( child => {
    child.classList.add('article-element');
});



// Find the parent of an element
const title = document.querySelector('h2');

console.log(title.parentElement);


// You can chain them to get the parent heirarchy
console.log(title.parentElement.parentElement);

console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

// chaining
console.log(title.nextElementSibling.parentElement.children);