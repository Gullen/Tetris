// x and y must be factors of blockSize (x % blockSize == 0) (y % blockSize == 0)
const blockSize = 24;
const x = 576;
const y = 816;
const boardX = 7;
const boardY = 7;

var moving = false;
var fps = 1;

var gameBoard;
var activeBoard;

function setup(){
    let canvas = createCanvas(x,y);
    background(100,100,100);

    song = createAudio('sounds/tetris.mp3');
    song.loop();

    gameBoard = createBoard();
    activeBoard = createBoard();
    //console.log(gameBoard, activeBoard);
}

function draw(){
    frameRate(fps);
    //Draw Blank Board
    fill(0, 0, 0);
    rect(convertPixels(boardY), convertPixels(boardX), convertPixels(10), convertPixels(20));

    //Spawn New Tetromino
    if (moving == false){
        activeBoard = spawnTetromino(activeBoard);
        moving = true;
        console.log("Tetromino Spawned");
    }

    drawBoard(activeBoard);

    activeBoard, moving = moveTetrominoDown(activeBoard);

}


// Helper Functions

function convertPixels(pix){
    return pix * 24;
}

function drawBlock(r, g, b, x, y){
    stroke(0);
    fill(r, g, b);
    rect(convertPixels(x + boardX), convertPixels(y + boardY), blockSize);
}