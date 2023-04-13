/*******************************************************************************
Write a function `firstIndex` that accepts an array and a callback as arguments.
The function should return the index of the first element of the array that
results in true when passed into the callback. If no elements of the array
result in true, then the function should return -1.

Examples:

let result1 = firstIndex([3, 7, 8, 10], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 2

let result2 = firstIndex(['dog', 'cat', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result2); // 0

let result3 = firstIndex(['canine', 'feline', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result3); // -1
*******************************************************************************/
/*Accepts an array and callback as arguments.*/
let firstIndex = function(array, cb) {
    /*Iterates through the array.*/
    for (let i = 0; i < array.length; i++) {
        /*Returns the index of the first element of the array to return true when passed through the callback.*/
        if (cb(array[i]) === true) {
            return i;
        }
    }
    /*Returns -1 if no element returns true when passed through the callback.*/
    return -1;
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = firstIndex;
