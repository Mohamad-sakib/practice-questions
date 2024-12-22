// helperFunction--------------------------------------------------------------

const sumOfTwoNumber = function (num1, num2) {
  return num1 + num2;
}; 






// problems--------------------------------------------------------------

// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) { 
  return numbers.reduce(sumOfTwoNumber,0);
}