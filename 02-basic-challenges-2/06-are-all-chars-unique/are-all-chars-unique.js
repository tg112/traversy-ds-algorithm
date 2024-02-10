function areAllCharactersUnique(word) {
  const charMap = {};

  for (let char of word) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = areAllCharactersUnique;
