/////////////////////////////////////
//////// KEYBOARD EVENTS  //////////
////////////////////////////////////

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/; // Word 6- 12 character long, lower/uppercase case letters

form.addEventListener('submit', e =>{
    // Prevent Default action of form reload
    e.preventDefault();

    // Validation
    const username = form.username.value;

    if (usernamePattern.test(username)){
        //feedback good info
        feedback.textContent = 'That username is valid';
    }
    else{
        // feedback help info
        feedback.textContent = 'Username must contain letters only & be between 6 and 12 characters long';

    }
});

// Live feedback
form.username.addEventListener('keyup', e => {
    //console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        console.log('Passed');
        form.username.setAttribute('class','success');
    }
    else {
        console.log('Failed');
        form.username.setAttribute('class','error');
    }


})


