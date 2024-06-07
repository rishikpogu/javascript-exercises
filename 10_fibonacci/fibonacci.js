const fibonacci = function(num) {
    if (num == 1 || num == 2) {
        return 1
    }
    else if (num == 0) {
        return 0
    }
    else if (num < 0) {
        return "OOPS"
    }
    let a = 1
    let b = 1
    let c
    for (let i = 3; i <= num; i++) {
        c = a + b
        a = b
        b = c
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
