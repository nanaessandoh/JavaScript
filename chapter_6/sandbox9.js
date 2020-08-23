/////////////////////////////////////////////////////
////////////////// MORE DOM EVENTS  /////////////////
/////////////////////////////////////////////////////

 // Getting a copy event
const copy  = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
 console.log('My content is Copyright');
});


// Getting a mouse event

const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
    //console.log(e);
    //console.log(e.offsetX, e.offsetY);
    box.textContent = `X pos ${e.offsetX} - Y pos ${e.offsetY}`;
});


// Getting a mouse wheel event

document.addEventListener('wheel', e =>{
    console.log(e.pageX,e.pageY);
});