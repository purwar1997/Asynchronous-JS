"use strict";

// callbacks

// in objects, keys are always strings and values can be of any datatype
let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruit, container, toppings, callProduction) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit]} has been selected`);
    callProduction(container, toppings);
  }, 2000);
};

// callback hell: callback functions are nested inside each other
let production = (container, topping) => {
  setTimeout(() => {
    console.log("Production has started");

    setTimeout(() => {
      console.log(`Fruit has been chopped to pieces`);

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`);

        setTimeout(() => {
          console.log(`Machine has started`);

          setTimeout(() => {
            console.log(`Your icecream is placed on ${stocks.holder[container]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[topping]} has been added as toppings`);

              setTimeout(() => {
                console.log(`Your icecream is now ready to be served`);
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(3, 1, 0, production);
