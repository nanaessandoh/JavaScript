//////////////////////////////
///////// FETCH API  /////////
//////////////////////////////

fetch('todos/luigi.json').then(response => {
    console.log('Resolved', response);
    return response.json();
}).then( data =>{
    console.log(data);
}).catch(error => {
    console.log('Rejected',error);
});



//////////////////////////////////
///////// ASYNC & AWAIT  /////////
/////////////////////////////////


// Any function with async returns a promise 
const getTodos = async () =>{
    const response = await fetch('todos/mario.json');
    if (response.status !== 200){
        throw new Error('Cannot fetch the data');
    }
    const data = await response.json();
    return data;
}

getTodos()
    .then( data => console.log('Resolved', data))
    .catch( error => console.log('Rejected', error.message));
            

