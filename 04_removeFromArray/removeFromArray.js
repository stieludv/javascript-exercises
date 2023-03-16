const removeFromArray = function(itemArray, ...removeItems) {
    const newArray = [];
    for (arrayItem of itemArray) {
        let pushItem = true;
        for (item of removeItems) {
            if (arrayItem === item) {
                pushItem = false;
                break;
            }
        }
        if (pushItem) {
            newArray.push(arrayItem);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
