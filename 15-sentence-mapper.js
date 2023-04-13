/*******************************************************************************
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.
The function should return a new sentence where every word of the original sentence
becomes the result of passing the word to the callback.

Examples:

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'
*******************************************************************************/
/*Accepts a sentence and a callback as arguments.  then each word in the string is passed to the callback with a 'for' loop.*/
let sentenceMapper = function(sentence, cb) {
    /*Converts the sentence into an array using .split(" ").*/
    let sentSplit = sentence.split(" ");
    /*Iterates through each word in the array.*/
    for (let i = 0; i < sentSplit.length; i++) {
        /*Overwrites the word with its result from passing it through the callback.*/
        sentSplit[i] = cb(sentSplit[i]);
    }
    /*Returns the overwritten array as a new string using .join(" ").*/
    return sentSplit.join(" ");
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = sentenceMapper;
