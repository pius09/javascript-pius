//OBJECTS {key: value, key: value}
// objects are descriptive and can take any data type
const person = {
  name: "john doe",
  age: 42,
  complexion: "dark",
  isMarried: true,
  friends: ["jane", "peter", "susan"],
  // object methods - function declaration written by the dev inside of an object
  description: function () {
    return `my name is ${this.name}, and i am ${this.age} years old`;
  },
  maritalSummary: function () {
    return `${this.name} ${this.isMarried ? "is" : "is not"} married`;
  },
};
console.log(person.maritalSummary());

console.log(person.description());


console.log(person);

//how to get properties from object- dot notation, bracket notation
// for dot notation we use the OBJECTNAME.PROPERTYNAME
console.log(person.name.toUpperCase());
console.log(person.friends);
console.log(person.friends[1]);

// bracket notation OBJECTNAME['PROPERTYNAME']
console.log(person["friends"][0]);

// adding new properties to an object
person.height = "6'1";
person.gender = "male";
person["hobby"] = "swimming";


// remove properties - delete
delete person.complexion;


console.log(person);


// nested object
// id, personal info, contact info, account info
const customer = {
  id: "cust-1",
  personalInfo: {
    firstName: "Peter",
    lastName: "Pan",
    gender: "Male",
    dateOfBirth: "1990-06-12",
    nationality: "Nigerian",
  },
  contactInfo: {
    email: "peterpan@gmail.com",
    phone: "+2348012345678",
    address: {
      street: "12, bode thomas",
      city: "Lagos",
      postalCode: "100001",
    },
  },
  accountInfo: {
    cardType: "visa",
    accountNumber: "012345678",
    accountType: "Savings",
  },
  // write a method called greeting - hello Peter, welcome back
  greeting: function () {
    return `Hello ${this.personalInfo.firstName}, Welcome Back`;
  },
  // write a method getAddress -> peter lives at 12 bode thomas street,lagos
  getAddress: function(){
    return `${this.personalInfo.firstName} lives at ${this.contactInfo.address.street} street, ${this.contactInfo.address.city} `;
  },
};
console.log(customer.getAddress());

console.log(customer.greeting());

console.log(customer.personalInfo.dateOfBirth);
console.log(customer.contactInfo.address.street);

// adding bank name to the account info
customer.accountInfo.bankName = "GTBank";

// object methods - function declaration written by the dev inside of an object


// object destructuring - allows us to pick mutiple properties from object at a time
const book ={
  title: "Purple Hibiscus",
  author: "Chimanda Ngozi Adichie",
  yearPublished: 2003,
  theme: ["family", "religion", "freedom"],
  setting:{
    country:"Nigeria",
    cities:["Enugu", "Nsukka"],
    timePeriod: "postcolonial Nigeria",
  },
};

const {title, yearPublished, theme, setting:{country} } = book;
console.log(title, yearPublished, theme, country);










































































































