'use strict';

const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const isUserOnline = true;

    if (isUserOnline) {
      setTimeout(() => {
        resolve({ userEmail: email, password: password });
      }, 4000);
    } else {
      reject('Could not get user data');
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
      reject("Could not get user's contact");
    }
  });
};

const callUser = () => {
  return new Promise((resolve, reject) => {
    const isUserOnline = false;

    if (isUserOnline) {
      setTimeout(() => {
        resolve('Calling user');
      }, 1000);
    } else {
      reject("User can't be called");
    }
  });
};

// using async/await
const user = async function () {
  const userData = await loginUser('purwar05@gmail.com', 'pass123');
  console.log(userData);

  const contact = await getUserContact();
  console.log(contact);

  const callStatus = await callUser();
  console.log(callStatus);
};

user()
  .then(() => console.log('All operations are successful'))
  .catch(err => console.log(err));

// using throw, catch and finally blocks
const user1 = async function () {
  try {
    const userData = await loginUser('purwar05@gmail.com', 'pass123');
    console.log(userData);

    const contact = await getUserContact();
    console.log(contact);

    const callStatus = await callUser();
    console.log(callStatus);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('GoodBye!');
  }
};

user1();
