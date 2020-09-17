// Once an assignment is made to a variable the type type cannot be changed
let myName = 'Kwame';
let age = 30;
let isBlackelt = true;

// wrong assignments
// myName = 30;
// age = 'Ama';
// isBlackelt = 50;


const circ  = (diameter: number) => { // Define diameter as a number
     return Math.PI * (diameter/2)**2; 
} 

console.log(circ(12));

// console.log(circ('Mama')); // Flags an error



////////////////////
///// Arrays ///////
////////////////////

let friends = ['luigi', 'shaun', 'mario'];

console.log(friends);

// Permitted
friends.push('Trevor');
console.log(friends);

// friends.push(50); // flagged as error

let numbers = [20, 30, 40 , 50];

// Allowed
numbers.push (10);
console.log(numbers);


// numbers.push ('mario'); // fslagged and error



//////////////////////////
/////// Mixed Array //////
/////////////////////////

let mixed = ['ken', 4, 'chun-li', 8, 9];
console.log(mixed);

// Allowed
mixed.push('ryu');
mixed.push(10);
mixed[0] = 245;

console.log(mixed);



////////////////////
///// Objects //////
////////////////////

let ninja  =  {
     name : 'mario',
     belt : 'black',
     age : 30
}

// Allowed
ninja.age = 40;
ninja.name  = 'Ryu';

// ninja.age = 'Susan' // Not Allowed
// ninja.skills = ['figting', 'sneaking']; // New Porperties cannot be added


///////////////////////////
///// Explicit types //////
///////////////////////////

let character: string;
let myAge: number;
let isLoggedIn: boolean;
let myNinjas: string[] = [];
let ninjaOne: object;
let ninjaTwo: {
     name: string,
     age : number,
     belt : string
}

age = 30; // Allowed
//age  = 'Ama' // Not Allowed

isLoggedIn = true; // Allowed
//isLoggedIn = 30; // Not Allowed


///////////////////////////
/////// Union Types ///////
///////////////////////////

let mixedArray: (string|number)[] = [];
mixedArray.push(34);
mixedArray.push('Ryu');
mixedArray.push(56);
mixedArray.push('Mario');
mixedArray.push('Luigi');
// mixedArray.push(true); // Not Allowed


let mixedArrayOne: (string|number|boolean)[] = []; // Array takes 3 type


ninjaOne = {name:'Ama', age:30};
console.log(ninjaOne);

ninjaTwo = {
     name :'Mario',
     age: 45,
     belt : 'Black'
};

console.log(ninjaTwo);

/////////////////////////
/////// Any Types ///////
/////////////////////////

let marioAge: any = 20; // variable accepts any type

marioAge = true;
console.log(marioAge);
marioAge = 34;
console.log(marioAge);
marioAge = 'Shaun';
console.log(marioAge);


let newMixed: any[] = [];

newMixed.push(false);
newMixed.push(30);
newMixed.push('Yoshi');
console.log(newMixed);

let bestNinja: { // object with properties that accept any type
     name: any,
     age: any
}


/////////////////////////
/////// Functions ///////
/////////////////////////


let greet = () => {
     console.log('Hello, World');
};


greet();

greet = () =>{
     console.log('Change greet')
};

greet();



const add = (a: number, b: number) =>{
     console.log(a+b);
};

add(5,10);


// Functions with optional Parameters
const addOne = (a: number, b: number, c?: number) =>{
     console.log(a+b);
};

addOne(5,10);


// Functions with default Parameters
const addTwo = (a: number, b: number, c: number|string = 10) =>{
     console.log(a+b);
     console.log(c);
};

addTwo(5,10);
addTwo(5,10,'50');


// Infer the return type
const minus = (a: number, b: number): number => {
     return a-b;
};

let Value = minus(10,7);


/////////////////////////
/////// Aliases ///////
/////////////////////////

type StringOrNum = string|number;
type ObjWithName = { name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item : string) => {
     console.log(`${item} has a UID of ${uid}`)
};

// function that accepts an object
const greetUser = ( user: ObjWithName) => {
     console.log(`${user.name} says hello`);
};



/////////////////////////////////////
/////// Function Signatures ////////
////////////////////////////////////

// example 1
let greetOne: (a: string, b: string) => void;  // Define Parameters andd return type

greetOne = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number; // Define parameters and return type

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3
let logDetail: (obj: {name: string, age: number}) => void;

logDetail = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}


////////////////////////
/////// Classes ////////
////////////////////////


// Classes
class Invoice {
     // readonly client: string; // Cannot be changed
     // private details: string; // Can be accessed only in the class
     // public amount: number;
 
     // constructor(_client: string, _details: string, _amount: number)
     // {
     //     this.client=_client;
     //     this.details=_details;
     //     this.amount = _amount;
 
     // }
 
      constructor(
         readonly client: string,
         private details: string, 
         public amount: number,
     ){}
 
 
     format(){
         return `${this.client} owes $${this.amount} for ${this.details}`;
     }
 
 }
 
 
 const invOne = new Invoice ('Mario', 'Work on Mario Website', 200);
 const invTwo = new Invoice ('Luigi', 'Work on Luigi Website', 350);
 
 console.log(invOne);
 console.log(invTwo);
 
 let invoices: Invoice[] = [];
 
 invoices.push(invOne);
 invoices.push(invTwo);
 
 console.log(invoices);
 
 // invOne.client = 'Yoshi'; // readonly
 invTwo.amount = 400;
 
 console.log(invOne);
 console.log(invTwo);
 
 
 invoices.forEach( inv => {
     console.log(inv.format());
 });



///////////////////////////
/////// Interfaces ////////
///////////////////////////

// Interfaces

interface IsPerson{
     name : string;
     age : number;
     speak(a: string): void;
     spend(a: number): number;
 };
 
 const MySelf : IsPerson = {
     name: 'Shaun',
     age: 50,
     speak ( text: string){
         console.log(text);
     },
     spend(amount: number){
         console.log(`I spent ${amount}`);
         return amount;
     }
 }
 
 let SomeOne : IsPerson; // Forces Someone to be a person



//////////////////////////
/////// Generics ////////
/////////////////////////


const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}


let docOne = addUID({name: 'yoshi', age: 40});
console.log(docOne);

// Enums
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

// with interfaces
interface Resource<T> {
     uid: number;
     resourceName: ResourceType;
     data: T;
   }
   
   const docThree: Resource<object> = {
     uid: 1, 
     resourceName: ResourceType.BOOK, 
     data: { name: 'shaun' }
   };
   
   const docFour: Resource<string[]> = {
     uid: 1, 
     resourceName: ResourceType.FILM, 
     data: ['bread', 'milk']
   };
   
   console.log(docThree, docFour);



///////////////////////
/////// Tuples ////////
///////////////////////

// TUPLES
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';

let student: [string, number];
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];