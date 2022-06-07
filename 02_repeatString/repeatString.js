// Function repeats the string a given number of times
// declare variable result
// if num == 0
    // then set result to 'ERROR'
// else 
    // loop num times
        // append str to result
// return result
// String Num > String
const repeatString = function(str, num) {
    let result = "";
   
    if(num < 0) {
        result = "ERROR";
    } else {
        for(let i = 0; i < num; i++) {
            if(num )
            result += str;
        }    
    }

    return result
};

// Do not edit below this line
module.exports = repeatString;
