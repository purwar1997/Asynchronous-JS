"use strict";

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (time, task) => {
  return new Promise((resolve, reject) => {
    const isShopOpen = false;
    if (isShopOpen) {
      setTimeout(() => {
        resolve(console.log(task));
      }, time * 1000);
    } else {
      reject(`Sorry, our shop is closed today`);
    }
  });
};

// using try, catch and finally blocks
const makeIcecream = async (fruit, holder, topping) => {
  try {
    await order(2, `${stocks.fruits[fruit]} was selected`);
    await order(0, `Production has started`);
    await order(2, `Fruit has been chopped to pieces`);
    await order(1, `${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`);
    await order(1, `Machine has been started`);
    await order(2, `Your icecream has been placed on ${stocks.holder[holder]}`);
    await order(3, `${stocks.toppings[topping]} has been added`);
    await order(2, `Your icecream is now ready to be served`);

    console.log(`Hope you enjoyed your icecream. Please visit us again`);
  } catch (err) {
    console.log(err);
  } finally {
    console.log(`Now, it's time to close our shop`);
  }
};

// no need to use then(), catch() and finally() methods
makeIcecream(2, 1, 0);
