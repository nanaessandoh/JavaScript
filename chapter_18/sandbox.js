//////////////////////////////
////// REST PARAMETER ///////
/////////////////////////////


const double = (...nums) => {
    // do something
    console.log(nums);
    return nums.map(nums => nums * 2);
};


const result = double(1,2,3,4,5,6,7);
console.log(result);



///////////////////////////////
////// SPREAD PARAMETER ///////
///////////////////////////////

// spread syntax arrays
const people = ['shaun','ryu','kojo','ama'];
console.log(...people);

const members = ['mario','luigi',...people];
console.log(members);


// spread syntax (objects)
const person = { name: 'shaun',
                 age: 30,
                job: 'net ninja'};

const personClone = {...person, location : 'New York'};

console.log(person);
console.log(personClone);



///////////////////
////// SETS ///////
///////////////////

const namesArray = ['ryu','chun-li','ryu','shaun']; // ryu is duplicated
console.log(namesArray);

// sets dont allow duplicates
const namesSets = new Set(namesArray);
console.log(namesSets);

// Use spread syntax to convert a set back to an array
const uniqueNames = [...namesSets];
console.log(uniqueNames);

// Simplify into one line
const uniqueNamesOne = [...new Set(namesArray)];
console.log(uniqueNamesOne);


// Add to set
const ages  = new Set();
ages.add(20).add(40).add(23).add(20); // disrigards the last 20 since 20 already exists 
console.log(ages);

// Delete from set
ages.delete(40);
console.log(ages);

// Size of a set
console.log(ages.size);

// Check is value is present
console.log(ages.has(20));

// Clear set
ages.clear();
console.log(ages);


// Cycle through a set
const ninjas = new Set([
    {name: 'shaun', age: 30},
    {name: 'crystal', age: 29},
    {name: 'chun-li', age: 32}
  ]);
  
  ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age);
  });



/////////////////////
////// SYMBOL ///////
/////////////////////

const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const ninja = {};
ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';

// Same identify but still unique
ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';

console.log(ninja);