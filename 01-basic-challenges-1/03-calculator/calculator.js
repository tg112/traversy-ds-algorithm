function calculator(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '/') {
    return num1 / num2
  }
  if (operator === '*') {
    return num1 * num2;
  }
  throw new Error('got unexpected operator')
}

module.exports = calculator;
