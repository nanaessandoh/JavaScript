var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Once an assignment is made to a variable the type type cannot be changed
var myName = 'Kwame';
var age = 30;
var isBlackelt = true;
// wrong assignments
// myName = 30;
// age = 'Ama';
// isBlackelt = 50;
var circ = function (diameter) {
    return Math.PI * Math.pow((diameter / 2), 2);
};
console.log(circ(12));
// console.log(circ('Mama')); // Flags an error
////////////////////
///// Arrays ///////
////////////////////
var friends = ['luigi', 'shaun', 'mario'];
console.log(friends);
// Permitted
friends.push('Trevor');
console.log(friends);
// friends.push(50); // flagged as error
var numbers = [20, 30, 40, 50];
// Allowed
numbers.push(10);
console.log(numbers);
// numbers.push ('mario'); // fslagged and error
//////////////////////////
/////// Mixed Array //////
/////////////////////////
var mixed = ['ken', 4, 'chun-li', 8, 9];
console.log(mixed);
// Allowed
mixed.push('ryu');
mixed.push(10);
mixed[0] = 245;
console.log(mixed);
////////////////////
///// Objects //////
////////////////////
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
// Allowed
ninja.age = 40;
ninja.name = 'Ryu';
// ninja.age = 'Susan' // Not Allowed
// ninja.skills = ['figting', 'sneaking']; // New Porperties cannot be added
///////////////////////////
///// Explicit types //////
///////////////////////////
var character;
var myAge;
var isLoggedIn;
var myNinjas = [];
var ninjaOne;
var ninjaTwo;
age = 30; // Allowed
//age  = 'Ama' // Not Allowed
isLoggedIn = true; // Allowed
//isLoggedIn = 30; // Not Allowed
///////////////////////////
/////// Union Types ///////
///////////////////////////
var mixedArray = [];
mixedArray.push(34);
mixedArray.push('Ryu');
mixedArray.push(56);
mixedArray.push('Mario');
mixedArray.push('Luigi');
// mixedArray.push(true); // Not Allowed
var mixedArrayOne = []; // Array takes 3 type
ninjaOne = { name: 'Ama', age: 30 };
console.log(ninjaOne);
ninjaTwo = {
    name: 'Mario',
    age: 45,
    belt: 'Black'
};
console.log(ninjaTwo);
/////////////////////////
/////// Any Types ///////
/////////////////////////
var marioAge = 20; // variable accepts any type
marioAge = true;
console.log(marioAge);
marioAge = 34;
console.log(marioAge);
marioAge = 'Shaun';
console.log(marioAge);
var newMixed = [];
newMixed.push(false);
newMixed.push(30);
newMixed.push('Yoshi');
console.log(newMixed);
var bestNinja;
/////////////////////////
/////// Functions ///////
/////////////////////////
var greet = function () {
    console.log('Hello, World');
};
greet();
greet = function () {
    console.log('Change greet');
};
greet();
var add = function (a, b) {
    console.log(a + b);
};
add(5, 10);
// Functions with optional Parameters
var addOne = function (a, b, c) {
    console.log(a + b);
};
addOne(5, 10);
// Functions with default Parameters
var addTwo = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
addTwo(5, 10);
addTwo(5, 10, '50');
// Infer the return type
var minus = function (a, b) {
    return a - b;
};
var Value = minus(10, 7);
var logDetails = function (uid, item) {
    console.log(item + " has a UID of " + uid);
};
// function that accepts an object
var greetUser = function (user) {
    console.log(user.name + " says hello");
};
/////////////////////////////////////
/////// Function Signatures ////////
////////////////////////////////////
// example 1
var greetOne; // Define Parameters andd return type
greetOne = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2
var calc; // Define parameters and return type
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetail;
logDetail = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
////////////////////////
/////// Classes ////////
////////////////////////
// Classes
var Invoice = /** @class */ (function () {
    // readonly client: string; // Cannot be changed
    // private details: string; // Can be accessed only in the class
    // public amount: number;
    // constructor(_client: string, _details: string, _amount: number)
    // {
    //     this.client=_client;
    //     this.details=_details;
    //     this.amount = _amount;
    // }
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('Mario', 'Work on Mario Website', 200);
var invTwo = new Invoice('Luigi', 'Work on Luigi Website', 350);
console.log(invOne);
console.log(invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// invOne.client = 'Yoshi'; // readonly
invTwo.amount = 400;
console.log(invOne);
console.log(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.format());
});
;
var MySelf = {
    name: 'Shaun',
    age: 50,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log("I spent " + amount);
        return amount;
    }
};
var SomeOne; // Forces Someone to be a person
//////////////////////////
/////// Generics ////////
/////////////////////////
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
;
var docThree = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { name: 'shaun' }
};
var docFour = {
    uid: 1,
    resourceName: ResourceType.FILM,
    data: ['bread', 'milk']
};
console.log(docThree, docFour);
///////////////////////
/////// Tuples ////////
///////////////////////
// TUPLES
var arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
var tup = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';
var student;
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];
