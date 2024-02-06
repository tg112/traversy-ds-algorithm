function titleCase(str) {
  const splitedWords = str.split(' ');
  let sentence = [];
  for (let word of splitedWords) {
    sentence.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  return sentence.join(' ');
}

module.exports = titleCase;
