//////////////////////////////////////////////////
////////// ADDING AND REMOVING CLASSES  //////////
//////////////////////////////////////////////////


const content = document.querySelector('p');


// adding and removing a class
content.classList.remove('error');
content.classList.add('success');

const pTags = document.querySelectorAll('p');

console.log(pTags);

pTags.forEach( Ptag =>{
    if(Ptag.textContent.includes('error')){
     Ptag.classList.add('error');
    }
    if(Ptag.textContent.includes('success')){
        Ptag.classList.add('success');
       }
});


// toggle a class /Adding a class

const firstPTag = document.querySelector('.success');

console.log(firstPTag);

// Take of class Success
firstPTag.classList.toggle('success');
// Add class Error 
firstPTag.classList.toggle('error');