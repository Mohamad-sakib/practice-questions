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

// console.log(
//   filterDiscountedItems(
//     [
//       { name: "item1", price: 100 },
//       { name: "item2", price: 50 },
//     ],
//     10,
//     50
//   )
// );

const convertNameToUpperCase = (product) => {
  return { name: product.name.toUpperCase() };
};

const isLengthMoreThen = (minLength) => {
  return (product) => {
    return product.name.length > minLength;
  };
};

// Convert product names to uppercase, then filter for products with names longer than a certain number [{name: "apple"}, {name: "banana"}] => [{name: "APPLE"}]
const filterLongProductNames = function (products, minLength) {
  const productsInUpperCase = products.map(convertNameToUpperCase);
  return productsInUpperCase.filter(isLengthMoreThen(minLength));
};

// Group users by their age, then filter for specific age groups [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAgeGroups = function (users, ageGroup) {};

// Convert grades to letter grades, then filter for students who passed [{name: "Alice", grade: 90}, {name: "Bob", grade: 55}] => [{name: "Alice", grade: 90}]
const filterPassingGrades = function (students, passingGrade) {
  return students.filter((student) => student.grade > passingGrade);
};

const applyVatOn = (price, vatRate) => {
  return price + vatRate * price * 0.01;
};

// Calculate VAT-inclusive prices, then filter for those over a certain threshold [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item1", price: 120}]
const filterHighPriceWithVAT = function (products, vatRate, threshold) {
  const productWithTaxIncluded = products.map((product) => {
    return { name: product.name, price: applyVatOn(product.price, vatRate) };
  });

  return productWithTaxIncluded.filter((product) => product.price > threshold);
};

// Calculate the length of each name, then filter for names longer than a given number [{name: "Alice"}, {name: "Bob"}] => [{name: "Alice"}]
const filterLongNames = function (people, minLength) {
  return people.filter((person) => person.name.length > minLength);
};

// Normalize scores to a standard range, then filter for students who passed [{name: "John", score: 50}, {name: "Jane", score: 80}] => [{name: "Jane", score: 80}]
const filterNormalizedScores = function (students, minScore) {
  return students.filter((student) => student.score > minScore);
};

// Convert book publication dates, then filter for books published after a given year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterRecentBooks = function (books, yearThreshold) {
  return books.filter((book) => book.year > yearThreshold);
};

// Count the number of posts for each user, then filter for users with more than a specific number of posts [{username: "Alice", posts: 100}, {username: "Bob", posts: 50}] => [{username: "Alice", posts: 100}]
const filterActivePosters = function (users, postThreshold) {
  return users.filter((user) => user.posts > postThreshold);
};

const generateGradeFor = (number) => {
  if (number < 50) {
    return "F";
  }

  if (number > 50 && number < 96) {
    return "A";
  }

  if (number > 95) {
    return "O";
  }
};

// Convert students' grades to letter grades, then filter for students who received a specific grade [{name: "Alice", grade: 90}, {name: "Bob", grade: 85}] => [{name: "Alice", grade: 90}]
const filterSpecificGrade = function (students, grade) {
  return students.filter((student) => {
    return generateGradeFor(student.grade) === grade;
  });
};

// Filter products based on category and price threshold [{category: {type: "electronics"}, name: "Laptop", price: 800}, {category: {type: "furniture"}, name: "Chair", price: 150}] => [{category: {type: "electronics"}, name: "Laptop", price: 800}]
const filterByCategoryAndPrice = function (products, category, maxPrice) {
  const categoryProducts = products.filter((product) => {
    return product.category.type === category;
  });

  return categoryProducts.filter((product) => product.price < maxPrice);
};

console.log(
  filterByCategoryAndPrice(
    [
      { category: { type: "electronics" }, name: "Laptop", price: 800 },
      { category: { type: "furniture" }, name: "Chair", price: 150 },
    ],
    "electronics",
    1000
  )
);

// console.log(
//   filterHighPriceWithVAT(
//     [
//       { name: "item1", price: 100 },
//       { name: "item2", price: 50 },
//     ],
//     10,
//     100
//   )
// );

// console.log(filterLongProductNames([{ name: "apple" }, { name: "banana" }], 5));

// console.log(filterByPostCount([{ username: "Alice", posts: 10 }, { username: "Bob", posts: 5 }], 10))
// console.log(filterByLikes( [{id: 1, likes: 100}, {id: 2, likes: 50}], 100));
// console.log(filterBySubjectGrade([{name: "Alice", grades: {math: 90, science: 80}}, {name: "Bob", grades: {math: 70, science: 85}}], "math", 80));
// console.log(filterByYear([{title: "Book1", year: 2020}, {title: "Book2", year: 2022}], 2020))