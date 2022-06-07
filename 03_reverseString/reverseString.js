// Psuedocode :
// create array strArr from str
// create string reverseStr variable
// loop through elements of strArry (end to beginning)
    // append elements to reverseStr
// return reverseStr
// Sting > String
const reverseString = function(str) {
    const strArr = str.split('');
    let reverseStr = "";

    for(let i = strArr.length - 1; i >= 0; i--) {
        reverseStr += strArr[i];
    }

    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
