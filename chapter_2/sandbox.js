// Output to the screen
console.log(1);
console.log(2);

// Declaring Values
let age = 25;
let year = 2020;

console.log(age, year);

age = 30;
console.log(age);

// Older way to declare in javascript
var goals = 3;
console.log(goals);

// Constant Variable
const points = 100;
console.log(points);

///////////////////////////////
/////////   STRINGS   /////////
///////////////////////////////


console.log("Hello, World"); //double quotes
console.log('Good Morning');
let email = "nanaessandoh@gmail.com";
console.log(email);

// String Concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName +' '+ lastName;
console.log(fullName);

// getting characters
console.log('The third character is '+ fullName[2]);

// String length
console.log(fullName.length);

// String methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);
console.log(result,fullName);

// Index of a character
let index = email.indexOf('@');
console.log('Index of the @ sign is '+ index)

// More String Methods
email = 'mario@thenetninja.co.uk';
result = email.lastIndexOf('n'); // last index of a character in a string
console.log(result);
result = email.slice(0,10); // Slice portion of a string between index 0 to 10
console.log(result); 
result = email.substr(3,8); // Start from index 3 and select the next 8 characters
console.log(result); 
result = email.replace('m','w'); // Replace the first 'm' in the string with 'w'
console.log(result);



///////////////////////////////
/////////    NUMBERS   /////////
///////////////////////////////
let radius = 10;
const pi = 3.14;
console.log(radius, pi);

// math operator +, -, *, /, **, %
console.log(10/2);
result = pi*radius**2;
console.log(result);

// Order of operations - B Indices D M A S
result = 5 *(5-3)**2;
console.log(result);

let likes = 10;
likes++; // likes = likes + 1
console.log(likes);
likes+=1;
console.log(likes);
likes*=9;
console.log(likes);
likes/=2;
console.log(likes);


// NaN
console.log(5/'Hello');
console.log('Hello'*5);

// Concatenate Numbers
result  = 'The blog has '+ likes + ' likes';
console.log(result);


// Template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const upvotes = 24;

// The concatenation way
result = 'The blog called '+ title + ' by ' + author + ' has ' + upvotes + ' upvotes';
console.log(result);

// The template way
result  = `the blog called ${title} by ${author} has ${upvotes} upvotes`;
console.log(result);


// Creating HTML Template
let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${likes}</span>`;

console.log(html);




///////////////////////////////
/////////    ARRAYS   /////////
///////////////////////////////

let ninjas = ['Kofi', 'Ama', 'Ebo'];
console.log(ninjas);
console.log(ninjas[1]);

// Overwrite in an array
ninjas[1] = 'Akua';
console.log(ninjas);


let ages = [23,45,67,22,32,78];
console.log(ages);

let random = ['Ama',34,56,'Kojo'];
console.log(random);


// Array Methods
console.log(ninjas.length);
ninjas.join('-'); // Combine and sperate the elements of the array by the join character
console.log(ninjas);

result = ninjas.concat(['Ken','Abena']) // Does not chnage ninjas
console.log(result);
ninjas.push('Brian');
console.log(ninjas);
result = ninjas.pop(); // returns the last value in the array
console.log(result);




///////////////////////////////
/////////  UNDEFINED  /////////
///////////////////////////////

let myAge;
console.log(myAge, myAge + 3, `The age is ${myAge}`);

myAge = null;
console.log(myAge, myAge + 3, `The age is ${myAge}`);



///////////////////////////////
/////////  BOOLEANS   /////////
///////////////////////////////
console.log(true,false,'true','false')

// method can return booleans

email = 'nanaessandoh@gmail.com';

result = email.includes('@');
console.log(result);

name = ['mario','luigi','toad'];

result = name.includes('bowser');
console.log(result);


age = 25;

console.log(age == 25); // true
console.log(age == 30); // false
console.log(age != 30); // true
console.log(age > 20); // true
console.log(age < 20); // false
console.log(age <= 25); //true
console.log(age >= 25); // true



// Loose comparison (==)
console.log('shaun' == 'shaun'); // true
console.log('shaun' == 'Shaun'); // false - lower case letter is greater than upper case letters
console.log('shaun' > 'Crystal'); // false -  lower case letter is greater than every Upper case letter

console.log(25 == 25); // true
console.log(25 =='25'); // true - string is converted to number 


// Strict comparison (===) Checks value and type match
console.log(25 === 25); // true
console.log(25 === '25'); // false




// type conversion

let score = '100';
console.log(score + 1);
console.log(typeof(score));
score = Number(score); // Convert string to number
console.log(score + 1);
console.log(typeof (score));

let myScore = 50;
myScore = String(50); // Convert number to string
console.log(myScore);
console.log(typeof (score));

result = Boolean(-1); // Negative and positive values are true
console.log(result);
result = Boolean(0); // Zero is always false
console.log(result);

result = Boolean('John'); // All strings are true
console.log(result);
result = Boolean(''); // Empty strings are false
console.log(result);


