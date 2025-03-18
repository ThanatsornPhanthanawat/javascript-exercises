const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
      // Calculate current person's age based on their birth and death year (if applicable)
      const currentYear = new Date().getFullYear();
      const age = (currentPerson.death || currentYear) - currentPerson.yearOfBirth;
  
      // Compare with the current oldest person
      if (!oldest || age > oldest.age) {
        return { ...currentPerson, age };
      }
      return oldest;
    }, null);
  };
  
  // Do not edit below this line
  module.exports = findTheOldest;
  