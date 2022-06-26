"use strict";

// Promise syntax

const getData = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve(console.log("Promise resolved"));
    } else {
      reject("Promise rejected");
    }
  });
};

getData()
  .then(() => getData())
  .then(() => getData())
  .then(() => getData())
  .catch(err => console.log(err))
  .finally(() => console.log("Code will be executed anyway"));

// Async/Await syntax

const abc = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve();
    } else {
      reject();
    }
  });
};

async function getData2() {
  try {
    await abc();
    console.log("function abc does exist");
    // if promise is rejected, control will jump to catch block
  } catch {
    console.log("function abc doesn't exist");
    // getData() will return promise in a resolved state by default if no error is thrown
    // getData() will return promise in a rejected state if an error is thrown
    throw new Error("Can't get data"); // throwing custom error
  } finally {
    console.log("code will be executed anyway");
  }
}

// async functions always returns a promise
getData2()
  .then(() => console.log("Resolved"))
  .catch(err => console.log("Rejected", err.message))
  .finally(() => console.log("Executed anyway"));
