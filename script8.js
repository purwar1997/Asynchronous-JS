"use strict";

// promises

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

const order = (task, time) => {
  return new Promise((resolve, reject) => {
    const isShopOpen = true;
    if (isShopOpen) {
      setTimeout(() => {
        resolve(console.log(task));
      }, time * 1000);
    } else {
      reject(`Sorry, shop is closed today`);
    }
  });
};

// then(), catch() and finally() are all higher order functions and they all contain callbacks inside them
// to chain promises, we need to return promises

order(`${stocks.fruits[0]} was selected`, 2)
  .then(() => order(`Production has started`, 0))
  .then(() => order(`Fruit has been chopped to pieces`, 2))
  .then(() => order(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`), 1)
  .then(() => order(`Machine has been started`, 1))
  .then(() => order(`Your icecream has been placed on ${stocks.holder[2]}`, 2))
  .then(() => order(`${stocks.toppings[0]} has been added`, 3))
  .then(() => order(`Your icecream is now ready to be served`, 2))
  .catch(apology => console.log(apology))
  .finally(() => console.log(`Now it's time to close our shop`));
