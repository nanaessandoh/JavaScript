const list = document.querySelector("ul");
const form = document.querySelector("form");
const button = document = document.querySelector('button');


// Add recipe to DOM
const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li data-id="${id}">
        <div>${recipe.title}</div>
        <div>${time}</div>
        <button class=" btn btn-danger btn-sm my-2">Delete</button>
    </li>`;
  // console.log(html);
  list.innerHTML += html;
};


// Remove recipe from DOM
const deleteRecipe = (id) =>{
    // Get all the <li> tags in the DOM
    const recipes = document.querySelectorAll('li');

    // if the data-id matches with the id remove the <li>
    recipes.forEach(recipe => {
          if (recipe.getAttribute('data-id') === id){
              recipe.remove();
          }
     });
};

// Retrieve Collections from Database
// Collectio name is 'recipes'
// db is defined in the index.html
const unsub = db.collection('recipes').onSnapshot(snapshot => {

    // Snapshot.doChanges is a firbase function that monitors changes in the databse and fires an event
    snapshot.docChanges().forEach(change =>{
        const doc = change.doc;

        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        }else if(change.type === 'removed'){
            deleteRecipe(doc.id);
        }
    })
});


// Add Document to Collection
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const now = new Date();

  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };

  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added");
    })
    .catch((error) => {
      console.log(error);
    });

    // reset the form
    form.reset();
});


// Delete Document form the Database
// Attach Event listener to the list
list.addEventListener('click', e => { 
    if(e.target.tagName === 'BUTTON'){
        // Get the ID of the Document
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(() =>{
                console.log('recipe removed');
        }).catch( error => {
                console.log(error);
        });
    }
});


// unsuscribe from database changes
button.addEventListener('click', () =>{
    unsub();
    console.log('Unsuscribed from Database changes');

});