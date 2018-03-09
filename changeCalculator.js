// Please do not change the name of this function
var changeCalculator = function (pence) {
  // your code goes here
  if (typeof pence === 'number' && pence % 1 === 0 && pence >= 0) {
    let chObj = {};
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  let left = coins.reduce(function (acc, coin) {
    let numCoin = Math.floor(acc / coin);
    if (numCoin > 0) chObj[+coin] = numCoin;
    return acc % coin;
  }, pence);
  return left === 0 ? chObj : 'Error';
  } 
};

process.argv.array.forEach(element => {
  console.log(changeCalculator(element))
});

if ( typeof module !== 'undefined' ) {
  module.exports = {changeCalculator};
}
