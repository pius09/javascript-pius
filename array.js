// Arrays-elements
// [el1, el2, el3]
const student = ["pious", "daniel", "moshood", "emmanuel", "samuel"];
// array properties
// length
console.log(student);
console.log(student.length);
// get element based on position
console.log(student[3]);
console.log(student[student.length - 1]); //last element in array

// change element in an array by using the position
student[0] = "pius";
student[3] = "emma";
console.log(student);

// array method
// add or remove element to/from an array (add-push, unshift)
// structured data type
console.log(student.push("ola"));
student.push("blessing"); //add at the end
student.unshift("ade"); //add at the front
student.pop(); //remove at the back
student.shift(); //remove at the front
console.log(student);

// at,indexof,lastindexof
const nums = ["a", "c", "a", "d", "f", "a", "c"];
console.log(nums.at(0));
console.log(nums.indexOf("c"));
console.log(nums.lastIndexOf("c"));
// includes
console.log(nums.includes("a"));

// extracting portions from an array
// slice(start, end(non-inclusive))
console.log(nums.slice(0, 3));

// concat
console.log(student.concat(["jane", "peter"]));

// conversion to a string -  tostring, join(sperator)
console.log(student.tostring);

console.log(nums.toString());
console.log(nums.join("-"));

// []- empty array
console.log(Array.isArray([]));
console.log(Array.from("abc"));

// reverse
const grades = [1, 2, 3];
console.log(grades);
console.log(grades.reverse());

// complex array methods
// higher array methods- because they take in another function to tell them exactly what to do
// forEach, map, find, sort, filter, every, some, reduce

const transactions = [100, -200, 3000, -2500, 600];
const users = ["ade", "john", "peter"];

// forEach - loop through this array - perform an action
transactions.forEach((transactions) => {
  console.log(transactions * 2);
});
users.forEach((users) => {
  console.log(users.toUpperCase());
});

// map - loop through this array - perform an action annd return the new array

const letterFromUsers = users.map((user) => user.charAt(0));
console.log(letterFromUsers);
const newTransactions = transactions.map((transaction) => transaction / 10);
console.log(newTransactions);

// find and filter
// find returns the first element that passes a search condition
const bestUser = users.find((user) => user.startsWith("a"));
console.log(bestUser);

const mynum = transactions.find((transaction) => transaction > 500);
console.log(mynum);

// filter - returns every element that passes a search condition
const aUsers = users.filter((user) => user.startsWith("a"));
console.log(aUsers);

const debit = transactions.filter((transaction) => transaction < 0);
console.log(debit);

// sort - arranges element in an array
console.log(users.sort());
// when using sort with number we need to write a compare function
const specialNumbers = [11, 2, 3, 22, 34, 14, 1];
const lowToHigh = specialNumbers.sort((a, b) => a - b);
console.log(lowToHigh);
const highToLow = specialNumbers.sort((a, b) => b - a);
console.log(highToLow);

// every some reduce
const allGreaterThan10 = specialNumbers.every((num) => num > 10);
console.log(allGreaterThan10);
const someGreaterThan10 = specialNumbers.some((num) => num > 10);
console.log(someGreaterThan10);

// reduce - accumulates values in an array into one (number)
// a- accumulator b- current value
const cartPrice = [10, 70, 20, 30];
const totalPrice = cartPrice.reduce((acc, curr) => {return acc + curr},  0);
console.log(totalPrice); 



// split 
let myName = "banana is healthy";
console.log(myName.split(" "));



























