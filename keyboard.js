    const ASCIIarrayEnglish = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 
      20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38,  91, 18, 32,  37, 40, 39, 17];
    const ASCIIarrayRussian = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46,
       20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38,  91, 18, 32, 37, 40, 39, 17];
    const englishLayout = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u',
    'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n',
    'm', ',', '.', '/', '&#8593', 'Win', 'Alt', 'Space', '&#8592', '&#8595', '&#8594', 'Ctrl'];
    const englishLayoutUpperCase = englishLayout.map(element => element.toUpperCase());
    const englishShiftLayout = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u',
    'i', 'o', 'p', '{', '}', '|', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n',
    'm', '<', '>', '?', '&#8593',  'Win', 'Alt', 'Space', '&#8592', '&#8595', '&#8594', 'Ctrl'];
    const englishShiftLayoutUpperCase = englishShiftLayout.map(element => element.toUpperCase());
    const russianLayout = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г',
    'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т',
    'ь', 'б', 'ю', '.', '&#8593', 'Win', 'Alt', 'Space', '&#8592', '&#8595', '&#8594', 'Ctrl'];
    const russianLayoutUpperCase = russianLayout.map(element => element.toUpperCase());
    const russianShiftLayout = ['~', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г',
    'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т',
    'ь', 'б', 'ю', ',', '&#8593', 'Win', 'Alt', 'Space', '&#8592', '&#8595', '&#8594', 'Ctrl'];
    const russianShiftLayoutUpperCase = russianShiftLayout.map(element => element.toUpperCase());

import * as actions from './actions.js';

export class Keyboard {
    ASCIIarray = []
    layout = []
    language = 'en'
    actions = new actions.Actions(); 
    constructor(language) {
      this.language = language
        if (language === 'en'){
            this.ASCIIarray = ASCIIarrayEnglish;
            this.layout = englishLayout;
        }
        if (language === 'ru'){
          this.ASCIIarray = ASCIIarrayRussian;
          this.layout = russianLayout;
        }
        let bodyCode = '<textarea id="input" autofocus></textarea><div id="keyboard">';
    
        for (let i = 0; i < 61; i++) {
          bodyCode += `<div class="button" style ="user-select:none" id = "${this.ASCIIarray[i]}">
         ${this.layout[i]}</div>`;
        }
    
        bodyCode += '</div><div>Создано под операционной системой Windows. <br> Для смены языка Shift + Alt.</div>'
        document.body.innerHTML = bodyCode;
      }
    
      keysPressed = [];
    
      keyDown(e) {
        if (e.repeat === true) {
          return;
        }
        if (!this.ASCIIarray.includes(e.keyCode)) {
          return;
        }
        const code = e.keyCode;
        document.getElementById(`${code}`).classList.add('button-pressed');
        this.keysPressed.push(code);
        if (document.getElementById(`${code}`).innerText.length === 1) {
          this.keyClick(document.getElementById(`${code}`).innerText, input.selectionStart);
        }
      };
    
      keyUp(e) {
        if (e.repeat === true) {
          return;
        }
        if (!this.ASCIIarray.includes(e.keyCode)) {
          return;
        }
        const code = e.keyCode;
        document.getElementById(`${code}`).classList.remove('button-pressed');
        let result = this.checkCombination();
        this.keysPressed = this.keysPressed.filter((element) => element !== code);
        return result;
      };

      keyClick(element, selectionStart){      
        switch (element){
          case 'Space':
            this.actions.printCharacter(' ', selectionStart);
            break;
          case 'Backspace':
            this.actions.backspace(selectionStart);
            break;
          case 'Tab':
            this.actions.printCharacter('\t', selectionStart);
            break;
          case 'Del':
            this.actions.del(selectionStart);
            break;
          case 'Enter':
            this.actions.printCharacter('\n', selectionStart);
            break;
          case 'Ctrl':
            return;
          case 'Alt':
            return;
          case 'Win':
            return;
          case 'Shift':
            return;
          case 'CapsLock':
            return;
          case '→':
            this.actions.arrowRight(selectionStart);
            break;
          case '←':
            this.actions.arrowLeft(selectionStart);
            break;
          case '↓':
            this.actions.arrowDown(selectionStart);
            break;
          case '↑':
            this.actions.arrowUp(selectionStart);
            break;
          default:
            this.actions.printCharacter(element, selectionStart);
            break;
        }
        
      }
    
      checkCombination() {
        const combination = this.keysPressed.join('-');
        switch (combination) {
          case '16-18':
            this.language === 'en' ? this.language = 'ru' : this.language = 'en';
            localStorage.setItem('language', this.language);
            return this.language;
        }
      };
}