const palindromes = function (word) {
    let regexFilter = new RegExp('[a-zA-Z]');
    let sanitizedWord = word.split("").filter((char) => regexFilter.test(char)).join("");
    let reversedWord = sanitizedWord.split("").reverse().join("");
    return sanitizedWord.toLowerCase() === reversedWord.toLowerCase() ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
