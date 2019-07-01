import './view.css';

export default class View {
  constructor(win) {
    this.win = win;
  }

  // function for creating checked background (64x64 squares, 1 square = 10px) under the main canvas
  async init() {
    const that = this.win;
    const squares = that.document.getElementById('squares-background');
    this.bladskijJS = '';
    for (let i = 0; i < 4160; i += 1) {
      const square = that.document.createElement('div');
      square.classList.add('square');
      squares.appendChild(square);
      if (i % 65 === 0) {
        i += 1;
      }
      if (i % 2 === 0) {
        squares.lastChild.classList.add('square-dark');
      } else {
        squares.lastChild.classList.add('square-light');
      }
    }
  }

  // function for adding new frame
  async addFrame(count, domFrames) {
    const that = this.win;
    const frameItem = document.createElement('div');
    const frameWrapper = that.document.querySelector('.frame-wrapper');
    const framesDiv = that.document.querySelector('.frames');
    frameItem.classList = 'frame-item';
    frameItem.id = `frame-item${count}`;
    frameItem.draggable = true;
    const newFrame = document.createElement('canvas');
    newFrame.width = frameWrapper.clientWidth;
    newFrame.height = frameWrapper.clientWidth;
    framesDiv.appendChild(frameItem);
    newFrame.id = `canvas${count}`;
    newFrame.className = 'canvas-frame';

    frameItem.appendChild(newFrame);

    const instruments = document.createElement('div');
    const iconDelete = (count > 0) ? ('<div class="delete-frame"><img class="delete-img" src="../views/images/delete.png"></div>') : '';
    instruments.innerHTML = `<div class="frame-number">${count}</div>${iconDelete}<div class="drag-frame"><img class="drag-img" src="../views/images/move-arrows.png"></div><div class="copy-frame"><img class="copy-img" src="../views/images/copy.png"></div>`;
    frameItem.appendChild(instruments);
    instruments.classList = 'instruments';
    instruments.id = `instruments${count}`;

    domFrames.push(newFrame);
  }
}
