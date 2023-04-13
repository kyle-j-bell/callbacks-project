/*******************************************************************************
Write a function `one` that accepts an array and a callback as arguments. The
function should call the callback for each element of the array, passing in the
element and its index. The function should return a boolean indicating whether
or not exactly one element of the array results in true when passed into the callback.

Examples:

let result1 = one(['x', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result1);   // false

let result2 = one(['x', 'a', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result2);   // true

let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
    return el === 'a';
});
console.log(result3);   // false

let result4 = one(['apple', 'dog'], function(el) {
    return el.length > 3;
});
console.log(result4);   // true

let result5 = one(['apple', 'dog', 'pear'], function(el) {
    return el.length > 3;
});
console.log(result5);   // false

let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
    return el.length === idx;
});
console.log(result6);   // true
*******************************************************************************/
/*Accepts an array and a callback as arguments.*/
let one = function(array, cb) {
    /*Variable 't' counts the number of times an element and its index return true when passed through the callback.*/
    let t = 0;
    /*Iterates through the array.*/
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i) === true) {
            /*Increments 't' by 1 if the current element and its index return true.*/
            t++;
        }
    }
    /*Returns true when 't' is strictly equal to 1.*/
    return t === 1;
};

let isEven = function(num) {
    return num % 2 === 0;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = one;
