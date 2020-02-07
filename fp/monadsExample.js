const { curry, is } = require('ramda');
const Either = require('ramda-fantasy').Either;
const Left = Either.Left;
const Right = Either.Right;

const tax = curry((tax, price) => {
  if (!is(Number, price)) {
    return Left(new Error("Price must be numeric"));
  }
  return Right(price + (tax * price))
});

const discount = curry((dis, price) => {
  if (!is(Number, price)) {
    return Left(new Error("Price must be numeric"));
  }
  if (price < 10) {
    return Left(new Error("discount cant be applied for items priced below 10"));
  }
  return Right(price - (price * dis))
});

const addCaliTax = (tax(0.1));
const apply25PercDisc = (discount(0.25));
const getItemPrice = (item) => Right(item.price);
const displayTotal = (total) => {
  console.log(`Total price: ${total}`);
};
const logError = (error) => {
  console.log(`Error: ${error.message}`);
};
const eitherLogOrShow = Either.either(logError, displayTotal);

const showTotalPrice = (item) => eitherLogOrShow(getItemPrice(item).chain(apply25PercDisc).chain(addCaliTax));

const tShirt = { name: 't-shirt', price: 11 };
const pant = { name: 't-shirt', price: '10 dollars' };
const chips = { name: 't-shirt', price: 5 };

showTotalPrice(tShirt);
showTotalPrice(pant);
showTotalPrice(chips);
