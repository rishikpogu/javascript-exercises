const repeatString = function(string, num) {
    let x = ''
    while(num) {
        if (num < 0) {
            x = 'ERROR'
            break
        }
        else {
            x += string
            num--
        }
    }
    return x
};

// Do not edit below this line
module.exports = repeatString;
