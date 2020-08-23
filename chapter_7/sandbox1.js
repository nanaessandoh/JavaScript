//////////////////////////////////
//////// SUBMIT EVENTS  //////////
/////////////////////////////////

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e =>{
    // Prevent Default action of form reload
    e.preventDefault();

    // Validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/; // Word 6- 12 character long, lower/uppercase case letters

    if (usernamePattern.test(username)){
        //feedback good info
        feedback.textContent = 'That username is valid';
    }
    else{
        // feedback help info
        feedback.textContent = 'Username must contain letters only & be between 6 and 12 characters long';

    }
});




