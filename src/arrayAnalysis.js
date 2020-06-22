const analyze = (arr) => {
  const sorted = arr.sort();
  if (arr.length === 0) {
    throw new Error('Empty array not allowed');
  } else if (arr.some(x => typeof x === 'string')) {
    throw new Error('String array not allowed');
  } else {
    const getAverage = () => {
      const avg = arr.reduce((a, b) => a + b, 0);
      return avg / arr.length;
    };
    const analysis = {
      average: getAverage(),
      min: sorted[0],
      max: sorted[sorted.length - 1],
      length: arr.length,
    };
    return analysis;
  }
};

export default analyze;