const sumAll = function(startingInt, endingInt) {
    if (typeof startingInt !== "number" || typeof endingInt !== "number") {
        return "ERROR";
    }
    if (startingInt < 0 || endingInt < 0) {
        return "ERROR";
    }
    const pairTotal = startingInt + endingInt;
    const maxInt = startingInt > endingInt ? startingInt : endingInt;
    const minInt = startingInt > endingInt ? endingInt : startingInt;
    const pairs = (maxInt - (1 - minInt)) / 2;
    return pairTotal * pairs;
};

// Do not edit below this line
module.exports = sumAll;
