//////////////////////////////////
////// OBJECTS LITERAL  //////////
//////////////////////////////////

let user = {
    name : 'Crystal',
    email : 'crstal@gmail.com',
    location : 'Toronto',
    subscription : ['Netflix', 'Spotify', 'Youtube', 'Gym']
};

console.log(user);
console.log(user.name);
console.log(user['name']);
console.log(user.location);
console.log(user['location']);

// Change a Value in the object;
user.location = "St. John's";
user['email'] = 'ama@gmail.com'
console.log(user.location);
console.log(user.email);

console.log(typeof user);


//////////////////////////////////
////// OBJECTS METHODS  //////////
//////////////////////////////////

let teacher = {
    name : 'Mario',
    subjects: ['Math', 'English', 'French', 'Art'],

    // Type 1
    localObject : function () {console.log(this);},
    login: function(){
        return `${this.name} logged In`;
    },

    // Type 2
    logout () { 
        console.log(`${this.name} logged out`)
    },
    logSubjects() {
        console.log(`${this.name} teaches the following subjects :`);
        this.subjects.forEach( subject => {
            console.log(subject)
        });
    }
};

console.log(teacher.login());
teacher.logout();
teacher.logSubjects();

//////////////////////////////////////////////////
////// LOCAL  OBJECTS /  GLOBAL OBJECT  //////////
//////////////////////////////////////////////////

// Local Object
teacher.localObject();
// Global Context (window objecet)
console.log(this);


//////////////////////////////////////////////////
////// STORE OBJECTS IN ARRAYS  //////////////////
//////////////////////////////////////////////////


const staff = [
    {name: 'John', age: 23},
    {name: 'Kyle', age: 27},
    {name: 'Jessie', age: 21},
    {name: 'Sarah', age: 21}
];

console.log(staff);


const school = {
    name : 'John Memorial High School',
    yearEstablished : '1920',
    teachers : [
        {name: 'John', age: 23},
        {name: 'Kyle', age: 27},
        {name: 'Jessie', age: 21},
        {name: 'Sarah', age: 21}
    ],
    logStaff(){
        console.log(`The teachers available at ${this.name} are`);
        this.teachers.forEach( teacher =>
            {
                console.log(`${teacher.name} - ${teacher.age} years`);
            }

        );
    }
};

school.logStaff();


//////////////////////////////////////////////////
////////////////// MATH OBJECTS  /////////////////
//////////////////////////////////////////////////


console.log(Math);
console.log(Math.PI); // PI constant
console.log(Math); // Eula constant


const area = 7.24;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// Random Numbers

const random = Math.random();
console.log(random); // Random Number between 0 and 1
console.log(Math.round(random * 100))




//////////////////////////////////////////////////
//////// PRIMITIVE AND REFERENCE TYPES  //////////
//////////////////////////////////////////////////


// Primitive Types (stored on the stack )
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne : ${scoreOne}  scoreTwo : ${scoreTwo}`);

// Change the value of scoreOne
scoreOne = 100;

// scoreOne changes to 100 but scoreTwo remains 50 
console.log(`scoreOne : ${scoreOne}  scoreTwo : ${scoreTwo}`);


// Reference

let userOne = { name: 'Ryu',
            age:    20
        };

let userTwo = userOne;

console.log(userOne,userTwo);

userOne.age = 40;

// Since both are pointing to the same values on heap they show the same output
console.log(userOne,userTwo);