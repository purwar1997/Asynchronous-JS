"use strict";

const getTodo = (API, callback) => {
  // creating a request object by calling a constructor function
  // setting up an XMLHTTP client
  const request = new XMLHttpRequest();

  // callback is fired whenever request changes its state
  const data = request.addEventListener("readystatechange", function () {
    // readyState === 4 means request has been processed / operation has been completed
    if (request.readyState === 4) {
      if (request.status === 200) {
        // responseText property holds data that is fetched from API
        // data usually gets fetched in JSON format
        // JSON.parse() converts JSON string in JSON array of objects
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
      } else if (request.status === 404) {
        callback("Resource not found", undefined);
      }
    }
  });

  // setting up a request
  request.open("GET", API);
  request.send();
};

const callback = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
};

const info = (err, studentData) => {
  if (err) {
    console.log(err);
  } else {
    for (const student of studentData) {
      console.log(student.name, student.college);
    }
  }
};

// fetching data from API
getTodo("https://jsonplaceholder.typicode.com/todos/", callback);
getTodo("https://jsonplaceholder.typicode.com/todos/10", callback);
getTodo("https://jsonplaceholder.typicode.com/todos/9m", callback);

// fetching data from local JSON file
getTodo("todos.json", info);
