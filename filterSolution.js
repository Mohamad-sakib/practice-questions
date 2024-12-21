//helper Functions**************************************************************
const isEven = function (number) { return number % 2 === 0 };
const isMoreThen = function (val1) {
  return function (val2) {
    return val2 > val1;
  }
};

// problems++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// even numbers [1, 2, 3, 4, 5] => [2, 4]
const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]

const isLengthMoreThen5 = isMoreThen(5);

const filterLongWords = function (words) {
  return words.filter(function (word) {
    return isLengthMoreThen5(word.length);
  });
};

const isMoreThen30 = isMoreThen(30);
// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAdults = function (people) {
  return people.filter(function (person) { return isMoreThen30(person.age); });
};
