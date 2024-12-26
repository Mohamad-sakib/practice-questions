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
  };
};

const isOdd = function (number) {
  return number % 2 !== 0;
};

const isEven = function (number) {
  return number % 2 === 0;
};

const count = function (accumolator) {
  return accumolator + 1;
};

const whichOneHasLongerLength = function (
  longestString,
  longestStringCandidate
) {
  return longestStringCandidate.length > longestString.length
    ? longestStringCandidate
    : longestString;
};

const whichOneHasSmallerLength = function (
  smallestString,
  smallestStringCandidate
) {
  return smallestStringCandidate.length < smallestString.length
    ? smallestStringCandidate
    : smallestString;
};

const concatenate = function (seprator) {
  return function (concatenatedString, wordToConcat) {
    return concatenatedString.concat(seprator, wordToConcat);
  };
};

// problems--------------------------------------------------------------

// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce(sumOfTwoNumber, 0);
};

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  if (numbers.length === 0) {
    return "noValue To compute";
  }

  return numbers.reduce(productOfTwoNumber, 1);
};

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
  return numbers.reduce(maxOfTwoNumber, -Infinity);
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

const pureConcat = concatenate("");

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce(pureConcat, "");
};

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {
  return words.reduce(whichOneHasLongerLength, "");
};

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  return words.reduce(whichOneHasSmallerLength);
};

const concatWithComma = concatenate(",");

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {
  return words.reduce(concatWithComma);
};

const concatWithSpace = concatenate(" ");

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {
  return words.reverse(words).reduce(concatWithSpace);
};

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce(concatWithSpace);
};

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce(pureConcat);
};

const isVowel = function (char) {
  return "aieou".includes(char);
};

const collectVowels = function (word) {
  return word.split("").filter(isVowel).join("");
};

// countVowelsInWords(["hello", "world"])--> [eo, o] => "eoo"
const countVowelsInWords = function (words) {
  return concatenateWords(words.map(collectVowels));
};

const getCamelCaseOf = function (word) {
  if (word.length === 0) {
    return "";
  }

  if (word.length === 1) {
    return word.toUpperCase();
  }

  return word.at(0).toUpperCase().concat(word.slice(1));
};

const convertToCamelCaseAndJoin = function (camelCaseString, word) {
  return camelCaseString.concat(getCamelCaseOf(word));
};

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) {
  return words.reduce(convertToCamelCaseAndJoin);
};

const reverseWord = function (word) {
  return word.split("").reverse().join("");
};

const reverseWordsAndJoin = function (reversedString, wordToReverse) {
  return reversedString.concat(reverseWord(wordToReverse));
};

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) {
  return words.reduce(reverseWordsAndJoin, "");
};

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {
  return numbers.reduce(
    (dublicate, number) => [...dublicate, number, number],
    []
  );
};

const concatenateArrays = function (arrays) {
  return arrays.reduce((concatedArray, element) => {
    return concatedArray.concat(element);
  });
};

const removeDublication = (NoDupicate, number) => {
  if (!NoDupicate.includes(number)) {
    NoDupicate.push(number);
  }

  return NoDupicate;
};
// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) {
  return numbers.reduce(removeDublication, []);
};

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {
  return arrays.reduce((array, element) => {
    return Array.isArray(element)
      ? array.concat(flattenArray(element))
      : array.concat(element);
  }, []);
};

const flattenArray2 = (numbers) => {
  const numbersInString = numbers.join().split(",");
  return numbersInString.map((number) => {
    return +number;
  });
};

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const createGroupOfLength = (objectOfLength, string) => {
  const stringLength = string.length + "";

  if (!(stringLength in objectOfLength)) {
    return { ...objectOfLength, [stringLength]: [string] };
  }

  console.log(stringLength, objectOfLength);

  objectOfLength[stringLength].push(string);
  return objectOfLength;
}; //alternative

const groupByLength = function (strings) {
  return strings.reduce(createGroupOfLength, {});
};

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) {
  return strings.reduce((occurencess, string) => {
    console.log(occurencess);
    if (string in occurencess) {
      return { ...occurencess, [string]: occurencess[string] + 1 };
    }

    return { ...occurencess, [string]: 1 };
  }, {});
};

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {
  return objects.reduce((mergedObject, object) => {
    return Object.assign(mergedObject, object);
  }, {});
};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {
  const combinedData = keys.map((key, index) => {
    return [key, values.at(index)];
  });

  return combinedData.reduce((zippedData, pair) => {
    return { ...zippedData, [pair[0]]: pair[1] };
  }, {});
};

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {
  return keys.reduce((object, key, index) => {
    return { ...object, [key]: values[index] };
  }, {});
};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {
  const arrayObj = Object.entries(obj);

  return arrayObj.reduce((inveredObj, keyValuePair) => {
    return { ...inveredObj, [keyValuePair[1]]: keyValuePair[0] };
  }, {});
};

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const pushKeyValueToObj = (obj, [key, value]) => {
  return { ...obj, [key]: value };
};

const mergeArrays = function (arr1, arr2) {
  const obj1 = arr1.reduce(pushKeyValueToObj, {});
  const obj2 = arr2.reduce(pushKeyValueToObj, {});

  return Object.assign(obj1, obj2);
};

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {
  return objects.reduce((groupedObj, object) => {
    if (object.age in groupedObj) {
      return { ...object, [object.age]: [...groupedObj[object.age], object] };
    }

    return { ...groupedObj, [object.age]: [object] };
  }, {});
};

const groupInAscendingOrder = (orderedGroups, number) => {
  if (orderedGroups.at(-1).at(-1) > number) {
    return [...orderedGroups, [number]];
  }

  return [...orderedGroups].with(-1, [...orderedGroups.at(-1), number]);
};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {
  return numbers.reduce(groupInAscendingOrder, [[]]);
};

const makePairs = (pairs, char) => {
  return pairs.at(-1).length === 2
    ? [...pairs, [char]]
    : [...pairs].with(-1, pairs.at(-1).concat(char));
};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {
  const flattedArray = flattenArray(pairs);
  const arrayOfPairs = flattedArray.reduce(makePairs, [[]]);
  console.log(arrayOfPairs);

  return arrayOfPairs.reduce((object, pair) => {
    return { ...object, [pair[0]]: pair[1] };
  }, {});
};

display(flattenToObject([[[["a", 1]]], ["b", 2], ["c", 3]]));

// const createGroupOfLength = (objectOfLength, string) => {
//   const stringLength = string.length + "";

//   if (!stringLength in objectOfLength) {
//      objectOfLength[stringLength] = [];
//   }

//   objectOfLength[stringLength].push(string);
//   return objectOfLength;
// }

// display(groupByLength(["apple", "banana", "cherry", "date"]));
// display(joinWithComma(["apple", "banana", "cherry"]));
