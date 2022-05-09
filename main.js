import * as keyboard from './keyboard.js';

const language = localStorage.getItem('language') === null ? 'en' : localStorage.getItem('language');
let keyBoard = new keyboard.Keyboard(language);
const input = document.getElementById('input');

const pressed = [];
function keyDown(e) {
  if (document.getElementById(`${e.keyCode}`).innerText.length === 1) {
    e.preventDefault();
  }
  if (e.keyCode === 9 || e.keyCode === 18 || e.keyCode === 91) {
    e.preventDefault();
    keyBoard.keyClick(e.key, input.selectionStart);
  }
  input.focus();
  pressed.push(e.keyCode);
  keyBoard.keyDown(e);
}
function keyUp(e) {
  const result = keyBoard.keyUp(e);
  if (result !== undefined) {
    keyBoard = new keyboard.Keyboard(result);
  }
  const inputKeyUp = document.getElementById('input');
  inputKeyUp.focus();
}

function keyClick(e) {
  if (Number.isNaN(Number.parseInt(e.target.id, 10))) {
    return;
  }
  const code = e.target.id;
  document.getElementById(`${code}`).classList.add('button-pressed');
  setTimeout(() => { document.getElementById(`${code}`).classList.remove('button-pressed'); }, 200);
  keyBoard.keyClick(e.target.innerText, input.selectionStart);
  input.focus();
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.getElementById('keyboard').addEventListener('click', keyClick);
