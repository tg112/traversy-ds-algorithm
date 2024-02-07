function countVowels(word) {
  let counter = 0;
  for (let char of word.toLowerCase()) {
    if (/^a|i|u|e|o/g.test(char)) {
      counter += 1;
    }
  }
  return counter;
}

module.exports = countVowels;
