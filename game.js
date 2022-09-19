const gameTiles = document.querySelectorAll('.tile');
const gameBoard = document.querySelector('#game-board');

const gameState = [
  [gameTiles[0], gameTiles[1], gameTiles[2], gameTiles[3], gameTiles[4]],
  [gameTiles[5], gameTiles[6], gameTiles[7], gameTiles[8], gameTiles[9]],
  [gameTiles[10], gameTiles[11], gameTiles[12], gameTiles[13], gameTiles[14]],
  [gameTiles[15], gameTiles[16], gameTiles[17], gameTiles[18], gameTiles[19]],
  [gameTiles[20], gameTiles[21], gameTiles[22], gameTiles[23], gameTiles[24]],
  
];

function render(gameBoard, gameState) {
  gameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      column.style.top = `${rowIndex * 100}px`;
      column.style.left = `${columnIndex * 100}px`;

      column.style['background-position-y'] = `-${rowIndex * 100}px`;
      column.style['background-position-x'] = `-${columnIndex * 100}px`;

      gameBoard.appendChild(column);
    });
  });
}

function moveElement(element1, element2) {
  
  const tempTop = element1.style.top;
  const tempLeft = element1.style.left;

  element1.style.top = element2.style.top;
  element1.style.left = element2.style.left;

  element2.style.top = tempTop;
  element2.style.left = tempLeft;
}

render(gameBoard, gameState);

gameBoard.addEventListener('click', (event) => {
  const target = event.target;
  
  let x, y;

  gameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if(column === target) {
        x = rowIndex;
        y = columnIndex;
      }
    });
  });

  let emptyX, emptyY;

  gameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if(column.innerText === '') {
        emptyX = rowIndex;
        emptyY = columnIndex;
      }
    });
  });

  //console.log(x, y);
  //console.log(emptyX, emptyY);

  if(
    (y === emptyY && (x + 1 === emptyX || x - 1 === emptyX)) ||
    (x === emptyX && (y + 1 === emptyY || y - 1 === emptyY))
  ) {
    moveElement(gameState[x][y], gameState[emptyX][emptyY]);

    const temp = gameState[x][y];
      gameState[x][y] = gameState[emptyX][emptyY];
      gameState[emptyX][emptyY] = temp;
      
} 
  //onsole.log(gameState);

});