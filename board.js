function createBoard() {
    board = new Array(20);

    for (var i = 0; i < board.length; i++){
        board[i] = new Array(10);
    }
    
    return board;
}

function drawBoard(board){
    // Bottom Layer
    // Top Layer
    for (var y = 0; y < board.length; y++){
        for (var x = 0; x < board.length; x++){
            switch(board[y][x]){
                case "I":
                    drawBlock(0, 234, 255, x, y);
                    break;
                case "S":
                    drawBlock(0, 214, 75, x, y);
                    break;
                case "Z":
                    drawBlock(255, 0, 25, x, y);
                    break;
                case "O":
                    drawBlock(255, 208, 0, x, y);
                    break;
                case "T":
                    drawBlock(183, 0, 255, x, y);
                    break;
                case "L":
                    drawBlock(255, 111, 0, x, y);
                    break;
                case "J":
                    drawBlock(7, 0, 199, x, y);
                    break;
            }
        }
    }
}