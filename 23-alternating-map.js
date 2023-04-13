/*******************************************************************************
Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.

In other words,
    - the first element should be passed to callback 1
    - the second element should be passed to callback 2
    - the third element should be passed to callback 1
    - the fourth element should be passed to callback 2
    - ... and so on

Examples:

let triple = function (n) {
    return 3 * n;
};

let half = function (n) {
    return n / 2;
};
console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// [ 21, 1.5, 6, 4.5, 24 ]


let yell = function (s) {
    return s.toUpperCase() + '!';
};

let whisper = function (s) {
    return '..' + s.toLowerCase() + '..';
};
console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]

*******************************************************************************/
/*Accepts an array and two callbacks as arguments.*/
let alternatingMap = function(array, cb1, cb2) {
    /*Iterates through the array.*/
    for (let i = 0; i < array.length; i++) {
        /*Checks if the current index is odd or even.  Even indices should be passed to the first callback, and odd indices to the second.*/
        if (i % 2 === 0) {
            /*Overwrites the current element with its result from being passed into the first callback.*/
            array[i] = cb1(array[i]);
        }
        else {
            /*Overwrites the current element with its result from being passed into the second callback.*/
            array[i] = cb2(array[i]);
        }
    }
    /*Returns the new array.*/
    return array;
};

let tripler = function(num) {
    return num * 3;
}

let doubler = function(num) {
    return num * 2;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = alternatingMap;
