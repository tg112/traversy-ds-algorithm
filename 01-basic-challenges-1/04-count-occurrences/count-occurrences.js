function countOccurrences(value, char) {
  return value.split(char).length - 1;
  
  // let counter = 0;
  // for (let val of value) {
  //   if (val === char) {
  //     counter += 1;
  //   }
  // }
  // return counter;
}

module.exports = countOccurrences;
