// helperFunction--------------------------------------------------------------
const display = console.log;

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
};

const isNegative = function (number) {
  return number < 0;
};

const power = function (exponent) {
  return function (base) {
    return Math.pow(base, exponent);
  }
};

const isOdd = function (number) {
  return number % 2 !== 0;
};

const isEven = function (number) {
  return number % 2 === 0;
}

const count = function (accumolator) {
  return accumolator + 1;
};

const whichOneHasLongerLength = function (longestString, longestStringCandidate) {
  return longestStringCandidate.length > longestString.length ? longestStringCandidate : longestString;
};

const whichOneHasSmallerLength = function (smallestString, smallestStringCandidate) {
  return smallestStringCandidate.length < smallestString.length ? smallestStringCandidate : smallestString;
};

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

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const sumOfOddNumbers = function (numbers) {
  return sumOf(numbers.filter(isOdd));
};

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {
  return numbers.filter(isNegative).reduce(count, 0);
};

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  return sumOf(numbers.map(square).filter(isEven));
};

const concatenate = function (concatenatedString, wordToConcat) {
  return concatenatedString.concat(wordToConcat);
};

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce(concatenate, "");
};

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {
  return words.reduce(whichOneHasLongerLength, "");
};

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  return words.reduce(whichOneHasSmallerLength);
}

display(sumOfOddNumbers([1, 2, 3, 4, 5]));

