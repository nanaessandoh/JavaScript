//////////////////////////////////////////////
////// OBJECT ORIENTED PROGRAMMNG ////////////
//////////////////////////////////////////////

const name = ['shaun','mario'];  // literal syntax

const ages = new Array( 1, 2, 4, 3, 6, 9); // new keyword and constructor

const nameOne = 'Mario'; // not an object  - Javascript uses object wrappers so we can use methods on the string. eg. ToUpperCase
const nameTwo = new String('Ryo'); // an object



//////////////////////////////
////// OBJECT LITERAL ///////
/////////////////////////////


// Not the best way since we cannot reuse the methods

const userOne = {
    name: 'ryu',
    email: 'ryu@gmail.com',
    login(){
        console.log(`${this.name} logged in`);
    },
    logout(){
        console.log(`${this.name} logged out`);
    }
};

console.log(userOne.name,userOne.email);
userOne.login();
userOne.login();


//////////////////////
////// CLASSES ///////
//////////////////////


class User{

    constructor (username, email) {
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login(){
        console.log(`${this.username} just logged in`);
        // Add to enable chaining
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        // Add to enable chaining
        return this;
    }
    incScore(){
        this.score++;
        console.log(`${this.username} has a score of ${this.score}`);
        // Add to enable chaining
        return this;
    }
}


// The 'New' Keywork
// 1 - it creates a new empty object
// 2 - it binds the value of  'this' to the empty object
// 3 - it calls the constructor function to build the object

const userThree = new User('mario', 'mario@gmail.com');
const userFour = new User('luigi', 'luigi@gmail.com');

console.log(userThree, userFour);
userThree.login();
userFour.logout();
userThree.incScore();
userThree.incScore();



//////////////////////////////////////////
////// METHOD CHAINING FOR OBJECTS ///////
//////////////////////////////////////////

// Only works for methods with return type
// If method does not have a return type return 'this'

userFour.login().incScore().incScore().incScore().logout();


////////////////////////////////
////// CLASS INHERITANCE ///////
////////////////////////////////

class Admin extends User{

    constructor(username, email,title){
        super(username, email);
        this.title = title;

    }

    deleteUser(user){
        users = users.filter( asset => {
            return asset.username !== user.username;
        });

    }

}

const userFive = new Admin('shaun', 'shaun@gmail.com', 'Balck Belt Ninja');
console.log(userFive);
userFive.login();



let users = [userThree, userFour, userFive];
console.log(users);

userFive.deleteUser(userFour);
console.log(users); 