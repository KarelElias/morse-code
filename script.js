function convertToMorse() {
    const text = document.getElementById('inputText').value.toUpperCase();
    let morseCode = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            morseCode += ' / ';
        } else if (MORSE_CODE[text[i]]) {
            morseCode += MORSE_CODE[text[i]] + ' ';
        }
    }
    document.getElementById('output').innerText = morseCode.trim();
}

function convertToText() {
    const morse = document.getElementById('inputText').value.trim().split(' ');
    let text = '';
    for (let i = 0; i < morse.length; i++) {
        if (morse[i] === '/') {
            text += ' ';
        } else {
            for (const [key, value] of Object.entries(MORSE_CODE)) {
                if (value === morse[i]) {
                    text += key;
                    break;
                }
            }
        }
    }
    document.getElementById('output').innerText = text;
}

const MORSE_CODE = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--',
    '?': '..--..', '\'': '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
    ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
    '$': '...-..-', '@': '.--.-.', ' ': '/'
};