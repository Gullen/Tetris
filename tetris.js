// x and y must be factors of blockSize (x % blockSize == 0) (y % blockSize == 0)
const blockSize = 24;
const x = 576;
const y = 816;

const boardX = 7;
const boardY = 7;

var gameBoard;
var activeBoard;

function setup(){
    let canvas = createCanvas(x,y);
    background(100,100,100);

    gameBoard = createBoard();
    activeBoard = createBoard();
    console.log(gameBoard);

    console.log("width: " + width / 24);
    console.log("height: " + height / 24);

    drawBoard();
}

function draw(){
    //drawBoard(); <- only when changes
    drawActiveBoard();
}

function convertPixels(pix){
    return pix * 24;
}

function drawBlock(r, g, b, x, y){
    stroke(0);
    fill(r, g, b);
    rect(convertPixels(x + boardX), convertPixels(y + boardY), blockSize);
}