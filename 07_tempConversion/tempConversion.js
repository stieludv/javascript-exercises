// Variable that adjusts decimal point (accuracy), lowest is 0.
let decimalPoints = 1;
decimalPoints = 10 ** decimalPoints;

// Farenheit to Celsius
const ftoc = function(farenheit) {
  return Math.round(((farenheit - 32) * (5/9)) * decimalPoints) / decimalPoints;
};

// Celsius to Farenheit
const ctof = function(celsius) {
  return Math.round(((celsius * (9/5)) + 32) * decimalPoints) / decimalPoints;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
