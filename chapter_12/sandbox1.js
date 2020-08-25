///////////////////////////////
///////// ASYNC CODE  /////////
///////////////////////////////


/////////////////////////////////
///////// HTTP REQUEST  /////////
/////////////////////////////////
// Request to a server(API) endpoint
// Format is in the form of JSON
// 100 - Information responses
// 200 - Success responses
// 300 - Redirection responses
// 400 - Client error resonses
// 500 - Server error responses

  
const getTodos = (resource) => {

    return new Promise ((resolve,reject) => {

        // Create an HTTP request object
        const request = new XMLHttpRequest();

        // Add event listener to the requenst
        request.addEventListener('readystatechange', () => {
        
            // Check if the Request is complete
            if(request.readyState === 4 && request.status === 200){
             const data = JSON.parse(request.responseText); // Convert JSON string to Javascript Object
             resolve(data);
            } else if( request.readyState === 4){   // Else report error
             reject('Error getting resource');
            }
        });
        
        // Request to be sent
        request.open('GET', resource);
        request.send();

    });
};


getTodos('todos/luigi.json').then( data => {
    console.log('Promise 1 Resolved',data);
    return getTodos('todos/mario.json');
}).then( data => {
    console.log('Promise 2 Resolved', data);
    return getTodos('todos/shaun.json');
}).then( data => {
    console.log('Promise 3 Resolved', data);
}).catch(error => { // One catch for several chains
    console.log('Promise Rejected', error);
});


// Promise Example
// Promise is something that can take sometime to do
// Resolved us accepted(success) or ignored (error)

const getSomething = () =>{

    return new Promise((resolve, reject) => {
        // fetch something (comment one out)
        resolve('Example Some Data');
        reject('Example Some Error');
    });
};

getSomething().then((data) =>{
    console.log(data);
}).catch(error => {
    console.log(error);
});


