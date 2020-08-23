//////////////////////////////////////////////////
////////////////// EVENT BASICS  /////////////////
//////////////////////////////////////////////////

// Add event listener to a button
const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    console.log('you clicked me');
});


const items = document.querySelectorAll('li');
items.forEach(item =>{
    item.addEventListener('click',e =>{
      //  console.log(e.target); // Style 1
     //   console.log(item); // Style 2
     e.target.style.textDecoration = 'line-through';
    });
});