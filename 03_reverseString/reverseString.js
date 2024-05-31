const reverseString = function(string) {
    let myArr = string.split("")
    let revArr = []
    for (let i=0; i < myArr.length; i++) {
        revArr[i] = myArr[myArr.length -1 - i]
    }
    let revStr = revArr.join('')
    return revStr
};

// Do not edit below this line
module.exports = reverseString;
