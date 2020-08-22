//////////////////////////////////////////////////
////////// Get/ Set Attribute  ///////////////////
//////////////////////////////////////////////////


const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href','http://www.nanaessandoh.com');
link.innerText = 'Link to my personal website';


const pTag = document.querySelector('p');
pTag.setAttribute('class','success');


pTag.setAttribute('style','color: red');

