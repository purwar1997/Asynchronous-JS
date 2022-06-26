'use strict';

// using promises

const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const isUserOnline = true;

    if (isUserOnline) {
      setTimeout(() => {
        resolve({ userEmail: email, password: password });
      }, 4000);
    } else {
      reject(new Error('Could not get user data'));
    }
  });
};

const getUserContact = () => {
  return new Promise((resolve, reject) => {
    const isUserOnline = true;

    if (isUserOnline) {
      setTimeout(() => {
        resolve('9897887871');
      }, 2000);
    } else {
      reject(new Error("Could not get user's contact"));
    }
  });
};

const callUser = () => {
  return new Promise((resolve, reject) => {
    const isUserOnline = true;

    if (isUserOnline) {
      setTimeout(() => {
        resolve('Calling user');
      }, 1000);
    } else {
      reject(new Error("User can't be called"));
    }
  });
};

// promise chaining
loginUser('shubham1997@outlook.com', 'look1223')
  .then(user => {
    console.log(user);
    return getUserContact();
  })
  .then(contactNo => {
    console.log(contactNo);
    return callUser();
  })
  .then(callStatus => console.log(callStatus))
  .catch(err => console.log(err.message))
  .finally(() => console.log('Operation complete'));

// using Proimise.all()
Promise.all([loginUser('sp@hotmail.com', 'pass12'), getUserContact(), callUser()]).then(result => console.log(result));
