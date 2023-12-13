import {createBoard, helper} from "./mineSweeper.js"


let board_size = 9;
const board = createBoard(board_size)
const boardElement = document.querySelector(".grid")
boardElement.style.setProperty('--size',board_size)

function makeGrid() {
    board.forEach(row => {
        row.forEach(tile => {
            boardElement.append(tile.element)
        })
    })
}
makeGrid()
document.querySelector('.solver').addEventListener('click',() => {
    const start=performance.now()
    helper(board)
    const end=performance.now()
    console.info(end-start)
});
document.querySelector('.reset').addEventListener('click',() => {
    for ( let i = 0 ; i < board.length ; i++ ) {
        for ( let j = 0 ; j < board[0].length ; j++ ) {
            board[i][j].element.value = "";
        }
    }
});










