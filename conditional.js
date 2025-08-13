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

// we are sorting people using their age into groups
// age 40 and above---->elderly person
//age 18-39------> young adult
// less than 18---->teenager

let Age = 40;
if (Age >= 40) {
  console.log("elderly person");
} else if (Age >= 18) {
  console.log("young adult");
} else {
  console.log("teenager");
}

// 0 - 10
// 8 and above (green)
// 5 and above (orange)
// anything less than (red)

let rate = 10;
if (rate >= 8) {
  console.log("green");
} else if (rate >= 5) {
  console.log("orange");
} else {
  console.log("red");
}

//
let burnley = 3;
let sunderland = 2;
if (burnley > sunderland) {
  console.log("winner is burnley");
} else if (sunderland > burnley) {
  console.log("winner is sunderland");
} else {
  console.log("draw");
}

// predicted that the match will end in a draw and the number of goals scored will be more than 4
// write if else statement to determine if the bet wins or not
const totalGoals = burnley + sunderland;
if (burnley === sunderland && totalGoals > 4) {
  console.log("you won");
} else {
  console.log("you lose");
}

// ola predicted that sunderland wins or the number of goals scored by sunderland is more than 2

let finalScore = burnley + sunderland;
if (sunderland > burnley || finalScore > 2) {
  console.log("ola wins");
} else {
  console.log("ola lose");
}

//liverpool and mancity
const liverpool = 2;
const mancity = 5;
const liverpoolCorner = 4;
const mancityCorner = 5;
const totalCorners = liverpoolCorner + mancityCorner;
// liverpool wins (liverpool > mancity) and liverpool scores less than 4 (liverpool <4)
// and total corners is 9 (liverpool + mancity === 9)
if (liverpool > mancity && liverpool < 4 && totalCorners === 9) {
  console.log("emmanuel wins");
} else {
  console.log("emmanuel lose");
}
