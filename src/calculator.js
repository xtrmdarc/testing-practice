const Calculator = (() => {
  const add = (a, b) => a + b;

  const substract = (a, b) => a - b;

  const multiply = (a, b) => a * b;

  const divide = (a, b) => {
    if (b === 0) {
      throw new Error('Division by 0 not allowed');
    } else {
      return a / b;
    }
  };

  return {
    add,
    substract,
    multiply,
    divide,
  };
})();

export default Calculator;