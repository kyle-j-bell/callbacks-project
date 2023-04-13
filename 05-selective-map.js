/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
    (optional if you already asked a question for this problem.)
- Explain how you are using both of the callbacks in the function.
- What do you expect each callback function to be returning?
- How many times are you calling each callback function?
*******************************************************************************/
/*Accepts an array of numbers and two callbacks as arguments, then returns a separate array of the numbers passed through at least the first callback.*/
let selectiveMap = function(array, cb1, cb2) {
    let selectedArray = [];
    /*The first callback returns true or the number unmodified.  If true, it is sent to the second callback.*/
    for (let i = 0; i < array.length; i++) {
        if (cb1(array[i]) === true) {
            /*The second callback modifies the number in some way, then pushes it to selectedArray.*/
            selectedArray.push(cb2(array[i]));
        } else {
            /*If the first callback returns the number unmodified, it is pushed to selectedArray.*/
            selectedArray.push(array[i]);
        }
    }
    return selectedArray;
};

/*In this example, the first callback returns true if a number is prime, and it is sent to the second callback to be "unprimed" by multiplying it by 2.*/
let isPrime = function(num) {
    /*Numbers equal to or less than 1 are ignored.*/
    if (num <= 1) {
        return num;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return num;
        }
    }
    return true;
}


let unPrime = function(num) {
    return num * 2;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = selectiveMap;
