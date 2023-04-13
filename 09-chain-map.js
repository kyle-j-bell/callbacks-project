/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
*******************************************************************************/
/*Accepts a single value, plus any number of callbacks using rest syntax as arguments.*/
let chainMap = function(n, ...cb) {
    /*Returns the value if there are no callbacks to pass it through.*/
    if (cb === undefined) {
        return n;
    }
    /*Captures the arguments written with rest syntax into an array by removing the "..." prefix.*/
    let callbackArray = cb;
    /*Uses a 'for' loop to pass the value 'n' through each callback in callbackArray, then returns the result.*/
    for (let i = 0; i < callbackArray.length; i++) {
        n = callbackArray[i](n);
    }
    return n;
};

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = chainMap;
