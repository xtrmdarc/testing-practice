const capitalize = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  if (!str[0].match('[A-Za-z]')) {
    return str;
  }

  return `${str[0].toUpperCase()}${str.slice(1, str.length)}`;
};

export default capitalize;