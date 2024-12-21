// helperFunction---------------------------------------------------------------

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

//problems+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// squares of [1, 2, 3] => [1, 4, 9]
const squaresOf = function (numbers) {
  return numbers.map(function (number) {
    return Math.pow(number, 2);
  });
};

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const lengthsOf = function (strings) {
  return strings.map(function (string) {
    return string.length;
  });
};

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const uppercaseOf = function (strings) {
  return strings.map(function (string) {
    return string.toUpperCase();
  });
};

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstCharactersOf = function (strings) {
  return strings.map(function (string) {
    return string.at(0);
  });
};

// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const truthValuesOf = function (numbers) {
  return numbers.map(function (number) {
    return evaluateTruthiness(number);
  });
};

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const reversedStringsOf = function (strings) {
  return strings.map(function (string) {
    return reverseString(string);
  });
};

const doubleCharsOfString = function (string) {
  return string.split("").reduce(function (accumolator, char) {return accumolator + createDublicate(char)},"" )
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