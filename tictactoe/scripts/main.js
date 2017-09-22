var player1;
var player2;
var playersTurn;
var movesArr = [];
var i;
var game;
var flag;
var winningMove;
var blockingMove;
var dTimeout;
var pTimeout;
var wTimeout;
var wATimeout;

var board = {
  0: 0, 1: 0, 2: 0,
  3: 0, 4: 0, 5: 0,
  6: 0, 7: 0, 8: 0
}

var score = [ { "place": 0, "score": 0, "moves": 0}, { "place": 1, "score": 0, "moves": 0}, { "place": 2, "score": 0, "moves": 0},
              { "place": 3, "score": 0, "moves": 0}, { "place": 4, "score": 0, "moves": 0}, { "place": 5, "score": 0, "moves": 0},
              { "place": 6, "score": 0, "moves": 0}, { "place": 7, "score": 0, "moves": 0}, { "place": 8, "score": 0, "moves": 0} ];

function checkForWin(board) {
  if (board[0] + board[1] + board[2] === 3) {
    return true;
  } else if (board[3] + board[4] + board[5] === 3) {
    return true;
  } else if (board[6] + board[7] + board[8] === 3) {
    return true;
  } else if (board[0] + board[3] + board[6] === 3) {
    return true;
  } else if (board[1] + board[4] + board[7] === 3) {
    return true;
  } else if (board[2] + board[5] + board[8] === 3) {
    return true;
  } else if (board[0] + board[4] + board[8] === 3) {
    return true;
  } else if (board[2] + board[4] + board[6] === 3) {
    return true;
  } else {
    return false;
  }
}

function checkForLoss(board) {
  if (board[0] + board[1] + board[2] === 6) {
    return true;
  } else if (board[3] + board[4] + board[5] === 6) {
    return true;
  } else if (board[6] + board[7] + board[8] === 6) {
    return true;
  } else if (board[0] + board[3] + board[6] === 6) {
    return true;
  } else if (board[1] + board[4] + board[7] === 6) {
    return true;
  } else if (board[2] + board[5] + board[8] === 6) {
    return true;
  } else if (board[0] + board[4] + board[8] === 6) {
    return true;
  } else if (board[2] + board[4] + board[6] === 6) {
    return true;
  } else {
    return false;
  }
}

function checkForDraw(board) {
  var tally = 0;
  for (let key in board) {
    if (board[key] === 0) {
      tally++;
    }
  }

  return tally === 0;
}

function simulateMove(board, player) {

  if (checkForWin(board)) {
    return 1;
  } else if (checkForLoss(board)) {
    return -1;
  } else if (checkForDraw(board)) {
    return 0;
  }

  if (player === 1) {
    for (let key in board) {
      if (board[key] === 0) {
        board[key] = 2;
        simulateMove(board, 2);
      }
    }
  } else {
    for (let key in board) {
      if (board[key] === 0) {
        board[key] = 1;
        simulateMove(board, 1);
      }
    }
  }


}

function changePlayer(currentPlayer) {
  if (currentPlayer === 1) {
    return 2;
  } else {
    return 1;
  }
}

// 0 | 1 | 2
// ---------
// 3 | 4 | 5
// ---------
// 6 | 7 | 8

start();

function start() {
  reappear();
  newBoard();
  document.getElementById('choose').style.display = 'block';
  document.getElementById('xOrO').style.display = 'none';
  document.getElementById('humanOrComputer').style.display = 'block';
}

document.getElementById('choosePlayers').addEventListener('click', function() {
  game = 'twoPlayer';
  document.getElementById('humanOrComputer').style.display = 'none';
  document.getElementById('xOrO').style.display = 'block';
})

document.getElementById('chooseComputer').addEventListener('click', function() {
  game = 'computer';
  document.getElementById('humanOrComputer').style.display = 'none';
  document.getElementById('xOrO').style.display = 'block';
})

document.getElementById('chooseX').addEventListener('click', function(){
  player1 = 'X';
  player2 = 'O';
  afterChoose();
})

document.getElementById('chooseO').addEventListener('click', function(){
  player1 = 'O';
  player2 = 'X';
  afterChoose();
})

function afterChoose() {
  disappear();
  showBoard();
  startGame();
}

function showBoard() {
  document.getElementById('container').style.display = 'block';
  document.getElementById('turnDiv').style.display = 'block';
  document.getElementById('turnDiv').style.visibility = 'visible';
  document.getElementById('resetButton').style.display = 'inline-block';
  document.getElementById('newGameButton').style.display = 'inline-block';
}

function hideBoard() {
  document.getElementById('container').style.display = 'none';
  document.getElementById('turnDiv').style.display = 'none';
  document.getElementById('resetButton').style.display = 'none';
  document.getElementById('newGameButton').style.display = 'none';
}

function disappear() {
  document.getElementById('optionScr').style.display = 'none';
  document.getElementById('greyScr').style.display = 'none';
  document.getElementById('choose').style.display = 'none';
}

function reappear() {
  document.getElementById('optionScr').style.display = 'block';
  document.getElementById('greyScr').style.display = 'block';
  document.getElementById('choose').style.display = 'block';
}

function startGame() {
  playersTurn = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  document.getElementById('resetAlert').innerHTML = '';
  document.getElementById('turnSpan').innerHTML = playersTurn;
  if (game === 'computer' && playersTurn === 2) {
    pTimeout = setTimeout(possibleMoves, 1000, board);
  } else if (game === 'computer' && playersTurn === 1){
    flag = 0;
  } else if (game === 'twoPlayer') {
    flag = 0;
  }
}

$('.square').click(function(){
  pick($(this).attr("value"));
});

function pick(position) {
  if ($('#' + position).text() === '' && flag === 0) {
    $('#' + position).text(player(playersTurn));
    if (playersTurn === 1) {
      $('#' + position).css('color','rgba(255, 51, 51, 1.0)');
    } else if (playersTurn === 2) {
      $('#' + position).css('color','rgba(0, 153, 255, 1.0)');
    }
    board[position] = playersTurn;
    flag = 1;
    checkWin(playersTurn);
  }
}

function player(num){
  if (num === 1){
    return player1;
  } else if (num === 2){
    return player2;
  }
}

function changeTurn(num){
  if (num === 1){
  playersTurn = 2;
} else if (num === 2){
  playersTurn = 1;
  }
  document.getElementById('turnSpan').innerHTML = playersTurn;
}

//This function checks for a win in both types of games.
function checkWin(num){
  if (board.topL === num && board.topC === num && board.topR === num) {
    wTimeout = setTimeout(win, 1000, "topL", "topC", "topR", num);
  } else if (board.midL === num && board.midC === num && board.midR === num){
    wTimeout = setTimeout(win, 1000, "midL", "midC", "midR", num);
  } else if (board.botL === num && board.botC === num && board.botR === num){
    wTimeout = setTimeout(win, 1000, "botL", "botC", "botR", num);
  } else if (board.topL === num && board.midL === num && board.botL === num){
    wTimeout = setTimeout(win, 1000, "topL", "midL", "botL", num);
  } else if (board.topC === num && board.midC === num && board.botC === num){
    wTimeout = setTimeout(win, 1000, "topC", "midC", "botC", num);
  } else if (board.topR === num && board.midR === num && board.botR === num){
    wTimeout = setTimeout(win, 1000, "topR", "midR", "botR", num);
  } else if (board.topL === num && board.midC === num && board.botR === num){
    wTimeout = setTimeout(win, 1000, "topL", "midC", "botR", num);
  } else if (board.topR === num && board.midC === num && board.botL === num){
    wTimeout = setTimeout(win, 1000, "topR", "midC", "botL", num);
  } else if (checkDraw(board)) {
    draw();
  } else {
    changeTurn(playersTurn);
    nextMove();
  }
}

//This function checks for a draw in both types of games.
function checkDraw(board){
  for (var prop in board){
    if (board[prop] === 0){
      return false;
    }
  }
  return true;
}

//This function either plays the computers move after a set time or resets the
//flag variable so that a human player can play their turn.
function nextMove() {
  if (game === 'computer' && playersTurn === 2) {
    pTimeout = setTimeout(possibleMoves, 1000, board);
  } else if (game === 'computer' && playersTurn === 1) {
    flag = 0;
  } else {
    flag = 0;
  }
}

//This function will take an input of a board and then it will push all the
//possible moves/empty spaces to an array.
function possibleMoves(board) {
  movesArr = [];
  for (var propName in board){
    if (board[propName] === 0){
      movesArr.push(propName);
    }
  }
  winMove(movesArr);
}

//This function plays the computer's move in the game. Note: The computer is
//always player2.
function playMove(position) {
  if ($('#' + position).text() === ''){
    $('#' + position).text(player(playersTurn));
    $('#' + position).css('color', 'rgba(0, 153, 255, 1.0)');
    board[position] = 2;
    checkWin(playersTurn);
  }
}

//This function takes as an input an array of board positions that are filled
//with moves and then outputs a board containing those positions.
function constructBoard(board, position, value){
  var simulBoard = {
    topL: 0, topC: 0, topR: 0,
    midL: 0, midC: 0, midR: 0,
    botL: 0, botC: 0, botR: 0
  };
  for (var prop in simulBoard) {
    simulBoard[prop] = board[prop];
  }
  simulBoard[position] = value;
  return simulBoard;
}

//This function picks from an array of possible moves on order to see if there
//are any winning moves for the computer to take.
function winMove(possibleMoves){
  for (i = 0; i < possibleMoves.length; i++){
    winningMove = possibleMoves[i];
    var newBoard = constructBoard(board, winningMove, 2);
    if (simCheckWin(newBoard, 2)) {
      computerMove = winningMove;
      playMove(computerMove);
      return;
    }
  }
  blockMove(movesArr);
}

//This function picks from an array of possible moves in order to see if there
//are any blocking moves for the computer to take.
function blockMove(possibleMoves) {
  for (i = 0; i < possibleMoves.length; i++){
    blockingMove = possibleMoves[i];
    var newBoard = constructBoard(board, blockingMove, 1);
    if (simCheckWin(newBoard, 1)) {
      computerMove = blockingMove;
      playMove(computerMove);
      return;
    }
  }
  playMove(movesArr[randomMove(movesArr)]);
}

//This function will play a random move for the computer if there are no winning
//or blocking moves that the computer can take.
function randomMove(possibleMoves) {
  return Math.floor(Math.random() * ((possibleMoves.length - 1) - 0 + 1)) + 0;
}

//This function checks for a win in the computer vs human game.
function simCheckWin(board, num) {
  if (board.topL === num && board.topC === num && board.topR === num) {
    return true;
  } else if (board.midL === num && board.midC === num && board.midR === num){
    return true;
  } else if (board.botL === num && board.botC === num && board.botR === num){
    return true;
  } else if (board.topL === num && board.midL === num && board.botL === num){
    return true;
  } else if (board.topC === num && board.midC === num && board.botC === num){
    return true;
  } else if (board.topR === num && board.midR === num && board.botR === num){
    return true;
  } else if (board.topL === num && board.midC === num && board.botR === num){
    return true;
  } else if (board.topR === num && board.midC === num && board.botL === num){
    return true;
  } else {
    return false;
  }
}

//This function is run when someone wins.
function win(first, second, third, num){
  document.getElementById(first).style.backgroundColor = '#d9d9d9';
  document.getElementById(second).style.backgroundColor = '#d9d9d9';
  document.getElementById(third).style.backgroundColor = '#d9d9d9';
  document.getElementById('turnDiv').style.visibility = 'hidden';
  document.getElementById('reset').style.display = 'block';
  wATimeout = setTimeout(winAlert, 1000, num);
}

//This function is run when there is a draw.
function draw() {
  document.getElementById('turnDiv').style.visibility = 'hidden';
  document.getElementById('reset').style.display = 'block';
  dTimeout = setTimeout(drawAlert, 1000);
}

function winAlert(num){
  document.getElementById('resetAlert').innerHTML = 'Player ' + num +
   ' wins!';
  document.getElementById('resetAlert').style.display = 'block';
}

function drawAlert() {
  document.getElementById('resetAlert').innerHTML = 'Draw!';
  document.getElementById('resetAlert').style.display = 'block';
}

function clearTimers() {
  clearTimeout(dTimeout);
  clearTimeout(pTimeout);
  clearTimeout(wTimeout);
  clearTimeout(wATimeout);
}

//This function resets the game and settings.
document.getElementById('resetButton').addEventListener('click', function() {
  clearTimers();
  hideBoard();
  start();
})

//This function resets the board for a new game.
document.getElementById('newGameButton').addEventListener('click', function() {
  newGame();
})

function newGame() {
  document.getElementById('reset').style.display = 'none';
  document.getElementById('resetAlert').style.display = 'none';
  clearTimers();
  newBoard();
  showBoard();
  startGame();
}

function newBoard() {
  for (var propName in board) {
    board[propName] = 0;
  }
  $('.square').text('');
  $('.square').css('background-color','#FFFFFF');
  $('.square').css('color', 'rgba(255, 255, 255, 0.0)');
}
