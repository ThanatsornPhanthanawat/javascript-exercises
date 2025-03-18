const palindromes = function () {
// Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Check if the string is equal to its reverse
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
