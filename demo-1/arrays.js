const arr = [10, 20, 30, 40, 50];

arr.forEach(x => {
    console.log(x);
})

const val = arr.find((x => {
    return x === 30;
}))

console.log("FIND", val);
console.log("TYPE", typeof (val))

const arry = arr.filter((x => {
    return x != 30;
}))

console.log("FILTER", arry);


const arr2 = arr.map((x) => {
    return Math.sqrt(x);
})

console.log(arr2);