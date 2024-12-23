//helper Functions**************************************************************

const isEven = function (number) { return number % 2 === 0 };

const isMoreThen = function (val1) {
  return function (val2) {
    return val2 > val1;
  }
};

const checkStatusFor = function (activityStatus) {
  return activityStatus;
};

const arrayToObject = function (array, ...keys) {
  const object = {};

  for (let index = 0; index < keys.length; index++) {
    object[keys[index]] = array[index];
  }

  return object
};

const display = console.log;

const addingObjPropertyValue = function (property) {
  return function (sum, object) {
    return sum + object[property];
  }
};

const sumOf = function (property, array) {
  return array.reduce(addingObjPropertyValue(property), 0);
}

const averageOf = function (property, array) {
  const sumOfGivenProperty = sumOf(property, array);
  return sumOfGivenProperty / array.length;
};

const isLowerThenAverage = function (propertyAverage, property) {
  return function (product) {
    return product[property] < propertyAverage;
  }
}

// problems++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// even numbers [1, 2, 3, 4, 5] => [2, 4]
const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]

const isLengthMoreThen5 = isMoreThen(5);

const isLongerLengthThen5 = function (word) {
  return isLengthMoreThen5(word.length);
};

const filterLongWords = function (words) {
  return words.filter(isLongerLengthThen5);
};

const isMoreThen30 = isMoreThen(30);
// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAdults = function (people) {
  return people.filter(function (person) { return isMoreThen30(person.age); });
};

const isUserActive = function (user) {
  return checkStatusFor(user.active);
};

// active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]
const filterActiveUsers = function (users) {
  return users.filter(isUserActive);
};

const isGreaterThen10 = isMoreThen(10);

// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter(isGreaterThen10);
};

const arePagesMoreThen200 = isMoreThen(200);

const hasBookPagesMoreThen200 = function (book) {
  return arePagesMoreThen200(book.pages);
};

// books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const filterLongBooks = function (books) {
  return books.filter(hasBookPagesMoreThen200);
};

const isUserProfileCompleted = function (user) {
  return checkStatusFor(user.profileComplete);
}

// users with incomplete profiles [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}] => [{username: "bob", profileComplete: false}]
const filterIncompleteProfiles = function (users) {
  return users.filter(isUserProfileCompleted);
};

// students with grades above 80 [{name: "John", grade: 75}, {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const isGradeMorethen80 = isMoreThen(80);

const hasStudentGradeMoreThen80 = function (student) {
  return isGradeMorethen80(student.grade);
};

const filterHighGrades = function (students) {
  return students.filter(hasStudentGradeMoreThen80);
};

// products that are in stock [{product: "apple", inStock: true}, {product: "banana", inStock: false}] => [{product: "apple", inStock: true}]
const isProductInStock = function (product) {
  return checkStatusFor(product.inStock);
};

const filterInStockProducts = function (products) {
  return products.filter(isProductInStock);
};

const isYearDiffrenceLessThen = function (duration, currentYear, previousYear) {
  if (duration === 1) {
    return currentMonth - previousMonth === 0;
  }

  return currentYear - previousYear < duration;
};

const isMothDiffrenceLessThen = function (duration, currentMonth, previousMonth) {
  if (duration === 1) {
    return currentMonth - previousMonth === 0;
  }

  return currentMonth - previousMonth < duration;
};

const isLeapYear = function (year) {
  if (year % 400 === 0) {
    return true;
  }

  return year % 4 === 0 && year % 100 !== 0;
}

const daysInFeb = function (year) {
  return isLeapYear(year) ? 29 : 28;
}

const totolDaysInMonth = function (month, year) {
  const monthDays = [31, daysInFeb(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return monthDays[month - 1];
}

const generateDateDiffrence = function (currentDate, previousDate) {
  if (currentDate.month === +previousDate.month) {
    return currentDate.date - (+previousDate.date);
  }

  return currentDate.date + (totolDaysInMonth(+previousDate.month, +previousDate.year) - (+previousDate.date));
}

const isDaysDiffrenceLessThen = function (duration, currentDate, previousDate) {
  display("here");
  const monthDiffrence = currentDate.month - (+previousDate.month);

  if (monthDiffrence > 1 || monthDiffrence < 0) {
    return false;
  };

  display("coming");

  const dateDiffrence = generateDateDiffrence(currentDate, previousDate);
  display("dateDiffrence", dateDiffrence);

  return dateDiffrence < duration;
};

const isDateUnder = function (duration, currentDate) {
  return function (date, basedOn) {
    console.log(date, basedOn);
    switch (basedOn) {
      case "Y": return isYearDiffrenceLessThen(duration, currentDate.year, +date.year);
      case "M": return isMothDiffrenceLessThen(duration, currentDate.month, +date.month);
      case "D": return isDaysDiffrenceLessThen(duration, currentDate, date);
    }
  }
}

const isPlacedInLast30Days = isDateUnder(30, { year: 2024, month: 12, date: 21 });

const isOrderPlacedInLast30Days = function (order) {
  const orderDateInObject = arrayToObject(order.orderDate.split("-"), "year", "month", "date");

  return isPlacedInLast30Days(orderDateInObject, "D");
};

// orders placed in the last 30 days [{orderDate: "2024-11-01"}, {orderDate: "2024-12-01"}] => [{orderDate: "2024-12-01"}]
const filterRecentOrders = function (orders) {
  return orders.filter(isOrderPlacedInLast30Days);
};

// display(filterRecentOrders([{ orderDate: "2024-11-01" }, { orderDate: "2024-12-01" }]));

// products with a price lower than the average [{name: "item1", price: 10}, {name: "item2", price: 20}, {name: "item3", price: 5}] => [{name: "item1", price: 10}, {name: "item3", price: 5}]
const filterBelowAveragePrice = function (products) {
  const priceAverage = averageOf("price", products);
  const isPriceLowerThenAverage = isLowerThenAverage(priceAverage, "price");

  return products.filter(isPriceLowerThenAverage);
};

// active users who posted in the last 7 days [{username: "alice", lastPostDate: "2024-12-01", active: true}, {username: "bob", lastPostDate: "2024-11-20", active: true}] => [{username: "alice", lastPostDate: "2024-12-01", active: true}]
const isLastPostIn7Days = isDateUnder(7, { year: 2024, month: 12, date: 21 });

const isLastPostInLast7Days = function (user) {
  display(user);
  const lastPostDateInObject = arrayToObject(user.lastPostDate.split("-"), "year", "month", "date");
  display(lastPostDateInObject);

  return isLastPostIn7Days(lastPostDateInObject, "D");
};

const filterRecentActiveUsers = function (users) {
  return users.filter(isLastPostInLast7Days);
};

// console.log(filterRecentActiveUsers([
//   { username: "alice", lastPostDate: "2024-12-01", active: true },
//   { username: "bob", lastPostDate: "2024-11-20", active: true },
//   { username: "bob", lastPostDate: "2024-12-20", active: true }
// ]));

const isStudentPassInAllSubject = function (student) {
  return student.subjects.every(function (subject) {
    return subject.passed;
  });
};

// students who passed all subjects [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}, {name: "Jane", subjects: [{name: "Math", passed: false}, {name: "Science", passed: true}]}] => [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}]

const filterStudentsWithAllSubjectsPassed = function (students) {
  return students.filter(isStudentPassInAllSubject);;
};

const doesPersonHasThisMothBirthDay = function (person) {
  const currentDate = { year: 2024, month: 12, date: 21 };
  const personBirthDate = arrayToObject(person.birthDate.split("-"), "year", "month", "date");

  return currentDate.month === +personBirthDate.month;
};

// people whose birthday is this month [{name: "Alice", birthDate: "2024-12-01"}, {name: "Bob", birthDate: "2024-11-01"}] => [{name: "Alice", birthDate: "2024-12-01"}]
const filterBirthdaysThisMonth = function (people) {

  return people.filter(doesPersonHasThisMothBirthDay);
};

// display(filterStudentsWithAllSubjectsPassed([{ name: "John", subjects: [{ name: "Math", passed: true }, { name: "Science", passed: true }] }, { name: "Jane", subjects: [{ name: "Math", passed: false }, { name: "Science", passed: true }] }]));
// display(filterBirthdaysThisMonth([{name: "Alice", birthDate: "2024-12-01"}, {name: "Bob", birthDate: "2024-11-01"}]));

// orders that exceed the average order value [{orderId: 1, amount: 20}, {orderId: 2, amount: 50}, {orderId: 3, amount: 10}] => [{orderId: 2, amount: 50}]
const filterHighValueOrders = function (orders) {
  const averageOrderValue = averageOf("amount", orders);

  return orders.filter(function (order) {
    return order.amount > averageOrderValue;
  });
};

// books with reviews higher than the average rating [{title: "Book 1", rating: 4}, {title: "Book 2", rating: 5}, {title: "Book 3", rating: 3}] => [{title: "Book 2", rating: 5}]
const filterTopRatedBooks = function (books) {
  const booksAverageRating = averageOf("rating", books);

  return books.filter(function (book) {
    return book.rating > booksAverageRating;
  });
};

// employees whose salary is higher than the department average [{name: "Alice", salary: 5000, department: "HR"}, {name: "Bob", salary: 7000, department: "HR"}, {name: "Charlie", salary: 4000, department: "IT"}] => [{name: "Bob", salary: 7000, department: "HR"}]
const filterHighSalaryEmployees = function (employees) {
  const departmentAverageSalary = averageOf("salary", employees);

  return employees.filter((employee) => {
    return employee.salary > departmentAverageSalary;
  });
};

const findMedian = function (sortedArray) {
  const middleTermIndex = Math.ceil(sortedArray.length / 2) - 1;

  if (isEven(sortedArray.length)) {
    return (sortedArray[middleTermIndex] + sortedArray[middleTermIndex + 1]) / 2;
  }

  return sortedArray[middleTermIndex];
}

const sortInAccedingOrder = function (array) {
  return array.sort((num1, num2) => { return num1 - num2 });
};

const medianOf = function (property, cities) {
  const citiesPopulationArray = cities.map(function (city) {
    return city[property];
  });

  const sortedCitiesPopulation = sortInAccedingOrder(citiesPopulationArray);

  return findMedian(sortedCitiesPopulation);
}

// cities with a population higher than the median [{name: "City A", population: 2000}, {name: "City B", population: 5000}, {name: "City C", population: 3000}] => [{name: "City B", population: 5000}]
const filterCitiesAboveMedianPopulation = function (cities) {
  const medianOfCityPopulation = medianOf("population", cities);

  return cities.filter(function (city) {
    return city.population > medianOfCityPopulation;
  });
};

// posts with more than the average number of likes [{postId: 1, likes: 100}, {postId: 2, likes: 200}, {postId: 3, likes: 150}] => [{postId: 2, likes: 200}]
const filterPopularPosts = function (posts) {
  const averageNumberOflikesOnPosts = averageOf("likes", posts);

  return posts.filter((post) => {
    return post.likes > averageNumberOflikesOnPosts;
  });
};

// users who have posted more than the average number of posts [{username: "Alice", postCount: 5}, {username: "Bob", postCount: 8}, {username: "Charlie", postCount: 3}] => [{username: "Bob", postCount: 8}]
const filterActiveUsersByPostCount = function (users) {
  const averageNumberOfPosts = averageOf("postCount", users);

  return users.filter(function (user) {
    return user.postCount > averageNumberOfPosts;
  });
};

// filter people older than a certain age [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 22}] => [{name: "Bob", age: 30}]
const filterByAge = function (people, ageCriteria) {
  return people.filter(function (person) {
    return person.age > ageCriteria;
  });
};

// filter products that are cheaper than a given price [{name: "item1", price: 20}, {name: "item2", price: 50}, {name: "item3", price: 10}] => [{name: "item1", price: 20}, {name: "item3", price: 10}]
const filterByPrice = function (products, price) {
  return products.filter(function (prouct) {
    return prouct.price < price;
  });
};

// filter students who scored above a certain grade in Math [{name: "John", grades: {math: 80, science: 90}}, {name: "Jane", grades: {math: 70, science: 85}}] => [{name: "John", grades: {math: 80, science: 90}}]
const filterByMathGrade = function (students, grade) {
  return students.filter(function (student) {
    return student.grades.math > grade;
  })
};
console.log(filterByMathGrade([{name: "John", grades: {math: 80, science: 90}}, {name: "Jane", grades: {math: 70, science: 85}}], 70));
// console.log(filterByPrice([{name: "item1", price: 20}, {name: "item2", price: 50}, {name: "item3", price: 10}], 30));
// console.log(filterByAge([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 22 }], 25));
// console.log(filterActiveUsersByPostCount([{ username: "Alice", postCount: 5 }, { username: "Bob", postCount: 8 }, { username: "Charlie", postCount: 3 }]));
// console.log(filterCitiesAboveMedianPopulation([{ name: "City A", population: 2000 }, { name: "City B", population: 5000 }, { name: "City C", population: 3000 }]))
// display(filterTopRatedBooks([{ title: "Book 1", rating: 4 }, { title: "Book 2", rating: 5 }, { title: "Book 3", rating: 3 }]))
// display(filterHighSalaryEmployees([{name: "Alice", salary: 5000, department: "HR"}, {name: "Bob", salary: 7000, department: "HR"}, {name: "Charlie", salary: 4000, department: "IT"}] ));
// display(filterHighValueOrders([{ orderId: 1, amount: 20 }, { orderId: 2, amount: 50 }, { orderId: 3, amount: 10 }]));