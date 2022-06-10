// Function returns true if string is palindromes
// same front to back
// IN > OUT : String > Boolean
// Psuedocode :
// create array variable
// seperate str by characters, store in array
// filter non letters from array (filter: spaces, commas, etc.), set to array variable
// collaspes array and set to forwardStr variable
// reverse order of array, collapse array, and set to backwardStr variable
// compare string and reverse string
    // return true if same
    // return false if not
const palindromes = (str) => {
    let arr = str.split('');
    arr = arr.filter(ele => /[A-za-z]/.test(ele));

    let forwardStr = arr.join('').toLowerCase();
    let backwardStr = arr.reverse().join('').toLowerCase();

    return forwardStr === backwardStr;
};

// console.log(`test 1: ${palindromes('Race, car')}`);
// console.log(`test 2: ${palindromes('race, cart')}`);

// Do not edit below this line
module.exports = palindromes;
