// question 1
const teamA = (96 + 108 + 89) / 3;
const teamB = (88 + 91 + 110) / 3;
console.log(teamA);
console.log(teamB);
if (teamA > teamB) {
  console.log(`teamA wins with the average of ${teamA}`);
} else if (teamA < teamB) {
  console.log(`teamB wins with the avarage of ${teamB}`);
} else {
  console.log("it's a draw");
}

// question 2
const item1 = 120;
const item2 = 80;
const item3 = 150;
const balance = 400;
const total = item1 + item2 + item3;
console.log(total);
// if (balance >= total) {
//   console.log("you can checkout");
// } else {
//   console.log("insufficient balance");
// }
balance >= total
  ? console.log("you can checkout")
  : console.log("insufficient balance");

const movieAge = 18;
const userAge = 17;

// if (userAge >= movieAge) {
//   console.log("you can watch the movie");
// } else {
//   console.log("you are not old enough to watch this movie");
// }

userAge >= movieAge
  ? console.log("you can watch the movie")
  : console.log("you are not old enough to watch this movie");

const ticketPrice = 150;
const discount = 30;
const userBalance = 120;
const fanClubMember = true;
const discountPrice = ticketPrice - discount;
if (fanClubMember) {
  console.log(`you are paying ${discountPrice}`);
} else {
  console.log(`you are paying ${ticketPrice}`);
}
if (userBalance >= ticketPrice || userBalance >= discountPrice) {
  console.log("you can buy the football ticket");
} else {
  console.log("you do not have enough money for the football ticket");
}
