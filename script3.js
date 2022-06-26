"use strict";

// a promise can have only two outcomes: resolve and reject
// resolve: data is successfully fetched (success)
// reject: data can't get fetched (failure)

const getSomething = () => {
  const a = 1;
  // Promise() constructor is called and a new promise object gets created and returned
  return new Promise((resolve, reject) => {
    if (a === 0) {
      resolve("some data"); // for promise resolve
    } else {
      reject("some error"); // for promise reject
    }
  });
};

// then() contains two callbacks
// first callback is fired if promise gets resolved
// second callback is fired if promise gets rejected

getSomething().then(
  data => console.log(data),
  err => console.log(err)
);

getSomething()
  .then(data => console.log(data)) // promise resolved
  .catch(err => console.log(err)) // promise rejected (to catch error)
  .finally(console.log("I will be executed in both the cases whether resoved or rejected"));
