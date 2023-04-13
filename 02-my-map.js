/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array#map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/
/*Accepts an array and a callback as arguments.*/
let myMap = function(array, cb) {
    let newArray = [];
    /*Uses a 'for' loop to pass array elements and their indices into a callback function, and pushes the result to a new array.*/
    for (let i = 0; i < array.length; i++) {
        newArray.push(cb(array[i]));
    }
    return newArray;
};

/*In this example, using an array of numbers, the callback returns each number in the array squared.*/
let cb = function(num) {
    return num ** num;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myMap;
