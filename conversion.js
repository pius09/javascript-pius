// type conversion - converting a datatype to another datatype

// const first = prompt("enter first number: ");
//  const second = prompt ("enter second number: ");
// const total = first + second; // 10 10 === 1010
// convert from string to number - '45.90' --->45.90
// parseInt, Number

const mystr = "92";
console.log(typeof mystr);

// const converted - parseInt(mystr);
const converted = Number (mystr);
console.log(typeof converted);

// converting numbers to string
const myNUm =  76;
console.log(typeof myNUm);

// string
const converted2 = String(myNUm);
console.log(typeof converted2);

const first = "10";
const second = "10";
const total = parseInt(first) + Number(second)
console.log(total);


// type coercion (force)
// 1000+ 1000+ 100010001000
const a = "5";
const b ="3";
console.log(a + b);  //concatenation 53
console.log(a - b);   //5
console.log(a / b);  //2
console.log(a * b); //50
console.log(a - b - b + b * 2); //5

// NAN--> not a number





