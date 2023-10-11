
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

// Loops in array

let num = [1, 21, 3, 9, 4, 5, 6, 8];
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

// FOREACH METHOD

num.forEach((ele) => {
    console.log(ele * ele)
})

// FROM METHOD

let naam = "Sahil"
let arr = Array.from(naam);
console.log(arr);

// FOR OF METHOD

for (const i of num) {
    console.log(i)
}

// FOR IN METHOD

for (const i in num) {
    console.log(i)
    // console.log(num[i])
}

// MAP METHOD

let a = num.map((val, index, array) => {
    console.log(val, index, array);
    return val + 1;
})
console.log(a);

// FILTER METHOD

let b = num.filter((n) => {
    return n > 5;
})
console.log(b);

// REDUCE METHOD

let c = num.reduce((r1, r2) => {
    return r1 + r2;
})
console.log(c);


// (6) Create an array of number and take input from the user to add numbers to this array.

let n = [1, 2, 3, 6, 4, 9, 85]
let d = prompt("Enter a number");
d = Number.parseInt(d);
n.push(d);
console.log(n);


// (7) Keep adding numbers to the array in (6) until 0 is added to the array.

let n1 = [1, 2, 3, 6, 4, 9, 85];
let d1;
do {
    d1 = prompt("Enter a number");
    d1 = Number.parseInt(d1);
    n1.push(d1);
    console.log(n1);
} while (d1 != 0)

// (8) Filter numbers divisible by 10 from a given array.

let n2 = [1, 20, 3, 60, 4, 9, 85];
let d2 = n2.filter((div) => {
    return div % 10 == 0;
})
console.log(d2);

// (9) Create an array of a square of given numbers.

let n3 = [1, 20, 3, 60, 4, 9, 85];
let d3 = n3.map((m) => {
    return m * m;
})
console.log(d3);

// (10) Use reduce to calculate factorial of a given numbers from an array of first n natural numbers
//  (n being the number whose factorial needs to be calculated.)

let n4 = [1, 2, 3, 4, 5];
let d4 = n4.reduce((m1, m2) => {
    return m1 * m2;
})
console.log(d4);