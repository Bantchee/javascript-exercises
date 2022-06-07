/* 
    Function that determines if a given year is a leap year
    Input > Output : Int > Boolean
    Psuedocode :
        if year is divisible by 4
            if year is divisible by 100
                if year is divisible by 400
                    return true;
                else 
                    return false;
            else
                return true;
        else
            return false;
*/
const leapYears = function(year) {
    if(year % 4 == 0) {
        if(year % 100 == 0) {
            if(year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
