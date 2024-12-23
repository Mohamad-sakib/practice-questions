//helper Functions**************************************************************

const isEven = function (number) {
  return number % 2 === 0;
};

const isMoreThen = function (val1) {
  return function (val2) {
    return val2 > val1;
  };
};

const checkStatusFor = function (activityStatus) {
  return activityStatus;
};

const arrayToObject = function (array, ...keys) {
  const object = {};

  for (let index = 0; index < keys.length; index++) {
    object[keys[index]] = array[index];
  }

  return object;
};

const display = console.log;

const addingObjPropertyValue = function (property) {
  return function (sum, object) {
    return sum + object[property];
  };
};

const sumOf = function (property, array) {
  return array.reduce(addingObjPropertyValue(property), 0);
};

const averageOf = function (property, array) {
  const sumOfGivenProperty = sumOf(property, array);
  return sumOfGivenProperty / array.length;
};

const isLowerThenAverage = function (propertyAverage, property) {
  return function (product) {
    return product[property] < propertyAverage;
  };
};

// problems+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// filter books published after a certain year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterByYear = function (books, year) {
  return books.filter((book) => book.year > year);
};

// filter students with a grade higher than a given threshold in a specific subject [{name: "Alice", grades: {math: 90, science: 80}}, {name: "Bob", grades: {math: 70, science: 85}}] => [{name: "Alice", grades: {math: 90, science: 80}}]
const filterBySubjectGrade = function (students, subject, threshold) {
  return students.filter((student) => student.grades[subject] > threshold);
};

// filter photos with a minimum number of likes [{id: 1, likes: 100}, {id: 2, likes: 50}] => [{id: 1, likes: 100}]
const filterByLikes = function (photos, likes) {
  return photos.filter((photo) => photo.likes < likes);
};

// filter users who have made a certain number of posts [{username: "Alice", posts: 10}, {username: "Bob", posts: 5}] => [{username: "Alice", posts: 10}]
const filterByPostCount = function (users, postCount) {
  return users.filter((user) => user.posts === postCount);
};

const applyDiscountTo = (amount, discount) => {
  return amount - (discount / 100) * amount;
};

// Apply a discount to each item's price, then filter for items under a certain price [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item2", price: 45}]
const filterDiscountedItems = function (items, discount, maxPrice) {
  return items.filter((item) => {
    return applyDiscountTo(item.price, discount) < maxPrice;
  });
};

console.log(
  filterDiscountedItems(
    [
      { name: "item1", price: 100 },
      { name: "item2", price: 50 },
    ],
    10,
    50
  )
);
// console.log(filterByPostCount([{ username: "Alice", posts: 10 }, { username: "Bob", posts: 5 }], 10))
// console.log(filterByLikes( [{id: 1, likes: 100}, {id: 2, likes: 50}], 100));
// console.log(filterBySubjectGrade([{name: "Alice", grades: {math: 90, science: 80}}, {name: "Bob", grades: {math: 70, science: 85}}], "math", 80));
// console.log(filterByYear([{title: "Book1", year: 2020}, {title: "Book2", year: 2022}], 2020))
