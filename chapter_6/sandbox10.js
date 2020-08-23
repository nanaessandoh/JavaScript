/////////////////////////////////////////////////////////////////////
////////////////// BUILDING A POPUP  /////////////////
////////////////////////////////////////////////////////////////////
const button  = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const closeX = document.querySelector('.popup-close');


// Button Displays Popup
button.addEventListener('click', () =>{
    popup.style.display = 'block';
})

// Close removes the Popup
closeX.addEventListener('click', () =>{
    popup.style.display = 'none';
})


// Close removes the Popup
popup.addEventListener('click', () =>{
    popup.style.display = 'none';
})