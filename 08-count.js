/*******************************************************************************
Write a function `count` that accepts an array and a callback as arguments. The
function should return the number of elements of the array that return true when
passed to the callback.

Examples:

let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3

let result2 = count([17, 5, 31, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result2); // 1

let result3 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('o');
});
console.log(result3); // 3

let result4 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('x');
});
console.log(result4); // 0
*******************************************************************************/
/*Accepts an array and a callback as arguments.*/
let count = function(array, cb) {
    /*Variable "c" is used to count how many elements in the array return true when passed through the callback.*/
    let c = 0;
    /*Iterates through each element in the array.*/
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i]) === true) {
            /*Increments 'c' by 1 if the current element passed through the callback returns true.*/
            c++;
        }
    }
    /*Returns the total number of true results.*/
    return c;
}

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

let isEven = function (num) {
    if (num % 2 === 0) {
        return true;
    }
    return num;
}

let isPositive = function (num) {
    if (num > 0) {
        return true;
    }
    return num;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = count;
