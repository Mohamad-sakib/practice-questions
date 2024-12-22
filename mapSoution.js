// helperFunction---------------------------------------------------------------
const display = console.log;

const evaluateTruthiness = function (data) {
  if (data) {
    return true;
  }

  return false;
}

const reverseString = function (string) {
  return string.split("").reverse().join("");
}

const createDublicate = function (string) {
  return string + string;
}

const invertBooleanValues = function (boolean) {
  return !boolean;
}

const collectCharUniCode = function (char) {
  return char.charCodeAt(0);
}

const splitStringToArray = function (sepertor) {
  return function (string) { return string.split(sepertor) };
};

const extractDomain = function (email) {
  return email.slice(email.indexOf("@") + 1, email.length);
}

//problems+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const square = function (number) {
  return Math.pow(number, 2);
};

// squares of [1, 2, 3] => [1, 4, 9]
const squaresOf = function (numbers) {
  return numbers.map(square);
};

const getStringLength = function (string) {
  return string.length;
};

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const lengthsOf = function (strings) {
  return strings.map(getStringLength);
};

const convertToUpperCase = function (string) {
  return string.toUpperCase();
};

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const uppercaseOf = function (strings) {
  return strings.map(convertToUpperCase);
};

const extractFirstCharOf = function (string) {
  return string.at(0);
}

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstCharactersOf = function (strings) {
  return strings.map(extractFirstCharOf);
};

// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const truthValuesOf = function (numbers) {
  return numbers.map(evaluateTruthiness);
};

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const reversedStringsOf = function (strings) {
  return strings.map(reverseString);
};

display(reversedStringsOf(["hello", "world"]));

const doubleCharsOfString = function (string) {
  return string.split("").reduce(function (accumolator, char) { return accumolator + createDublicate(char) }, "")
};

// double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"]
const doubleLettersOf = function (strings) {
  return strings.map(doubleCharsOfString);
};

// boolean negation of [true, false, true] => [false, true, false]
const negatedBooleansOf = function (booleans) {
  return booleans.map(invertBooleanValues);
};

// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const charCodesOf = function (strings) {
  return strings.map(collectCharUniCode);
};

// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]
const domainNamesOf = function (emails) {
  return emails.map(extractDomain);
};

const splitStringToArrayBySpace = splitStringToArray(" ");

// split words in ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]
const splitWordsOf = function (strings) {
  return strings.map(splitStringToArrayBySpace);
};

const joinArray = function (array) {
  return array.join("");
}

// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(joinArray);
};

// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatedStringsOf = function (strings) {
  return strings.map(createDublicate);
};

const countVowelsOfWord = function (word) {
  let vowelsCount = 0;

  for (const char of word) {
    vowelsCount = "aioeu".includes(char) ? vowelsCount + 1 : vowelsCount;
  }

  return vowelsCount;
};

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const countVowelsOf = function (strings) {
  return strings.map(countVowelsOfWord);
};

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reversedArraysOf = function (arrays) {
  return arrays.map(function (array) { return array.reverse(); });
};

const isNotVowel = function (char) {
  return !"aeiou".includes(char);
}

const removeVowels = function (string) {
  return string.split("").filter(isNotVowel).join("");
};

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};

const cumulativeSumsReducer = function (cumulativeSumArray, number) {
  cumulativeSumArray.push(cumulativeSumArray.at(-1) + number);
  return cumulativeSumArray;
}

const generateCumulativeSumArray = function (array) {
  const cumulativeSumArray = array.reduce(cumulativeSumsReducer, [0]);
  cumulativeSumArray.shift();
  return cumulativeSumArray;
}

// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]
const cumulativeSumsOf = function (arrays) {
  return arrays.map(generateCumulativeSumArray);
};

const reverseWords = function (string) {
  return reversedStringsOf(splitStringToArrayBySpace(string)).join(" ");
};

// reverse words in ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]
const reversedWordsOf = function (strings) {
  return strings.map(reverseWords);
};

const removeDublication = function (noDublication, charToAdd) {
  if (!noDublication.includes(charToAdd)) {
    noDublication.push(charToAdd);
  }

  return noDublication;
}

const extractUniqueChar = function (string) {
  return string.split("").reduce(removeDublication, []).join("");
}

// extract unique characters from ["apple", "banana", "grape"] => ["apl", "ban", "gra"]
// Maintain the order of their first appearance in each string
const uniqueCharactersOf = function (strings) {
  return strings.map(extractUniqueChar);
};


// print(uniqueCharactersOf(["apple", "banana", "grape"]));