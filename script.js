
let language = localStorage.getItem('language') === null ? 'en' : localStorage.getItem('language')
const ASCIIarray = language === 'en'
  ? [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 160, 221, 92, 46,
      20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 222, 13, 16, 92, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16,
      17, 91, 18, 32, 18, 17, 37, 40, 39]
  : [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 160, 221, 92, 46,
      20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 222, 13, 16, 92, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16,
      17, 91, 18, 32, 18, 17, 37, 40, 39]

class Button {
  constructor (code) {
    this.asciiCode = code
    const getCharacterFunc = language === 'en' ? this.getEnglishCharacter : this.getRussianCharacter
    switch (code) {
      case 8:
        this.button.mainText = 'Backspace'
        break
      case 9:
        this.button.mainText = 'Tab'
        break
      case 13:
        this.button.mainText = 'Enter'
        break
      case 16:
        this.button.mainText = 'Shift'
        break
      case 17:
        this.button.mainText = 'Ctrl'
        break
      case 18:
        this.button.mainText = 'Alt'
        break
      case 20:
        this.button.mainText = 'CapsLock'
        break
      case 32:
        this.button.mainText = 'Space'
        break
      case 37:
        this.button.mainText = '&#8592'
        break
      case 38:
        this.button.mainText = '&#8593'
        break
      case 39:
        this.button.mainText = '&#8594'
        break
      case 40:
        this.button.mainText = '&#8595'
        break
      case 45:
        this.button.mainText = '-'
        this.button.addText = '_'
        break
      case 46:
        this.button.mainText = 'Del'
        break
      case 48:
        this.button.mainText = '0'
        this.button.addText = ')'
        break
      case 49:
        this.button.mainText = '1'
        this.button.addText = '!'
        break
      case 53:
        this.button.mainText = '5'
        this.button.addText = '%'
        break
      case 56:
        this.button.mainText = '8'
        this.button.addText = '*'
        break
      case 57:
        this.button.mainText = '9'
        this.button.addText = '('
        break
      case 61:
        this.button.mainText = '='
        this.button.addText = '+'
        break
      case 91:
        this.button.mainText = 'Win'
        break
      case 92:
        this.button.mainText = '\\'
        this.button.addText = '/'
        break
      default:
        this.button = getCharacterFunc(code)
        break
    }
  }

  button = { mainText: '', addText: '' }
  asciiCode = 0
  getEnglishCharacter = function getEng (code) {
    switch (code) {
      case 50:
        return { mainText: '2', addText: '@' }
      case 51:
        return { mainText: '3', addText: '#' }
      case 52:
        return { mainText: '4', addText: '$' }
      case 54:
        return { mainText: '6', addText: '^' }
      case 55:
        return { mainText: '7', addText: '&' }
      case 108:
        return { mainText: ',', addText: '' }
      case 160:
        return { mainText: '[', addText: '' }
      case 188:
        return { mainText: ',', addText: '' }
      case 190:
        return { mainText: '.', addText: '' }
      case 191:
        return { mainText: '/', addText: '' }
      case 192:
        return { mainText: '`', addText: '~' }
      case 221:
        return { mainText: ']', addText: '' }
      case 222:
        return { mainText: '\'', addText: '' }
      default:
        return { mainText: String.fromCharCode(code), addText: '' }
    }
  }

  getRussianCharacter = function getEng (code) {
    switch (code) {
      case 39:
        return { mainText: 'Э', addText: '' }
      case 59:
        return { mainText: 'Ж', addText: '' }
      case 65:
        return { mainText: 'Ф', addText: '' }
      case 66:
        return { mainText: 'И', addText: '' }
      case 67:
        return { mainText: 'С', addText: '' }
      case 68:
        return { mainText: 'В', addText: '' }
      case 69:
        return { mainText: 'У', addText: '' }
      case 70:
        return { mainText: 'А', addText: '' }
      case 71:
        return { mainText: 'П', addText: '' }
      case 72:
        return { mainText: 'Р', addText: '' }
      case 73:
        return { mainText: 'Ш', addText: '' }
      case 74:
        return { mainText: 'О', addText: '' }
      case 75:
        return { mainText: 'Л', addText: '' }
      case 76:
        return { mainText: 'Д', addText: '' }
      case 77:
        return { mainText: 'Ь', addText: '' }
      case 78:
        return { mainText: 'Т', addText: '' }
      case 79:
        return { mainText: 'Щ', addText: '' }
      case 80:
        return { mainText: 'З', addText: '' }
      case 81:
        return { mainText: 'Й', addText: '' }
      case 82:
        return { mainText: 'К', addText: '' }
      case 83:
        return { mainText: 'Ы', addText: '' }
      case 84:
        return { mainText: 'Е', addText: '' }
      case 85:
        return { mainText: 'Г', addText: '' }
      case 86:
        return { mainText: 'М', addText: '' }
      case 87:
        return { mainText: 'Ц', addText: '' }
      case 88:
        return { mainText: 'Ч', addText: '' }
      case 89:
        return { mainText: 'Н', addText: '' }
      case 90:
        return { mainText: 'Я', addText: '' }
      case 108:
        return { mainText: 'Б', addText: '' }
      case 160:
        return { mainText: 'Х', addText: '' }
      case 190:
        return { mainText: 'Ю', addText: '' }
      case 192:
        return { mainText: 'Ё', addText: '' }
      case 221:
        return { mainText: 'Ъ', addText: '' }
      default:
        return { mainText: String.fromCharCode(code), addText: '' }
    }
  }
}

class KeyBoard {
  constructor () {
    let bodyCode = '<textarea></textarea><div id="keyboard">'

    for (let i = 0; i < ASCIIarray.length; i++) {
      const button = new Button(ASCIIarray[i])
      bodyCode += `<div class="button" id = "${button.asciiCode}"><span id="textAdd">${button.button.addText}</span><span id="text">${button.button.mainText}</span></div>`
    }

    bodyCode += '</div>'
    document.body.innerHTML = bodyCode
  }

  keysPressed = []
  keyDown = function (e) {
    if (e.repeat === true) {
      return
    }
    if (!ASCIIarray.includes(e.keyCode)) {
      return
    }
    const code = e.keyCode
    console.log(e.keyCode)
    document.getElementById(`${code}`).classList.add('button-pressed')
    keyBoard.keysPressed.push(code)
  }

  keyUp = function (e) {
    if (e.repeat === true) {
      return
    }
    if (!ASCIIarray.includes(e.keyCode)) {
      return
    }
    const code = e.keyCode
    document.getElementById(`${code}`).classList.remove('button-pressed')
    keyBoard.checkCombination()
    keyBoard.keysPressed = keyBoard.keysPressed.filter(element => element !== code)
  }

  checkCombination = function () {
    const combination = keyBoard.keysPressed.join('-')
    switch (combination) {
      case '16-18':
        language === 'en' ? language = 'ru' : language = 'en'
        localStorage.setItem('language', language)
        keyBoard.updateLanguage()
        break
    }
  }

  updateLanguage = function () {
    keyBoard = new KeyBoard()
  }
}
localStorage.setItem('language', language)
let keyBoard = new KeyBoard()
document.addEventListener('keydown', keyBoard.keyDown)
document.addEventListener('keyup', keyBoard.keyUp)
