//////////////////////////////////////////////
////// OBJECT ORIENTED PROGRAMMNG ////////////
//////////////////////////////////////////////

///////////////////////////////////
////// CONSTRUCTOR FUNCTION ///////
///////////////////////////////////


// Old Way of Constructor Function, Constructor and Class Methods

function User(username, email) {
    this.username = username;
    this.email = email;
    this.login = function(){
        console.log(`${this.username} just logged in`);
        return this;
    };
}


const userOne = new User('mario', 'mario@gmail.com');
console.log(userOne);
userOne.login();


///////////////////////////////////
////// PROTOTYPE MODEL  ///////////
///////////////////////////////////

// Ever object in javascipt has a prototype
// The prototype contains all the methods that can be used on the object


User.prototype.logout = function (){
    console.log(`${this.username} just logged out`);
    return this;
}

const userTwo = new User('luigi', 'luigi@gmail.com');
console.log(userTwo);
userTwo.logout();


// Chaining object Methods
userOne.logout().login();


/////////////////////////////////////////
////// PROTOTYPE INHERITANCE  ///////////
/////////////////////////////////////////

function Admin(username, email, title){
    User.call(this, username, email);
    this.title = title;
}

// Copy Methods from User into Admin
Admin.prototype = Object.create(User.prototype);

// Create method for Admin class
Admin.prototype.deleteUser = function (){
    console.log('Deleted User');
}


const userThree = new Admin('shaun', 'shaun@gmail.com','blck belt ninja');
console.log(userThree);

userThree.login();
userThree.logout();