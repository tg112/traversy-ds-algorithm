function findMaxNumber(nums) {
  // return Math.max(...nums);
  let maxNumber = nums[0];
  for (let num of nums) {
    if (maxNumber < num) {
      maxNumber = num;
    }
  }
  return maxNumber;
}

module.exports = findMaxNumber;
