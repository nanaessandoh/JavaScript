//////////////////////////////////////
///// FUNCTIONS DECLARATION  /////////
//////////////////////////////////////


function greet(){
    console.log('Hello There');
}

// Call the function
greet();
greet();


//////////////////////////////////////
////// FUNCTION EXPRESSION  //////////
//////////////////////////////////////

// Function Expression need to be implemented before calling them
const speak = function(){
    console.log('Good Day');
};

// Call the function (This call can only be done because speak has been implemented above)
// Speak () can never be call above its implementation because an error will occure
speak();
speak();


const talk = function (name){
    console.log(`Good Day ${name}`);
};

talk('John');



//////////////////////////////////////////
////// FUNCTION WITH ARGUMENTS  //////////
//////////////////////////////////////////

const hail = function (name, time){
    console.log(`Good ${time} ${name}`);
};

hail('Luigi', 'Evening');



///////////////////////////////////////////////////////////////
///////// INITIALIZE FUNCTIONS WITH DEFAULT VALUES  //////////
//////////////////////////////////////////////////////////////

const greet2 = function (name = 'Mark', time= 'Afternoon'){
    console.log(`Good ${time} ${name}`);
};

greet2();
greet2('Luigi');
greet2('Luigi','Morning');



//////////////////////////////////////////////////
/////////  FUNCTIONS WITH RETURN TYPES  //////////
///////////////////////////////////////////////////


const calcArea = function(raduis){
    return 3.14 ** raduis**2;
};


console.log(calcArea(5));




/////////////////////////////////
////// ARROW FUNCTION  //////////
/////////////////////////////////

// One Parameter

// type 1 
const calcArea1 = raduis =>{
    return 3.14 ** raduis**2;
}

console.log(calcArea1(5));

// type 2 (remove return and curly braces)

const calcArea2 = raduis => 3.14 ** raduis**2;

console.log(calcArea2(5));


// Multiple Parameter
const calcVolume = (length,breath, width) =>{
    return length * breath * width;
}

console.log(calcVolume(1,2,3));



///////////////////////////////////////////////////
/////////  PRACTICE ARROW FUNCTIONS  //////////////
///////////////////////////////////////////////////

// const greet3 = function(){
//     return 'hello world'
// };

const greet3 = () => 'hello World';

console.log(greet3());

// const bill = function (products, tax){
//     let total = 0
//     for(let i = 0 ; i < products.length;i++){
//         total += products[i] * tax;
//     }
//     return total;
// };

const bill = (products, tax) => {
    let total = 0
    for(let i = 0 ; i < products.length;i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10,15,30],0.2));




//////////////////////////////////////////////////
////////  DIFF B/N FUNCTIONS & METHODS  //////////
//////////////////////////////////////////////////


// function

const greet4 = () => 'hello';
console.log(greet4());


// Method ( We use the dot(.) notation )
// Method are defined on objects or datatypes

const name = 'Shaun';
let testMethod = name.toUpperCase(); // toUpperCase is a method called on the name variable
console.log(testMethod);


///////////////////////////////////////////////////////
////////  CALLBACK FUNCTIONS / FOREACH  ///////////////
///////////////////////////////////////////////////////

// Functions with a function as a parameter


const myFunct = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
}


// Call the function

myFunct(value => {
    // do something
    console.log(value)
});


const people = ['Mario', 'Luigi', 'Ryu', 'Shaun', 'Chung-Li'];


people.forEach((person) => console.log(`The Current Person is ${person}`));

people.forEach((person, index) => {
    console.log(`${index} - ${person}`);
}
);


// Define logPerson separately nand pass it to the method forEach
const logPerson = (person, index) =>{
    console.log(`${index} - ${person}`);
}


people.forEach(logPerson);



const ul = document.querySelector('.myPeople');
let html = ``;

people.forEach(person =>{
    // Create HTML Template
    html += `<li style="color: purple">${person}</li>`;
})


console.log(html);
// Push to HTML
ul.innerHTML = html;
