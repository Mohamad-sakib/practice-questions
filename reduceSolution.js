// helperFunction--------------------------------------------------------------

const sumOfTwoNumber = function (num1, num2) {
  return num1 + num2;
};

const productOfTwoNumber = function (num1, num2) {
  return num1 * num2;
};

const minOfTwoNumber = function (num1, num2) {
  return Math.min(num1, num2);
};

const maxOfTwoNumber = function (num1, num2) {
  return Math.max(num1, num2);
};

const isPositive = function (number) {
  return number > 0;
}

const power = function (exponent) {
  return function (base) {
    return Math.pow(base, exponent);
  }
}

// problems--------------------------------------------------------------

// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce(sumOfTwoNumber, 0);
}

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  if (numbers.length === 0) {
    return "noValue To compute";
  }

  return numbers.reduce(productOfTwoNumber, 1);
}

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return sumOf(numbers) / numbers.length;
};


// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce(minOfTwoNumber, Infinity);
};

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce(maxOfTwoNumber, -Infinity)
};

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = function (numbers) {
  return sumOf(numbers.filter(isPositive));
};

const square = power(2);

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = function (numbers) { 
  return sumOf(numbers.map(square));
};

