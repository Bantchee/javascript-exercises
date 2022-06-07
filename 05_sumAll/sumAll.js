// Function takes 2 ints and returns the sum of every number between(and including) them
/* Psuedocode :
    sumALL(a,b)
    create variable sum
    if a or b is not type number
        return 'ERROR'
    else if a or b is negative
        return 'ERROR'
    else if a is greater than b
        Initizalize loop by setting i to b; sentry with a; finish at a
            Add sum + i and set to sum
    else
        Initizalize loop by setting i to a; sentry with b; finish at b
            Add sum + i and set to sum
    eturn sum
    */
// int int > int
const sumAll = function(a, b) {
    let sum = 0;

    if ((typeof(a) !== "number") || (typeof(b) !== "number")) {
        return "ERROR"
    } else if ((a < 0) || (b < 0)) {
        return "ERROR"
    } else if(a > b) {
        for(i = b; i <= a; i++) {
            sum += i;
        }
    } else {
        for(i = a; i <= b; i++) {
            sum += i;
        }
    }


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
