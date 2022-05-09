const ASCIIarray = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 160, 221, 92, 46,
    20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 222, 13, 16, 92, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16,
    17, 91, 18, 32, 18, 17, 37, 40, 39];
    const englishLayout = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u',
    'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n',
    'm', ',', '.', '/', '&#8593', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl'];
    const englishLayoutUpperCase = englishLayout.map(element => element.toUpperCase());
    const englishShiftLayout = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u',
    'i', 'o', 'p', '{', '}', '|', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n',
    'm', '<', '>', '?', '&#8593', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl'];
    const englishShiftLayoutUpperCase = englishShiftLayout.map(element => element.toUpperCase());
    const russianLayout = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г',
    'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т',
    'ь', 'б', 'ю', '.', '&#8593', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl'];
    const russianLayoutUpperCase = russianLayout.map(element => element.toUpperCase());
    const russianShiftLayout = ['~', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г',
    'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т',
    'ь', 'б', 'ю', ',', '&#8593', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl'];
    const russianShiftLayoutUpperCase = russianShiftLayout.map(element => element.toUpperCase());

export class Keyboard {
    constructor() {
        let bodyCode = '<textarea id="input" autofocus></textarea><div id="keyboard">';
    
        for (let i = 0; i < 64; i++) {
          bodyCode += `<div class="button" onclick="keyClick(this)" id = "${ASCIIarray[i]}">
          <span id="text">${englishLayout[i]}</span></div>`;
        }
    
        bodyCode += '</div>';
        document.body.innerHTML = bodyCode;
      }
    
      keysPressed = [];
    
      keyDown = function (e) {
        if (e.repeat === true) {
          return;
        }
        if (!ASCIIarray.includes(e.keyCode)) {
          return;
        }
        const code = e.keyCode;
        console.log(e.keyCode);
        document.getElementById(`${code}`).classList.add('button-pressed');
        keyBoard.keysPressed.push(code);
      };
    
      keyUp = function (e) {
        if (e.repeat === true) {
          return;
        }
        if (!ASCIIarray.includes(e.keyCode)) {
          return;
        }
        const code = e.keyCode;
        document.getElementById(`${code}`).classList.remove('button-pressed');
        keyBoard.checkCombination();
        keyBoard.keysPressed = keyBoard.keysPressed.filter((element) => element !== code);
      };
    
      checkCombination = function () {
        const combination = keyBoard.keysPressed.join('-');
        switch (combination) {
          case '16-18':
            language === 'en' ? language = 'ru' : language = 'en';
            localStorage.setItem('language', language);
            keyBoard.updateLanguage();
            break;
        }
      };
    
      updateLanguage = function () {
        keyBoard = new KeyBoard();
      };
}