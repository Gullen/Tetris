// Moving Tetromino

function moveTetrominoDown(board){
    // Check if tetromino can move
    for (let i = 0; i < 10; i++){
        if (typeof board[19][i] !== "undefined"){
            return board, false;
        } 
    }
    board.unshift(board.pop());
    return board, true;
}

// Spawning Tetromino

function spawnTetromino(board){
    console.log(board);
    let r = Math.floor(Math.random() * (7));    // Create rand int
    console.log(r);
    switch (r){
        case 0:
            return spawnI(board);
        case 1:
            return spawnS(board);
        case 2:
            return spawnZ(board);
        case 3:
            return spawnO(board);
        case 4:
            return spawnT(board);
        case 5:
            return spawnL(board);
        case 6:
            return spawnJ(board);
        }
}

function spawnI(board){
    board[1][3] = "I";
    board[1][4] = "I";
    board[1][5] = "I";
    board[1][6] = "I";
    return board;
}

function spawnS(board){
    board[1][3] = "S";
    board[1][4] = "S";
    board[0][4] = "S";
    board[0][5] = "S";
    return board;
}

function spawnZ(board){
    board[0][3] = "Z";
    board[0][4] = "Z";
    board[1][4] = "Z";
    board[1][5] = "Z";
    return board;
}

function spawnO(board){
    board[0][4] = "O";
    board[0][5] = "O";
    board[1][4] = "O";
    board[1][5] = "O";
    return board;
}

function spawnT(board){
    board[1][3] = "T";
    board[1][4] = "T";
    board[1][5] = "T";
    board[0][4] = "T";
    return board;
}

function spawnL(board){
    board[1][3] = "L";
    board[1][4] = "L";
    board[1][5] = "L";
    board[0][5] = "L";
    return board;
}

function spawnJ(board){
    board[0][3] = "I";
    board[1][3] = "I";
    board[1][4] = "I";
    board[1][5] = "I";
    return board;
}