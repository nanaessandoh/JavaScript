const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const resultVal = result.querySelector('span');


form.addEventListener('submit', e =>{
    // Prevent Default reload
    e.preventDefault();

    let score  = 0;
    
    // Get Answers from the form
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    // Check Answers
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score+=25;
        }

    })

    
    //////////// Display the Score /////////////
    // Scroll window to the top
    // Remove the d-none class to dislay the div
    // Set the result value from the span to the score
  
  
    scrollTo(0,0);    // OR window.scrollTo(0,0);
    result.classList.remove('d-none');
    
    
    let output = 0;
    const timer = setInterval(() =>{
        resultVal.textContent = `${output}%`;
        if (output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10); // 10 milliseconds
});


