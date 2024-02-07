function removeDuplicates(arr) {
  const answer = [];
  for (let val of arr) {
    if (!answer.includes(val)) {
      answer.push(val);
    }
  }
  return answer;
}

module.exports = removeDuplicates;
