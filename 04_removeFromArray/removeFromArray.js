const removeFromArray = function(array, ...b) {
    // let newArr = []
    for (let i = 0; i < array.length; i++) {
        for (let j of b) {
            if (array[i] === j) {
                array.splice(i, 1)
                i--
                break
            }
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
