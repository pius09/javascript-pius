const africanCountries = ["Nigeria", "Ghana", "Eygpt", "Zimbabwe", "kenya"];
console.log(africanCountries.includes("Tanzania"));
console.log(africanCountries.length);

africanCountries.unshift("Niger");
console.log(africanCountries);

africanCountries.push("Zimbabwe");
console.log(africanCountries);

const lowToHigh = africanCountries.sort().reverse();
console.log(lowToHigh);


const wordsFromUsers = africanCountries.concat("japan", "china", "north-korea");
console.log(wordsFromUsers);

const getUser = africanCountries.find((user) => user.startsWith("E"));
console.log(getUser);


const getAllUser = africanCountries.filter((country) => country.length > 5);
console.log(getAllUser); 

const capitalLetter = africanCountries.map((country) => country.toUpperCase());
console.log(capitalLetter);

const allCountry = africanCountries.every((Country) => Country.includes ('p'));
console.log(allCountry);

let myBalance = 5000
const transactions = [2000, -100, 1000, -500, 400];

const debit = transactions.filter((transfer) => transfer < 0 );
console.log(debit);

const credit = transactions.filter((transfer) => transfer > 0);
console.log(credit);



const checkIfAny = transactions.some((transfer) => transfer > myBalance);
console.log(checkIfAny);


const totalBalance = transactions.reduce((a, b) => {return a + b}, myBalance );
console.log(totalBalance);



