// STRINGS- text characters in dounle or single quotes "text" or 'text'
const firstName = 'john'
const lastName = 'doe'
const middleName = 'pius'
// STING PROPERTIES e.g firstName.length:
console.log(firstName.length, middleName.length);
// STRING CONCATENATION(joining of strings '+' e.g a+b )
const fullName = firstName + " " + lastName 
console.log(fullName);
console.log(fullName.length);
// STRING METHODS-Built in js functions that works on strings 
// toUppercase, toLowercase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// STARTSWITH, ENDSWITH, INCLUDES
console.log(fullName.startsWith("joh"));
console.log(fullName.endsWith("oe"));
console.log(fullName.includes("n d"));
//  REPLACE AND REPLACEALL
console.log(fullName.replace("o", "#" ));
console.log(fullName.replaceAll("o", "#"));

const email = 'okunolapiusola@gmail.com'
console.log(email);
console.log(email.length);
console.log(email.toUpperCase());
console.log(email.replace("@", "*"));
console.log(email.includes("m"));
console.log(email.endsWith("google.com"));

// charAt, indexOf, lastIndexOf 
// note java is a zero based language(assigning position from 0)
console.log(email.charAt(2));
console.log(email.indexOf("o"));
console.log(email.lastIndexOf("o"));

// concat, trim, slice, substring, substr
// concat
console.log(fullName.concat(" is my name"));
// trim removes whitespace
const username = "    user001 ";
console.log(username);
console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());
// extract portions of a string
const surname = 'brooke'
// slice, substring(start, end (non-inclusive))
console.log(surname.slice(0, 3));
console.log(surname.substring(0, 4));
// substr (start, numbers of characters)
console.log(surname.substr(2, 2));


// concatenation
const author = "Chinua Achebe"
const bookTitle = "Thing Fall Apart"
const yearPublished = 1997;

// the book things fall apart written by chinua achebe was published in the year 1997


// template literals `${varName}`
const summary = `The book ${bookTitle} was authoured by ${author.toUpperCase()}`;


const summary2 = `${author} wrote the book ${bookTitle}`;
console.log(summary2);

// qoute Tinubu said and i quote 'let the poor breathe'
const qoute = `Tinubu said and i quote 'let the poor breathe'`;
console.log(qoute);



// classwork
const helloWorld = 'Hello world'
const hello = 'Hello'
console.log(helloWorld.toUpperCase());
const javaScript = 'JAVASCRIPT'
console.log(javaScript.toLowerCase());
console.log(hello.charAt(0));
console.log(helloWorld.slice(6, 11));

const iLikeCats = 'i like cats'
console.log(iLikeCats.replace("cats", "dogs"));
console.log(helloWorld.startsWith("Hello"));
const sokaratis = 'sokratis Papastathopoulos'
console.log(sokaratis.length);
const nickName = 'penny yung'
const FavClub = 'chelsea'
console.log(nickName);
console.log(FavClub);
const story = `i am ${nickName} and my favourite club is ${FavClub}`
console.log(story);


