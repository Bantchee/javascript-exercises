// Function that adds two values
// IN > OUT : Int Int > Int
const add = function(a, b) {
	return a + b;
};

// Function that subtracts two values
// IN > OUT : Int Int > Int
const subtract = function(a, b) {
	return a - b;
};

// Function that sums an array of values
// IN > OUT : Int-Array > Int
const sum = function(arr) {
	return arr.reduce((total, currentValue) => total + currentValue, 0);
};

// Function that mulitiples an array of values
// IN > OUT : Int-Array > Int
const multiply = function(arr) {
	return arr.reduce((total, currentValue) => total * currentValue, 1);
};

// Function raises the power of one number to the other
// IN > OUT : Int Int > Int
const power = function(a, b) {
	return a**b;
};

// Function computers the factorial of an int
// IN > OUT: Int > Int
const factorial = function(num) {
  if(num == 0) {
    return 1;
  }
	return num * factorial(num - 1);
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
