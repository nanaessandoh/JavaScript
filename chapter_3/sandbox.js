///////////////////////////////
/////////  FOR LOOPS  /////////
///////////////////////////////


for (let i = 0; i < 5; i++){
    console.log(`Index of loop = ${i}`)
}
console.log('Loop Finished');



const users =  ['Ama','Abena','Kofi', 'Akwasi','Kojo','Yaw'];

for (let i = 0 ; i < users.length; i++){
    //console.log('User is ',users[i]);
    let html = `<div>${users[i]}</div>`;
    console.log(html);
}

///////////////////////////////
//////// WHILE LOOPS  /////////
///////////////////////////////

let i = 0;

 while( i < users.length ){
     console.log('In loop: ',users[i]);
     i++;
}


///////////////////////////////
///// DO WHILE LOOPS  /////////
///////////////////////////////

i =  5;
do {
    console.log('In loop: ',users[i]);
    i++;
} while (i<5);


///////////////////////////////
//////////////  IF   //////////
///////////////////////////////

const hisAge = 25;

if (hisAge > 20){
    console.log('You are over 20 years old');
}

const myNinjas = ['Ryu','Shaun','Chun-Li','Yoshi'];

if (myNinjas.length > 3){
    console.log(`That is a lot of ninjas`);
}


const password = 'p@ssword5';

if ( password.length >= 3 ){
    console.log('The password is long enough')
}


///////////////////////////////
////////// IF / ELSE  /////////
///////////////////////////////


if ( password.length >= 8 ){
    console.log('The password is long enough.');
}
else{
    console.log('Password is not long enough.');
}

if(password.length >= 12){
    console.log('The Password is super strong.');
}
else if (password.length >= 8){
    console.log('Password is long enough');
}
else{
    console.log('Password is not long enough');
}



//////////////////////////////////////
//// LOGICAL OPERATORS && and || /////
//////////////////////////////////////

if(password.length >= 12 && password.includes('@')){
    console.log('The Password is super strong.');
}
else if (password.length >= 8 || password.includes('@')){
    console.log('Password is long enough');
}
else{
    console.log('Password is not long enough');
}


//////////////////////////////////////
///////// LOGICAL NOT (!) ////////////
//////////////////////////////////////


let user = false;

if(!user){
    console.log('Evaluate when True.');
}

console.log(true);
console.log(false);
console.log(!true);
console.log(!false);



//////////////////////////////////////
//////// BREAK & CONTINUE ////////////
//////////////////////////////////////

const scores = [20, 50, 0, 30, 100, 20, 10];

for(i=0; i < scores.length;i++){

    console.log('Your score : ',scores[i]);

    if (scores[i] === 100){
        console.log("Congratulations you've got there highest score");
        break;
    }
}


for(i=0; i < scores.length;i++){

    if (scores[i] === 0){
        continue;
    }
    console.log('Your score : ',scores[i]);

    if (scores[i] === 100){
        console.log("Congratulations you've got thre highest score");
        break;
    }
}


//////////////////////////////////////
//////////////// SWIICH  /////////////
//////////////////////////////////////

const grade = 'C';

switch (grade){

    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('Not a valid grade');
}


//////////////////////////////////////
//// GLOBAL / LOCAL VARIABLES  ///////
//////////////////////////////////////

// Global scope
let theAge = 30;

if(true){
    // local scope
    let theAge = 40;
    console.log('Inside 1st code block: ', theAge);
}
console.log('Outside code block: ', theAge);




