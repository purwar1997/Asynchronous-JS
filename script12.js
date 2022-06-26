'use strict';

// callbacks can be synchronous as well as asynchronous

// synchronous callbacks
console.log('Start');

const items = [12, 90, 78, 0];
items.forEach((item, index) => console.log(`Item ${index + 1}: ${item}`));

const ascending = items.sort((a, b) => a - b);
console.log(ascending);

console.log('End');

// asynchronous callbacks
console.log('Start');

setTimeout(() => {
  console.log('Timer is now expired');
}, 4000);

// const clickButton = document.querySelector('.click');
// clickButton.addEventListener('click', () => {
//   console.log('Wow!');
//   alert('You clicked this button');
// });

console.log('End');

function loginUser(email, password, callback) {
  setTimeout(() => {
    callback({ userEmail: email, password: password });
  }, 4000);
}

function getUserContact(callback) {
  setTimeout(() => {
    callback(`9897887870`);
  }, 2000);
}

function callUser(callback) {
  setTimeout(() => {
    callback('User is being called');
  }, 1000);
}

// callback hell: callbacks are nested inside each other
loginUser('shubham1997@outlook.com', 'look1223', user => {
  console.log(user.userEmail, user.password);
  getUserContact(contact => {
    console.log(contact);
    callUser(status => console.log(status));
  });
});
