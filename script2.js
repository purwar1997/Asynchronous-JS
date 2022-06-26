"use strict";

const getTodo = (API, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        // status = 200 implies data has been successfully fetched
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
      } else if (request.status === 404) {
        // status = 404 implies URL not found
        callback("could not fetch data!", undefined);
      }
    }
  });

  request.open("GET", API);
  request.send();
};

// callback hell: callbacks are nested inside each other
getTodo("todos/todos1+.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    getTodo("todos/todos2.json", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        getTodo("todos/todos3.json", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});
