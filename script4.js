"use strict";

const getTodo = API => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else {
          reject("Error fetching data!");
        }
      }
    });

    request.open("GET", API);
    request.send();
  });
};

// promise chaining is only possible if promises gets returned by functions
// getTodo() returns a promise when invoked on which then() and catch() can be chained

getTodo("todos/todos1.json")
  .then(data => {
    console.log("Promise resolved:", data);
    return getTodo("todos/todos2.json");
  })
  .then(data => {
    console.log("Promise resolved:", data);
    return getTodo("todos/todos3+.json");
  })
  .then(data => console.log("Promise resolved:", data))
  .catch(err => console.log("Promise rejected:", err));
