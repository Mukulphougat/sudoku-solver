export function createBoard(Board_size) {
    const board = []
    for (let i = 0; i < Board_size; i++) {
        const row = []
        for (let j = 0; j < Board_size; j++) {
            const element = document.createElement("INPUT")
            element.setAttribute('type', 'text')
            const tile = {
                element,
                i,
                j
            }
            row.push(tile)
        }
        board.push(row)
    }
    return board;
}


function isValid(board, row, col, digit) {
    let boxRowStart = Math.floor(row / 3) * 3
    let boxColStart = Math.floor(col / 3) * 3

    for (let i = 0; i < 9; i++) {
        if (board[row][i].element.value === digit || board[i][col].element.value === digit) return false;
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[boxRowStart + i][boxColStart + j].element.value === digit) return false;
        }
    }

    return true;
}

export function helper(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            if (board[row][col].element.value === "") {
                for (let digit = 1; digit <= 9; digit++) {
                    if (isValid(board, row, col, digit.toString())) {
                        board[row][col].element.value = digit.toString()
                        let solved = helper(board)
                        if (solved !== false) return solved

                        board[row][col].element.value = ""
                    }
                }

                return false
            }
        }
    }
}






