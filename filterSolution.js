const isEven = function (number) {return number % 2 === 0};
// even numbers [1, 2, 3, 4, 5] => [2, 4]
const filterEvenNumbers = function (numbers) { 
  return numbers.filter(isEven);
};  

// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]
const isMoreThen = function (val1) {
  return function (val2) {
    return val2 > val1;
  }
}

const isLengthMoreThen5 = isMoreThen(5);

const filterLongWords = function (words) { 
  return words.filter(function (word) {
    return isLengthMoreThen5(word.length);
  });  
};
