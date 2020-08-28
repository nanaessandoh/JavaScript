///////////////////////////////////
////// LOCAL SOTORAGE   ///////////
///////////////////////////////////

// store data in local storage
localStorage.setItem('name','mario'); // Arguments (name of key, value of key)
localStorage.setItem('age', 50);


// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);


// Update the valiue
localStorage.setItem('name', 'luigi');
localStorage.age = '40';

name = localStorage.getItem('name');
age = localStorage.getItem('age');


console.log(name, age);


// Delete from local storage
localStorage.removeItem('name');

name = localStorage.getItem('name');
console.log(name);


// Remove all items from local storage
localStorage.clear()

age = localStorage.getItem('age');
console.log(name,age);



//////////////////////////////////////////////
////// STRINGIFY AND PARSING DATA   //////////
//////////////////////////////////////////////

const todos =[
    {text:'play mariokart', author:'shaun'},
    {text:'buy some milk', author:'mario'},
    {text:'buy some bread', author:'luigi'}
];
console.log(todos);

// Convert to string and store 
console.log(JSON.stringify(todos));
localStorage.setItem('todos',JSON.stringify(todos));


const stored = localStorage.getItem('todos');
console.log(stored);
// Convert back to JSON
console.log(JSON.parse(stored));