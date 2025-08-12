// CONDITIONAL STATEMENT
console.log("conditional statement");
//if(condition){
//action
//lines of code
//}

if (1 < 2) {
  console.log("ola");
}

let balance = 6000;
let amount = 7000;

if (balance >= amount) {
  balance -= amount;
  console.log("transaction succesful, balance is" + balance);
}

// determine if the password is long enough ( >= 10)
//improve your logic chech if the password contains '#' - good password
const password = "#password1234";
if (password.length >= 10 && password.includes("#")) {
  console.log("password is good enough");
}
//log to thhe console if a users age is eligbile to vote
const age = 18;
if (age >= 18) {
  console.log("you are eligible to vote");
}

// if else statement
if (4 > 7) {
  console.log("yes");
} else {
  console.log("no");
}
if (balance >= amount) {
  balance -= amount;
  console.log("transaction succesful, balance is" + balance);
} else {
  console.log("insufficient funds");
}

//write if else statement to check if a number is positive or negative

const num = 76;
if (num > 0) {
  console.log("positive");
} else {
  console.log("negative");
}

//write and if else statement to determine if a number is odd or even

const num2 = 2;
if (num2 % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}
//multiple else if
// overpopulated >=300, underpopulated <=50, and balanced ppopulation >50 and <300const censusResult = 500;
const censusResult = 500;

if (censusResult >= 300) {
  console.log("over populated");
} else if (censusResult <= 50) {
  console.log("under populated");
} else {
  console.log("balanced population");
}

// lottery system for a company a b c(winner) d

const userchoice = "a";

if (userchoice === "c") {
  console.log("congratulation");
} else {
  console.log("try again");
}

// lottery system for a company with 4 choices A(trip to dubai), B(try again), C(car), D(blender)

const userchoiceb = "a";
if (userchoiceb === "a") {
  console.log("trip to dubai");
} else if (userchoiceb === "c") {
  console.log("car");
} else if (userchoiceb === "d") {
  console.log("blender");
} else {
  console.log("try again");
}
