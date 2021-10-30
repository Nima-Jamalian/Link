var board;

var gw, startx, starty, curx, cury;

var selected, won;

var gameFont;

var gameLevelData;
// color for point
function numToColor(num) {
  if (num == 1) return color(0, 0, 255);
  if (num == 2) return color(255, 0, 0);
  if (num == 3) return color(255, 100, 0);
  if (num == 4) return color(0, 255, 0);
  if (num == 5) return color(0, 255, 255);
  if (num == 6) return color(255, 0, 255);
  if (num == 7) return color(255, 255, 0);
  if (num == 8) return color(50, 0, 100);
  return color(255);
}
//color with opacity
function numToColorPipe(num) {
  if (num == 1) return color(0, 0, 255, 50);
  if (num == 2) return color(255, 0, 0, 50);
  if (num == 3) return color(255, 100, 0, 50);
  if (num == 4) return color(0, 255, 0, 50);
  if (num == 5) return color(0, 255, 255, 50);
  if (num == 6) return color(255, 0, 255, 50);
  if (num == 7) return color(255, 255, 0, 50);
  if (num == 8) return color(50, 0, 100, 50);
  return color(255);
}

function setup() {
  initializeFields();
  createCanvas(2, 2);
  ellipseMode(CORNER);
}

function drawboard() {
  for (var j = 0; j < board.length; j++) {
    // loop through each row
    for (var i = 0; i < board[j].length; i++) {
      // loop through each column
      var x = i * gw,
        y = j * gw;
      // background color
      fill(0);
      // line stroke
      stroke(100);
      rect(x, y, gw, gw);
      // fill the board
      fill(numToColor(board[j][i]));

      // draw the points
      if (board[j][i] > 0) {
        ellipse(x, y, gw, gw);
        //Sade for ellipse
        fill(numToColorPipe(board[j][i]));
        rect(x + gw / 60, y + gw / 60, gw, gw);
      }
      if (board[j][i] < 0) {
        // pipes are less than 0
        var left = false,
          right = false,
          above = false,
          below = false;
        if (i > 0 && abs(board[j][i]) == abs(board[j][i - 1])) left = true;
        if (j > 0 && abs(board[j][i]) == abs(board[j - 1][i])) above = true;
        if (i < board.length - 1 && abs(board[j][i]) == abs(board[j][i + 1]))
          right = true;
        if (j < board.length - 1 && abs(board[j][i]) == abs(board[j + 1][i]))
          below = true;
        // draw pipes
        fill(numToColor(-board[j][i]));
        noStroke();
        rect(x + gw / 4, y + gw / 4, gw / 2, gw / 2);
        if (above && below) rect(x + gw / 4, y, gw / 2, gw);
        if (left && right) rect(x, y + gw / 4, gw, gw / 2);
        if (above && left) {
          rect(x, y + gw / 4, gw / 2, gw / 2);
          rect(x + gw / 4, y, gw / 2, gw / 2);
        }
        if (above && right) {
          rect(x + gw / 2, y + gw / 4, gw / 2, gw / 2);
          rect(x + gw / 4, y, gw / 2, gw / 2);
        }
        if (below && left) {
          rect(x, y + gw / 4, gw / 2, gw / 2);
          rect(x + gw / 4, y + gw / 2, gw / 2, gw / 2);
        }
        if (below && right) {
          rect(x + gw / 2, y + gw / 4, gw / 2, gw / 2);
          rect(x + gw / 4, y + gw / 2, gw / 2, gw / 2);
        }
        //Shade for ellipse
        fill(numToColorPipe(-board[j][i]));
        rect(x + gw / 60, y + gw / 60, gw, gw);
      }
    }
  }
}

function checkwin() {
  won = true;
  for (var j = 0; j < board.length; j++)
    for (var i = 0; i < board[j].length; i++) {
      var foundpipe = false;
      if (board[j][i] > 0) {
        for (var m = 0; m < board.length; m++)
          for (var k = 0; k < board[m].length; k++)
            if (board[m][k] == -board[j][i]) foundpipe = true;
        if (foundpipe == false) won = false;
      }
    }
}

var boardLoaded;
function draw() {
  //Making windows resizable
  windowResized();
  /*
  To Do:
  Load levels from file instead of hard coding
  */
  if (loadGame) {
    if (boardLoaded) {
      switch (gameLevelData) {
        case 1:
          board = [
            [1, 0, 2, 0, 3],
            [0, 0, 4, 0, 5],
            [0, 0, 0, 0, 0],
            [0, 2, 0, 3, 0],
            [0, 1, 4, 5, 0],
          ];
          break;
        case 2:
          board = [
            [7, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [2, 1, 4, 0, 7],
            [4, 0, 0, 0, 2],
          ];
          break;
        case 3:
          board = [
            [0, 1, 2, 3, 0],
            [0, 0, 0, 4, 0],
            [0, 0, 4, 0, 0],
            [1, 0, 0, 5, 0],
            [2, 0, 5, 3, 0],
          ];
          break;
        case 4:
          board = [
            [0, 0, 0, 0, 0],
            [1, 4, 0, 4, 0],
            [0, 0, 0, 3, 0],
            [3, 0, 0, 2, 0],
            [2, 0, 1, 0, 0],
          ];
          break;
        case 5:
          board = [
            [0, 0, 0, 0, 0],
            [1, 2, 0, 2, 1],
            [5, 0, 0, 0, 0],
            [0, 3, 0, 4, 0],
            [5, 4, 0, 3, 0],
          ];
          break;
        case 6:
          board = [
            [4, 0, 6, 0, 0, 0],
            [2, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 4, 6],
            [0, 0, 0, 2, 1, 7],
            [0, 7, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
          ];
          break;
        case 7:
          board = [
            [0, 0, 0, 1, 2, 3],
            [0, 0, 0, 4, 0, 0],
            [1, 0, 2, 0, 0, 0],
            [5, 0, 0, 4, 5, 0],
            [0, 0, 0, 0, 0, 0],
            [3, 0, 0, 0, 0, 0],
          ];
          break;
        case 8:
          board = [
            [1, 0, 0, 0, 0, 0],
            [0, 6, 0, 0, 5, 6],
            [0, 5, 0, 2, 0, 0],
            [1, 0, 0, 3, 4, 0],
            [2, 3, 4, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
          ];
          break;
        case 9:
          board = [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 2],
            [2, 3, 0, 3, 1, 5],
            [0, 0, 0, 0, 0, 0],
            [0, 7, 0, 7, 4, 0],
            [0, 0, 0, 0, 5, 4],
          ];
          break;
        case 10:
          board = [
            [1, 2, 3, 0, 0, 0, 5],
            [0, 0, 4, 0, 4, 3, 0],
            [0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 6, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 1, 6],
          ];
          break;
        case 11:
          board = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 4, 5, 0, 0],
            [0, 0, 5, 0, 0, 0, 0],
            [0, 0, 0, 3, 4, 3, 0],
            [0, 1, 2, 0, 2, 1, 0],
          ];
          break;
        case 12:
          board = [
            [0, 0, 0, 0, 0, 0, 0],
            [1, 2, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 6, 0, 0],
            [0, 4, 5, 6, 0, 0, 1],
            [0, 0, 0, 0, 0, 7, 3],
            [0, 2, 4, 5, 7, 0, 0],
            [3, 0, 0, 0, 0, 0, 0],
          ];
          break;
        case 13:
          board = [
            [ 0, 0, 0, 1, 0, 0, 0, 2 ],
            [ 0, 8, 0, 0, 2, 4, 5, 0 ],
            [ 0, 0, 6, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 1, 4, 0 ],
            [ 0, 0, 7, 0, 0, 8, 6, 0 ],
            [ 5, 0, 0, 0, 0, 7, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0 ]
          ];
          break;
        case 14:
          board = [
            [1, 0, 0, 0, 0, 0, 0, 3],
            [0, 0, 0, 0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 4, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 0],
          ];
          break;
        case 15:
          board = [
            [0, 1, 0, 0, 0, 0, 0, 2],
            [0, 3, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 5, 0, 6, 0],
            [0, 0, 0, 6, 0, 0, 2, 0],
            [0, 0, 0, 1, 7, 0, 0, 0],
            [0, 3, 4, 0, 0, 0, 7, 0],
            [0, 0, 0, 0, 5, 0, 0, 0],
            [8, 0, 0, 0, 0, 0, 0, 8],
          ];
          break;
      }
      boardLoaded = false;
    }

    background(0);
    drawboard();

    if (!won) {
      if (mouseIsPressed && !selected) {
        // if you click and you haven't selected yet
        startx = int(mouseX / gw);
        starty = int(mouseY / gw);
        // your position
        curx = startx;
        // your position
        cury = starty;
        // select
        if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {
          //Make sure user has clicked inside the canvas
          if (board[starty][startx] > 0) {
            selected = true;
          }
        }
      }
      if (mouseIsPressed == false && selected == true) {
        selected = false;
        var endx = -1,
          endy = -1;
        for (var j = 0; j < board.length; j++) {
          for (var i = 0; i < board[j].length; i++) {
            if (
              !(i == startx && j == starty) &&
              board[j][i] == board[starty][startx]
            ) {
              // if it's not same color
              endx = i;
              endy = j;
            }
          }
        }
        if (
          (curx == endx && cury == endy + 1) ||
          (curx == endx && cury == endy - 1) ||
          (curx == endx + 1 && cury == endy) ||
          (curx == endx - 1 && cury == endy)
        )
          checkwin();
        else {
          for (var j = 0; j < board.length; j++) {
            // if not finish the pipes it will disapear
            for (var i = 0; i < board[j].length; i++)
              if (board[j][i] == -board[starty][startx]) board[j][i] = 0;
          }
        }
      }
      if (mouseIsPressed == true && selected == true) {
        // mouse position
        var x = int(mouseX / gw),
          y = int(mouseY / gw);
        if (
          x >= 0 &&
          y >= 0 &&
          y < board.length &&
          x < board[0].length &&
          board[y][x] == 0
        ) {
          // make sure it's connected to last position
          if (
            (x == curx + 1 && y == cury) ||
            (x == curx - 1 && y == cury) ||
            (x == curx && y == cury + 1) ||
            (x == curx && y == cury - 1)
          ) {
            board[y][x] = -board[starty][startx];
            curx = x;
            cury = y;
          }
        }
      }
    } else {
      fill(0, 255, 0, 50);
      rect(0, 0, board[0].length * gw, board.length * gw);
      fill(255);
      textAlign(CENTER);
      textSize(40);
      textFont(gameFont);
      text("YOU WON!", 0, height / 2 - 50, width, height);
      DisplayNextLevelButton();
    }
  } else {
    //when we are not loading the board
    background(255);
    resizeCanvas(2, 2);
  }
}

function windowResized() {
  //Making windows resizable
  console.log(window.outerWidth);
  if (window.outerWidth > 859) {
    gw = 100;
  }
  if (window.outerWidth < 859 && window.outerWidth > 559) {
    gw = 80;
  }
  if (window.outerWidth < 691 && window.outerWidth > 609) {
    gw = 70;
  }
  if (window.outerWidth <= 609 && window.outerWidth > 515) {
    gw = 60;
  }
  if (window.outerWidth <= 515) {
    gw = 50;
  }
  if (loadGame) {
    resizeCanvas(board[0].length * gw, board.length * gw);
  }
}

function initializeFields() {
  gameFont = loadFont("ScreenMatrix.ttf");
  board = [
    [0, 1, 0, 0, 0, 0, 0, 2],
    [0, 3, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 5, 0, 6, 0],
    [0, 0, 0, 6, 0, 0, 2, 0],
    [0, 0, 0, 1, 7, 0, 0, 0],
    [0, 3, 4, 0, 0, 0, 7, 0],
    [0, 0, 0, 0, 5, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 8],
  ];
  gw = 100;
  startx = 0;
  starty = 0;
  curx = 0;
  cury = 0;
  selected = false;
  won = false;
}
