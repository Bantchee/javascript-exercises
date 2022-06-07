// Problem : Filter a set of variables from an array
/* 
Psuedocode :
create a new array called newArr
filter out x from arr
set filtered arr to new arr
return newArr
*/
// Output-Input : Array-of-Any Any > Array-of-Any

const removeFromArray = function(arr, ...args) {
    let newArr = arr;

    for(x of args) {
        newArr = newArr.filter(item => item !== x);
    }
 
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
