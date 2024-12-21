//helper Functions**************************************************************
const isEven = function (number) { return number % 2 === 0 };

const isMoreThen = function (val1) {
  return function (val2) {
    return val2 > val1;
  }
};

const checkStatusFor = function (activityStatus) { return activityStatus };

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

// active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]
const filterActiveUsers = function (users) {
  return users.filter(function (user) {
    return checkStatusFor(user.active);
  });
};

const isGreaterThen10 = isMoreThen(10);

// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter(isGreaterThen10);
};

const arePagesMoreThen200 = isMoreThen(200);

// books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const filterLongBooks = function (books) {
  return books.filter(function (book) {
    return arePagesMoreThen200(book.pages);
  });
};

// users with incomplete profiles [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}] => [{username: "bob", profileComplete: false}]
const filterIncompleteProfiles = function (users) {
  return users.filter(function (user) {
    return checkStatusFor(user.profileComplete);
  });
};

// students with grades above 80 [{name: "John", grade: 75}, {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const isGradeMorethen80 = isMoreThen(80);

const filterHighGrades = function (students) {
  return students.filter(function (student) {
    return isGradeMorethen80(student.grade);
  });
};