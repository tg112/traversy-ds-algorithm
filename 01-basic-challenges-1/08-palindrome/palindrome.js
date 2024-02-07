function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  const reverseStr =  formattedStr.split('').reverse().join('');
  return formattedStr === reverseStr;
}

module.exports = isPalindrome;
