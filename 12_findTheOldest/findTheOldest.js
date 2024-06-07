const findTheOldest = function(people) {
    people.forEach((obj) => {
        if (!obj.yearOfDeath) {
            obj.yearOfDeath = new Date().getFullYear()
        }
    });
    people.sort((a,b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1)
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
