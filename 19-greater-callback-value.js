/*******************************************************************************
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.

Examples:

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18
*******************************************************************************/
/*Accepts a number and two callbacks as arguments.  Returns the greater value of the number passed through each callback.*/
let greaterCallbackValue = function(n, cb1, cb2) {
    if (cb1(n) > cb2(n)) {
        return cb1(n);
    }
    return cb2(n);
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = greaterCallbackValue;
