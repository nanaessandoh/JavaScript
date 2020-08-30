import {styleBody, addTitle, contact} from './dom';
import users,{getPremUsers} from './data';

console.log('Index file');
addTitle("Test");


styleBody();
addTitle('Hello, from the DOM file');

addTitle(contact);


const premUsers = getPremUsers(users);
console.log(users, premUsers);

console.log('Test 3');