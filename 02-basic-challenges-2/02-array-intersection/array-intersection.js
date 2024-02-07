function arrayIntersection(arr1, arr2) {
  const arr = [];
  for (let num of arr1) {
    if (arr2.includes(num) && !arr.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
}

module.exports = arrayIntersection;
