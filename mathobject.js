// MATH OBJECT
// Math
// constant PI
console.log(Math.PI);


// methods
// pow, min, max, round, ceil, floor, trunc, random


// power----
console.log(Math.pow(3, 2));

// min-----
console.log(Math.min(23, 4, -2, -98));

// max------
console.log(Math.max(23, 4, -2, -98));

// round-----
console.log(Math.round(7.45));

// ceil (round up)
console.log(Math.ceil(91.2));

// floor (round down)
console.log(Math.floor(9.99));

// trunc (removes decimal)
console.log(Math.trunc(10.23));

// random ---- random psuedo numbers between 0 - 1
console.log(Math.random());

// 0 - 10
console.log(Math.trunc(Math.random() * 11));

const randomNumber = Math.floor(Math.random() * 20) + 1;


// 0-5
const customers = ["ola", "blessing", "pius","moshood","season", "samuel"];

// pick a random lucky winner

const randomLuckyWinner = Math.floor(Math.random() * customers.length);
console.log(customers[randomLuckyWinner]);


// 5 - 10
// 10 - 20
// 20 - 50
// 0 - 5 -----> 5 - 10 0 - 20
// 10 - 20

const min = 5;
const max = 10;

const rNum = Math.floor(Math.random() * (max - min + 1) + min);
console.log(rNum);










