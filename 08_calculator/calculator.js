const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
	let sum = 0;
  for (number of numbers) {
    sum += number;
  }
  return sum;
};

const multiply = function(numbers) {
	let product = 1;
  for (number of numbers) {
    product = product * number;
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  let factorialProduct = 1;
  for (let i = 1; i < n + 1; i++) {
    factorialProduct = factorialProduct * i;
  }
  return factorialProduct;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
