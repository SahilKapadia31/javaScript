
// (1) What will The following print in JS? console.log("har\"".length).

let str = "Har\"";
console.log(str.length);

// ans = 4;

// (2) Explore the includes, startswith & endswith functions of a string?

const sentence = "The quick brown fox jumps over the lazy dog."
const word = "fox"

console.log(sentence.includes(word))
console.log(sentence.startsWith(word))
console.log(sentence.endsWith(word))

// (3) Write a program to convert the following string to lower case?

let nm = "Sahil";
console.log(nm.toLowerCase());

// (4) Extract the amount of the string "Please give Rs 1000"

let str2 = "Please give Rs 1000"
let amount = str2.slice("Please give Rs ".length)
let amount1 = parseInt(str2.slice(15)) // to convert it from string to int  
console.log(amount);

// (5) Try to change 4th character of a given string, were you able to do it?

let friend = "Deepkia"
friend[3] = "R"
console.log(friend) // it does not work because string is immutable