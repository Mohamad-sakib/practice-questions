const isEven = function (number) {return number % 2 === 0}
// even numbers [1, 2, 3, 4, 5] => [2, 4]
const filterEvenNumbers = function (numbers) { 
  return numbers.filter(isEven);
};
