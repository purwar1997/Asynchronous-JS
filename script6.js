"use strict";

// an async function always returns a promise
const getTodo = async () => {
  // await keyword waits for the promise to get resolved
  // only after the promise gets resolved, it assigns value to response variable
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/5");
  const data = await response.json();
  return data;
};

getTodo()
  .then(data => console.log(data))
  .catch(err => console.log(err.message));

// fetching data from local JSON files
const getData = async () => {
  const response1 = await fetch("todos/todos1.json");
  const data1 = await response1.json();
  console.log(data1);

  const response2 = await fetch("todos/todos2.json");
  const data2 = await response2.json();
  console.log(data2);
};

getData();

// if the entered API is wrong
const getSomething = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1+");

  // throwing a custom error
  // by throwing error inside an async function, promise will get rejected
  if (response.status !== 200) {
    // new Error() creates an error object
    throw new Error("Could not fetch data");
  }

  const data = await response.json();
  return data;
};

// Async function always returns a promise. That promise can be a resolved one or rejected one.
// Therefore, then() and catch() methods have to be used outside async functions
// to know whether a promise is resolved or rejected.

getSomething()
  .then(data => console.log(data))
  .catch(err => console.log(err.message));
