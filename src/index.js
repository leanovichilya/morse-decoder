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
  '-----': '0'
};

function decode(expr) {
  // write your solution here
  let decodeSymbol = '';
  let morseMessage = '';
  let decodeMessage = '';
  let countAsterisc = 0;
  let count = 0;

  for (let i = 0; i < expr.length; i += 1) {
    count += 1;
    if (expr[i] === '1') {
      decodeSymbol += expr[i] + expr[i + 1];
      i += 1;
      count += 1;

      if (decodeSymbol === '10') {
        morseMessage += '.';
      } else {
        morseMessage += '-';
      }

      decodeSymbol = '';
    } else if (expr[i] === '*') {
      countAsterisc += 1;

      if (countAsterisc === 10) {
        decodeMessage += ' ';
        countAsterisc = 0;
      }
    }

    if (count % 10 === 0 && morseMessage !== '') {
      decodeMessage += MORSE_TABLE[morseMessage];
      morseMessage = '';
    }
  }

  return decodeMessage;
}

module.exports = {
  decode
};
