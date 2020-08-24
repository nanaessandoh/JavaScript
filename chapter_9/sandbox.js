/////////////////////////////////
//////// ARRAY METHODS //////////
/////////////////////////////////



/////////////////////////////////
//////// ARRAY FILTER //////////
/////////////////////////////////
// return a new array based on a filter we prescribe

const scores =[10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter( score =>{
    return score > 20;
});


console.log(filteredScores);

// Select Users with Premium = true
const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
  ];

const premiumUsers = users.filter( user => {
    //return user.premium === true;
    return user.premium;

});

console.log(premiumUsers);


/////////////////////////////////
//////// MAP METHOD    //////////
/////////////////////////////////
// iterate an array and return an updated array based on our calculation done

const prices =[20, 10, 30, 25, 40, 15, 80, 5];

const salePrice = prices.map(price => {
    return price/2;
});

console.log(salePrice);

// For all products where price is less greater than 30, half them
const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

const saleProducts = products.map( product => {
    if (product.price > 30){
        return {
            name : product.name,
            price: product.price/2
        };
    }else return product
});


console.log(saleProducts);



/////////////////////////////////
////// REDUCE METHOD   //////////
/////////////////////////////////
// returns any value based on what we assign  over the iteration


const scoresOne = [10, 20, 60, 40, 70, 90, 30];

// Find the number of items greater than 50
const result = scoresOne.reduce((accumulator, current) => {
    if (current > 50){
        accumulator++;
    }
    return accumulator;
}, 0); // <== Initial value of accumulator is set to Zero


console.log(result);


// Calculate the total score of Mario
const scoresTwo = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 10},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 20},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 40},
    {player: 'crystal', score: 60}
  ];


  totalMario = scoresTwo.reduce((acc,curr) =>{
      if ( curr.player === 'mario'){
          acc += curr.score;
      }
      return acc;
  },0);

  console.log(totalMario);


/////////////////////////////////
////// FIND METHOD   //////////
/////////////////////////////////
// returns the first value that satisfies a condition


//return first value over 50
const scoresThree = [10, 5, 0 , 40, 60, 10, 20, 70];

const firstHighScore = scoresThree.find((score) => {
    return score > 50;
});

console.log(firstHighScore);





/////////////////////////////////
////// ARRAY SORTING   //////////
/////////////////////////////////
// Destrutive (Changes the original array)

// example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
names.sort();
names.reverse();
console.log(names);



// example 2 - sorting numbers
const scoresFour = [10, 50, 20, 5, 35, 70, 45];
scoresFour.sort(); //Method 1
scoresFour.reverse();
scoresFour.sort((prev,next)=> next - prev); //Method 2
console.log(scoresFour);




// example 3 - sorting objects
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
  ];



//   players.sort((prev,next) =>{
//     if (prev.score > next.score ){
//         return -1; // switch Prev first
//     }else if(next.score > prev.score){
//         return 1; // switch Next first
//     }
//     else return 0; // leave intact
//   });

  players.sort((prev,next)=> next.score - prev.score);

  console.log(players);


/////////////////////////////////
/////// CHAINING ARRAY   ////////
/////////////////////////////////

// Filter and Map

const myProducts = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
  ];


// Filter Products less than 20
const filterProducts = myProducts.filter( product => {
    return product.price > 20;
});


// Map array with sale price
const mapArray = filterProducts.map(product => {
    return `The ${product.name} is ${product.price/2} dollars.`;
});

console.log(mapArray);


// Chain them together
const finalMapArray = myProducts
    .filter(product => product.price > 20)
    .map(product => `The ${product.name} is ${product.price/2} dollars.`);

    
console.log(finalMapArray);
