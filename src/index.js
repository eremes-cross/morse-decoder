const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) { 
    
    function wordDecoder(el) {
      
        let unCut;
        let letter;
        let letters = [];     
      
          for (let i = 0; i < el.length; i += 10) { 
            unCut = el.slice(i, i + 10);
            letter = unCut.slice(unCut.indexOf(1)).replace(/10/g, `.`).replace(/11/g, `-`);
            letters.push(letter);
          } 
        
          for (let i = 0; i < letters.length; i++) {
            if (letters[i] in MORSE_TABLE) {letters[i] = MORSE_TABLE[letters[i]]} 
          } 
          
        el = letters.join('');
        return el;    
        }

    
    
    return expr.split(`**********`).map(item => wordDecoder(item)).join(' ');

}

module.exports = {
    decode
}
