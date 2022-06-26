"use strict";

// fetch() is used to get data from an API
// fetch() returns a promise object on which then() and catch() methods can be chained
// to check whether promise is resolved or rejected
// Resolved: when promise is resolved by fetch(), it produces a response object
// Rejected: fetch() rejects promise only in case of network error i.e. client or server is offline
// fetch() doesn't reject promise if the API is incorrect

fetch("https://jsonplaceholder.typicode.com/todos/10+")
  .then(response => {
    // promise is resolved even if the API is wrong
    console.log("Promise resolved:", response);
    if (response.status === 200) {
      // fetched data can be retrieved by json() function
      // response.json() returns a promise object
      return response.json();
    } else {
      console.log("Resource not found!");
    }
  })
  .then(data => console.log(data))
  .catch(err => console.log("Promise rejected:", err));

// fetching data from a local json file
fetch("todos/todos1.json")
  .then(response => {
    console.log("Promise resolved:", response);
    if (response.status === 200) {
      return response.json();
    } else {
      console.log("Resource not found!");
    }
  })
  .then(data => console.log(data))
  .catch(err => console.log("Promise rejected:", err));

// fetching data from multiple JSON files
fetch("todos/todos1.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return fetch("todos/todos2.json");
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return fetch("todos/todos3.json");
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

// method chaining is only possible if promises are returned
// if a method is not returning promise, new methods can't be chained on it
