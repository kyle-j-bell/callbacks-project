/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

Examples:

let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true

*******************************************************************************/
/*Accepts an array, a number, and a callback as arguments.  Returns true if num equals the number of elements in the array that return true when passed through the callback.*/
let exactly = function(array, num, cb) {
    /*Variable 'c' counts the number of elements that return true when passed through the callback using a 'for' loop.*/
    let c = 0;
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i]) === true) {
            c++;
        }
    /*Returns true is c is strictly equal to the number.*/
    }
    return c === num;
};

let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = exactly;
