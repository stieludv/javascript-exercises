const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    // We know the first two fibonacci are always one
    if (n <= 2) {
        return 1;
    }
    let sequence = [1, 1];
    // -2 since we already have an if statement to handle that (they are pre-coded in sequence)
    for (let i = 0; i < n - 2; i++) {
        sequence.unshift(sequence[0] + sequence[1]);
    }
    return sequence[0];
};

// Do not edit below this line
module.exports = fibonacci;
