
function caesar(str, shift) {

  let encrypted = '';
  str.split('').forEach(p => {
    if (p.charCodeAt(0) >= 97 && p.charCodeAt(0) <= 122) {
      encrypted += String.fromCharCode( (p.charCodeAt(0) + shift - 97) % 26 + 97);
    }
    else if (p.charCodeAt(0) >= 65 && p.charCodeAt(0) <= 90) {
      encrypted += String.fromCharCode( (p.charCodeAt(0) + shift - 65) % 26 + 65);
    }
    else {
      encrypted += p;
    }
  });
  return encrypted;
}

export default caesar;