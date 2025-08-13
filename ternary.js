// ternary operator is another way of writing if else statement
let otpSent = 4587;
let otpEntered = 4578;
if (otpEntered === otpSent) {
  console.log("transaction completed");
} else {
  console.log("wrong otp, try again");
}

// ternary operator; condition(?) first action:second action
otpEntered === otpSent ? console.log("transaction completed") : console.log("wrong otp, try again");

// using ternary operator
let num = 41;
num % 2 === 0 ? console.log("even number") : console.log("odd number");

let balance = 6000;
let amount = 8000;

balance >= amount  ? console.log("transaction is succcessful")  : console.log("insufficient funds");

const isMarried = false;

// he is married // he is not married 
const statement = `he ${isMarried ? "is" : "is not"} married`
console.log(statement);

