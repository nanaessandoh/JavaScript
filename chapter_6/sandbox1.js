//////////////////////////////////////////////////
////////// SELECT ELEMENTS ON THE DOM  //////////
//////////////////////////////////////////////////


// Selects the first <p> tag in the DOM
const para = document.querySelector('p'); 
console.log(para);

// Select an element by its class name
const paraOne = document.querySelector('.error');
console.log(paraOne);

// Select element based on a node and class name
const paraTwo = document.querySelector('div.error');
console.log(paraTwo);

const paraThree = document.querySelector('body > h1');
console.log(paraThree);

// Selects all elements with <p> in the DOM
const paras = document.querySelectorAll('p'); 
paras.forEach( para => {
    console.log(para);
});

// Selects all elements with class = "error" in the DOM
const errors = document.querySelectorAll('.error'); 
errors.forEach( error =>{
    console.log(error);
});

// Gets elements by ID
const title = document.getElementById('page-title');
console.log(title);

// Gets elements by class name
const errorsOne = document.getElementsByClassName('error');
console.log(errorsOne);

// Get element by tag name
const pTags = document.getElementsByTagName('p');
console.log(pTags);


//////////////////////////////////////////////////
////////// CHANGE ELEMENTS ON THE DOM  ///////////
//////////////////////////////////////////////////

const firstPTag = document.querySelector('p');

// Get Inner text of the firstPTag
console.log(firstPTag.innerText);

// Change the inner text
firstPTag.innerText = 'Ninjas are Awesome!';

const allPTags = document.querySelectorAll('p');

allPTags.forEach( ptag => {
    ptag.innerText += ' New Text';
});


// Change the Entire Content of a div
const content = document.querySelector('.content')
console.log(content.innerHTML);
content.innerHTML = '<h2>This is a new H2 </h2>';



const people = ['Mario','Luigi','Yushi','Boza','Diane'];

people.forEach( person =>{
    content.innerHTML += `<p>${person}</p>`;
});



