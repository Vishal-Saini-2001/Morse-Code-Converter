// Morse code mapping
const MORSE_CODE_MAP: { [key: string]: string } = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
  '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..',
  "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
  '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.',
  '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
  ' ': '/'
};

// Reverse mapping for morse to text conversion
const REVERSE_MORSE_MAP: { [key: string]: string } = {};
Object.keys(MORSE_CODE_MAP).forEach(key => {
  REVERSE_MORSE_MAP[MORSE_CODE_MAP[key]] = key;
});

export const textToMorse = (text: string): string => {
  return text
    .toUpperCase()
    .split('')
    .map(char => MORSE_CODE_MAP[char] || char)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
};

export const morseToText = (morse: string): string => {
  return morse
    .split(' ')
    .map(code => {
      if (code === '/') return ' ';
      return REVERSE_MORSE_MAP[code] || code;
    })
    .join('')
    .replace(/\s+/g, ' ')
    .trim();
};

export const isValidMorseCode = (morse: string): boolean => {
  const morsePattern = /^[.\-\s/]*$/;
  return morsePattern.test(morse);
};