/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/
/*Accepts an array and an optional callback as arguments.*/
let minValueCallback = function(array, cb) {
    /*Declares a 'min' initialized to Infinity, which will be used to find the minimum value in the array.*/
    let min = Infinity;
    /*Iterates through each number in the array.  If a number is lower than min, then it is assigned to min.*/
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    /*If no callback is provided, the minimum value is returned as is.  Otherwise, the function returns the result of the minimum value passed through the callback.*/
    if (cb === undefined) {
        return min;
    }
    return cb(min);
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
