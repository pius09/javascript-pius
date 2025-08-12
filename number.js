// toFixed 23.5
const num = 10;
console.log(num.toFixed(0));
console.log(num.toFixed(2));

// math operators +-*/
console.log(5 / 3);

// exponent (raise to the power) **
console.log(4 ** 2);

// modulus % (remainder of a division) 5%5
console.log(3 % 2);

// order of operation 2 + 2 * 2   // bodmas
console.log(4 + 2 * 3 ** 2);
//PEMDAS

//incrementing and decrementing 
let likes = 0;
likes++;
likes++;
likes++;
likes--;
console.log("likes :" + likes);

let savings = 10000;
// 5000

// savings = savings + 5000
savings += 5000;
savings += 10000;
savings -= 12000;
savings *= 2;
console.log(`current savvings is ${savings}`);

const accountName = `okunola`;
const accountNum = `9026472139`; 
let balance = 2000;
balance  += 10000;
balance -= 200;
balance += 2000;
console.log(`current account balance is ${balance}`);
