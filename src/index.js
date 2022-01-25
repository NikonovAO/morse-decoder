const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const wordLength = 10;
  const arrExpr = [];
  const arrMorze = [];
  const arrChar = [];
  const ten = /10/g;
  const eleven = /11/g;
  const zero = /0/g;

  for (let i = 0; i < expr.length; i += wordLength) {
    arrExpr.push(expr.substring(i, i + wordLength))
  }
  arrExpr.forEach((elem) => {
    arrMorze.push(elem.replace(ten, `.`).replace(eleven, `-`).replace(zero, '').replace('**********', ' '));
  })
  arrMorze.forEach((elem) => {
    MORSE_TABLE.hasOwnProperty(elem) ? arrChar.push(MORSE_TABLE[elem]) : arrChar.push(elem);
  })
  
  return arrChar.join('')
  
}

module.exports = {
  decode
}