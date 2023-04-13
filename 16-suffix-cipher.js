/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/
/*Accepts a sentence and an object as arguments.*/
let suffixCipher = function(sentence, obj) {
    /*Converts the sentence into an array using .split(" ").*/
    let sentSplit = sentence.split(" ");
    /*Iterates through each key in the object.*/
    for (let key in obj) {
        /*Iterates the current key through each word in the array.*/
        for (let i = 0; i < sentSplit.length; i++) {
            /*Uses .endsWith() to determine if the current word ends with the current key.*/
            if (sentSplit[i].endsWith(key)) {
                /*Overwrites the current word with the callback stored as the value for the current key if true.*/
                sentSplit[i] = obj[key](sentSplit[i]);
            }
        }
    }
    /*Returns the word array converted into a string using .join(" ").*/
    return sentSplit.join(" ");
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
