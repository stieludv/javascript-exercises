const caesar = function(text, shift) {
    const cipheredText = [];
    for (char of text.split("")) {
        const charCode = char.charCodeAt();

        // Shift value without "excess"
        let actualShift = shift;
        // If the shift is more than 27 or less than -27 we have to remove the excess shift
        if (shift > 27 || shift < -27) {
            actualShift = shift % 26;
            // We need to do modulus 26 since 27 % 27 would yield us 0 shift
            // But in reality, if we moved 27 steps from our current step we would end up 1 character infront
            // Since we are already occupying one of the 26 characters.
            // If we want to shift 0 without having shift 0 we would have to move in blocks of 26 
        }
        // Now we know what range of shift we are working with

        // Since we haven now checked if we have any excess we can define our newCharCode with our actualshift
        let newCharCode = charCode + actualShift;

        if (charCode >= 65 && charCode <= 90) {
            // If the actualShift puts our charCode outside the range of 65 - 90 
            if (newCharCode > 90) {
                let addition = (charCode + actualShift) - 90;
                // We have to start counting the excess (above 90) shift from 64 (positive/forward)
                // We start from 64 since 65 is a part of our range (we must count it)
                newCharCode = 64 + addition;
            }
            if (newCharCode < 65) {
                // Our shift needs to go minus from the top of the range
                // Find the amount we need to subtract from 91 to get our newCharCode
                // We start from 91 since we need to count 90 (for example if we were only minus 1 we need letter at top of range)
                let subtract = 65 - (charCode + actualShift);
                newCharCode = 91 - subtract;
            }
            cipheredText.push(String.fromCodePoint(newCharCode));
        }
        else if (charCode >= 97 && charCode <= 122) {
            
            // If the actualShift puts our charCode outside the range of 65 - 90 
            if (charCode + actualShift > 122) {
                let addition = (charCode + actualShift) - 122;
                // We have to start counting the excess (above 90) shift from 64 (positive/forward)
                // We start from 64 since 65 is a part of our range (we must count it)
                newCharCode = 96 + addition;
            }
            if (charCode + actualShift < 97) {
                // Our shift needs to go minus from the top of the range
                // Find the amount we need to subtract from 91 to get our newCharCode
                // We start from 91 since we need to count 90 (for example if we were only minus 1 we need letter at top of range)
                let subtract = 97 - (charCode + actualShift);
                newCharCode = 123 - subtract;
            }

            cipheredText.push(String.fromCodePoint(newCharCode));
        }
        else {
            // Other, just push it
            cipheredText.push(char);
        }
    }
    return cipheredText.join("");
};

// Do not edit below this line
module.exports = caesar;
