const palindromes = function (str) {
    const inp = 'abcdefghijklmnopqrstuvwxyz01234566789';
    const upstr = str.toLowerCase().split('').filter((c) => inp.includes(c)).join('');

    const revstr = upstr.split('').reverse().join('');
    return upstr === revstr;
};

// Do not edit below this line
module.exports = palindromes;
