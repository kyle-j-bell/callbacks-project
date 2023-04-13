/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/
/*Accepts a number, val, and a callback as arguments.*/
let multiMap = function(val, n, cb) {
  /*Uses a 'for' loop to perform the callback on it n number of times before returning the result.*/
  for (let i = 0; i < n; i++) {
    val = cb(val);
  }
  return val;
};

/*In this example, the callback multiplies val by 10 and returns the result.*/
let timesTen = function(val) {
  val *= 10;
  return val;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = multiMap;
