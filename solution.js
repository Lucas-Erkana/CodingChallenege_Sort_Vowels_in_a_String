/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
  // Function to check if a character is a vowel
  const isVowel = (char) => {
      return 'aeiouAEIOU'.includes(char);
  };

  // Collect and sort vowels from the string
  const vowels = s.split('').filter(char => isVowel(char)).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  
  // Use a pointer to keep track of the position in the sorted vowels array
  let vowelIndex = 0;

  // Replace vowels in the original string with the sorted vowels
  let sortedString = '';
  for (let char of s) {
      if (isVowel(char)) {
          sortedString += vowels[vowelIndex++];
      } else {
          sortedString += char;
      }
  }

  return sortedString;
};



  let parameter = 'test data'
console.log(sortVowels('AbEcIdOfU')) //expected result AbEcIdOfU

module.exports = sortVowels;