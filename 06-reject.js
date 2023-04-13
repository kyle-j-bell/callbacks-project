/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]
*******************************************************************************/
/*Accepts an array of strings and a callback as arguments, passes each string through the callback, then returns a new array of strings that return false.*/
let reject = function(array, cb) {
    let approvedArray = [];
    for (i = 0; i < array.length; i++) {
        if (cb(array[i]) === false) {
            approvedArray.push(array[i]);
        }
    }
    return approvedArray;
};

/*In this example, words that end with "y" are rejected from the new array.*/
let endsWithY = function(word) {
    return word.toLowerCase().endsWith("y");
}







/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = reject;
