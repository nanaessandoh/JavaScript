/////////////////////////////////////////////////////////////////////
////////////////// EVENT BUBBLING AND DELEGATION  /////////////////
////////////////////////////////////////////////////////////////////

const ul = document.querySelector('ul');
const button = document.querySelector('button');


// const items = document.querySelectorAll('li');

// // Remove Element from the DOM
// items.forEach(item =>{
//     item.addEventListener('click',e =>{
//      e.target.remove();
//      console.log('Event in LI');
//      // Stop Bubbling
//      e.stopPropagation();
//     });
// });


// Adding Element to the DOM
button.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.textContent = 'something New to do';
    // Append to the UL tag
    ul.append(li);
})



ul.addEventListener('click', e =>{
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})
