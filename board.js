function createBoard() {
    board = new Array(20);

    for (var i = 0; i < board.length; i++){
        board[i] = new Array(10);
    }
    
    return board;
}

function drawBoard(){
    // Bottom Layer
    fill(0, 0, 0);
    rect(convertPixels(boardY), convertPixels(boardX), convertPixels(10), convertPixels(20));

    // Top Layer
    for (var y = 0; y < gameBoard.length; y++){
        for (var x = 0; x < gameBoard.length; x++){
            switch(gameBoard[y][x]){
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

function drawActiveBoard(){
    for (var y = 0; y < activeBoard.length; y++){
        for (var x = 0; x < activeBoard.length; x++){
            switch(activeBoard[y][x]){
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