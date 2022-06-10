const findTheOldest = function(people) {
    return people.sort((personA, personB) => {
        if('yearOfDeath' in personA) {
            
            if('yearOfDeath' in personB) {
                return (personA.yearOfDeath - personA.yearOfBirth) - (personB.yearOfDeath - personB.yearOfBirth);
            }
            return (personA.yearOfDeath - personA.yearOfBirth) - (2022 - personB.yearOfBirth);
        } else if ('yearOfDeath' in personB) {
            return (2022 - personA.yearOfBirth) - (personB.yearOfDeat - personB.yearOfBirth);
        }
        return (2022 - personA.yearOfBirth) - (2022 - personB.yearOfBirth)
    }).pop();
};

// Do not edit below this line
module.exports = findTheOldest;
