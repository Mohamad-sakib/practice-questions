//helper Functions**************************************************************

const isEven = function (number) { return number % 2 === 0 };

const isMoreThen = function (val1) {
  return function (val2) {
    return val2 > val1;
  }
};

const checkStatusFor = function (activityStatus) { return activityStatus };

const arrayToObject = function (array, ...keys) {
  const object = {};

  for (let index = 0; index < keys.length; index++) {
    object[keys[index]] = array[index];
  }

  return object
};

const display = console.log;

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

// products that are in stock [{product: "apple", inStock: true}, {product: "banana", inStock: false}] => [{product: "apple", inStock: true}]
const filterInStockProducts = function (products) {
  return products.filter(function (product) {
    return checkStatusFor(product.inStock);
  });
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
  const dateDiffrence = generateDateDiffrence(currentDate, previousDate);

  return dateDiffrence < duration;
};

const isDateUnder = function (duration, currentDate) {
  return function (date, basedOn) {
    switch (basedOn) {
      case "Y": return isYearDiffrenceLessThen(duration, currentDate.year, +date.year);
      case "M": return isMothDiffrenceLessThen(duration, currentDate.month, +date.month);
      case "D": return isDaysDiffrenceLessThen(duration, currentDate, date);
    }
  }
}

const isPlacedInLast30Days = isDateUnder(30, { year: 2024, month: 12, date: 21 });

// orders placed in the last 30 days [{orderDate: "2024-11-01"}, {orderDate: "2024-12-01"}] => [{orderDate: "2024-12-01"}]
const filterRecentOrders = function (orders) {
  return orders.filter(function (order) {
    const orderDateInObject = arrayToObject(order.orderDate.split("-"), "year", "month", "date");
    return isPlacedInLast30Days(orderDateInObject, "D");
  });
};

display(filterRecentOrders([{ orderDate: "2024-11-01" }, { orderDate: "2024-12-01" }]));