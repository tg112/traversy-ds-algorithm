function findMissingNumber(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}

module.exports = findMissingNumber;
