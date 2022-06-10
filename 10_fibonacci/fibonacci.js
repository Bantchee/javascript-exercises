// Funciton returns the fibonacci number of the nth
// IN > OUT : Int > Int
// if negative
    // return "OOPS"
    // call helper()
const fibonacci = (num) => (num < 0) ? "OOPS" : helper(parseInt(num), 1, 0);

// Funciton returns the fibonacci number of the nth
// IN > OUT : Int Int Int > Int
const helper = (counter, val, previousVal) => {
    console.log(counter);
    if(counter == 1) {
        return val;
    } else if (val == 1) {
        return helper(counter-1, val+previousVal, val);
    } else {
        return helper(counter-1, val+previousVal, val);
    }
}

console.log(fibonacci("8"));

// Do not edit below this line
module.exports = fibonacci;
