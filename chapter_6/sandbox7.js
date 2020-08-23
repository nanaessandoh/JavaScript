/////////////////////////////////////////////////////////////////////
////////////////// CREATING AND REMOVING ELEMENTS  /////////////////
////////////////////////////////////////////////////////////////////


// Remove Item from the DOM
const items = document.querySelectorAll('li');
items.forEach(item =>{
    item.addEventListener('click',e =>{
     e.target.remove();
    });
});


// Create an Element in the DOM

const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () =>{
    ul.innerHTML += '<li> Something New </li>';
})

// OR

button.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.textContent = 'something New to do';
    // Append to the UL tag
    ul.append(li);
    // Prepend to the UL tag
    //ul.prepend(li);
})

