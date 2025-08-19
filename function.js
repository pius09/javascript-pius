// javascript function
// reusable blocks of code that perform a specific task or return a value
// call or invoke the function

// a function that welcomes ourer users when they log in

function welcomeUser() {
  console.log("Welcome User");
}
// calling a function
welcomeUser();
welcomeUser();
// functions with parameters - values that are passed to functions
function welcomeUser2(user) {
  console.log(`welcome ${user}`);
}
welcomeUser2("season");
welcomeUser2("daniel");

// defaultt parameters
function welcomeUser3(user = "anonymous") {
  console.log(`welcome ${user}`);
}

welcomeUser3();

// functions returning a value - giving back a result
// return keyword

// function that return the addition of two numbers
function add(a, b) {
  return a + b;
}

let sum = add(10, 12);
console.log(sum);

// function that returns a product(*) of two numbers

function product(num1, num2) {
  return num1 * num2;
}
console.log(product(67, 3));

// function that returns the naira equvalent of a dollar amount passed
// 1$ = 1600 naira
function convertToNaira(dollarAmount) {
  return `${dollarAmount} dollar will give you ${dollarAmount * 1600} naira`;
}
console.log(convertToNaira(22));
console.log(convertToNaira(1500));

// write a function that returns the average of 3 numbers

function calAverage(n1, n2, n3) {
  const avg = (n1 + n2 + n3) / 3;
  return avg;
}

console.log(calAverage(3, 5, 7));

// write a function that calculates and returns the age of user, your function should take in year of birth as a parameter

function userAge(yearOfBirth) {
  return 2025 - yearOfBirth;
}
console.log(userAge(2005));

// write a func that returns if a number is even or odd
function oddOrEven(num) {
  if (num % 2 === 0) {
    return `${num} is even`;
  } else {
    return `${num} is odd`;
  }
}

console.log(oddOrEven(90));
console.log(oddOrEven(71));

// write a func to check if a withdraw is possible or not

let balance = 2000;
function withdrawAmount(amount) {
  if (balance >= amount) {
    balance -= amount;
    return "transaction successful";
  } else {
    return "insufficient funds";
  }
}

console.log(withdrawAmount(1800));
console.log(balance);
console.log(withdrawAmount(1000));

function depositAmount(deposit) {
  balance += deposit;
  return `deposit of ${deposit} is successful, and your current balance is ${balance}`;
}
console.log(depositAmount(4000));
console.log(withdrawAmount(1000));

// return keyword : anycode after return is an inaccessible code
function example() {
  console.log("okay after return");
  return "hello";
  //unreachable code
}
example();

function firstLetter(word) {
  return word.charAt(0);
  // return`the first letter of the word ${word is ${word.charAt(0)}`;
}
console.log(firstLetter("john"));
console.log(firstLetter("cat"));

function fullName(firstName, lastName) {
  // return `${firstName} ${lastName}`;
  return firstName + " " + lastName;
}
console.log(fullName("ola", "john"));

function longestString(firstWord, secondWord) {
  if (firstWord.length > secondWord.length) {
    return firstWord;
  } else if (firstWord.length < secondWord.length) {
    return secondWord;
  } else {
    return "equal";
  }
}
console.log(longestString("fat", "cat"));

// longestString{'cat', 'hello'}----> 'hello'

// function types: function declaration , function expression , Arrow function
// function declaration
function sayHello() {
  return "hello";
}

// function expression
const squareNumber = function (num) {
  return num ** 2;
};
console.log(squareNumber(7));

// func exp that converts number of days to weeks 21
const daysToWeeks = function (days) {
  return days / 7;
};

// Arrow function (modern)
// arrow function that returns difference between two nums
const difference2 = (n1, n2) => {
  return n1 - n2;
};

// shorten arrow functions(only a line inside of the blcock of code)
const diff = (n1, n2) => n1 - n2;
console.log(diff(9, 6));

// hoisting - behaviour in js where function declarations are moved to the top before the code is executed
hoistedFunc(); // this is working because of hoisting
function hoistedFunc() {
  console.log("i am a func dec");
}

// write an arrow func that gets the maximum if two numbers

const getMaxNum = (n1, n2) => {
  if (n1 > n2) {
    return n1;
  } else if (n1 < n2) {
    return n2;
  } else {
    return "equal number";
  }
};
const letter = (word) => word.toUpperCase();
console.log(letter("i am new"));

// function withdrawAmount(amount) {
//   if (balance >= amount) {
//     balance -= amount;
//     return "transaction successful";
//   } else {
//     return "insufficient funds";
//   }
// }

let savings = 2000;
const checkLoanEligibility = (loanAmount) => {
  if (loanAmount > saving * 2) {
    return "user is not eligible";
  } else {
    return "user is eligible";
  }
};

const containSubstring = (substr, str) => substr.includes(str)
console.log(containSubstring("hello", "ell"));

1*60

const time = (minutes) => minutes * 60 
console.log(time(5));
