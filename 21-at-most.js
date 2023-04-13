/*******************************************************************************
Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
at most (fewer than or equal to) `max` elements of the array that result in true
when passed into the callback.

Examples:

let isPositive = function (n) {
    return n > 0;
};
let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
};

console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false

*******************************************************************************/
/*Accepts an array, a maximum number, and a callback as arguments.*/
let atMost = function(array, max, cb) {
    /*Uses Array.filter to assign to a new array all elements of array that return true when passed through the callback.*/
    let mostArray = array.filter(element => cb(element) === true);
    /*Returns true if the number of elements in the filtered array is equal to or less than max.*/
    return mostArray.length <= max;
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = atMost;
