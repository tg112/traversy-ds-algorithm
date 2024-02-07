function reverseString(str) {
  // let ans = [];
  // for (let char of str) {
  //   ans.unshift(char);
  // }
  // return ans.join('');
  return str.split('').reverse().join('');
}

module.exports = reverseString;
