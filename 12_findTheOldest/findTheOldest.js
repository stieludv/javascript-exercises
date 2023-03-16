const findTheOldest = function(people) {
    return people.reduce((accumulator, currentValue, currentIndex, array) => {
        const birthYear = currentValue.yearOfBirth;
        const maxYear = currentValue?.yearOfDeath ? currentValue.yearOfDeath : new Date().getFullYear();
        const age = maxYear - birthYear;
        if (age > accumulator.age) {
            return {...currentValue, age: age};
        }
        else {
            return {...accumulator};
        }
    }, {age: -1})
};

// Do not edit below this line
module.exports = findTheOldest;
