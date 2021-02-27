var turn = 0;
function incrementTurn() {
  turn++;
}

/*
0 = empty cell
1 = X
2 = O
*/

var board = [3,4,5,6,7,8,9,10,11];

var clicked = [false,false,false,false,false,false,false,false,false];



var winner;

function verticalWin(){
  // VERTICAL WINS
  var idx1 = 0;
  var idx2 = 3;
  var idx3 = 6;
  for (var i = 0; i < 3; i++){
    if (board[idx1] == board[idx2] && board[idx3] == board[idx2]){
      winner = board[idx1];
      return true;
    }
    else{
      idx1++;
      idx2++;
      idx3++;
    }
  }
  return false;
}
function horizontalWin(){
  // HORIZONTAL WINS
  var idx1 = 0;
  var idx2 = 1;
  var idx3 = 2;
  for (var i = 0; i < 3; i++){
    if (board[idx1] == board[idx2] && board[idx3] == board[idx2]){
      winner = board[idx1];
      return true;
    }
    else{
      idx1+=3;
      idx2+=3;
      idx3+=3;
    }
  }
  return false;
}
function diagonalWin(){
  // DIAGONAL WINS
  var idx1 = 0;
  var idx2 = 4;
  var idx3 = 8;
  for (var i = 0; i < 2; i++){
    if (board[idx1] == board[idx2] && board[idx3] == board[idx2]){
      winner = board[idx1];
      return true;
    }
    else{
      idx1+=2;
      idx3-=2;
    }
  }
  return false;
}

function tie(){
  var boardIsFull = true;
  for (var i = 0; i < board.length; i++) {
    if(board[i] == 1 || board[i] == 2){
      continue;
    }
    else{
      boardIsFull = false;
    }
  }
  if((!verticalWin() && !horizontalWin() && !diagonalWin()) && (boardIsFull == true)){
    return true;
  }
  else{
    return false;
  }
}
var stopClicks = false;
function hasWon(){
  var hasWinner = false;
  var winText = document.getElementById("winner-text");
  if(verticalWin() || horizontalWin() || diagonalWin()){
    stopClicks = true;
    if(winner == 1){
      winText.innerHTML = "X (Player One) Wins!";
      hasWinner = true;
    }
    else if(winner == 2){
      winText.innerHTML = "O (Player Two) Wins!";
      hasWinner = true;
    }
  }
  else if(tie()){
    stopClicks = true;
    winText.innerHTML = "It\'s a tie!";
    hasWinner = true;
  }

  if(hasWinner){
    var popup = document.getElementById("winner-popup");
    var playAgain = document.getElementById("play-again");
    popup.style.height = "300px";
    winText.style.visibility = "visible";
    playAgain.style.visibility = "visible";
  }

}

function a1bg(){
  if(clicked[0] == true || stopClicks == true){
    return null;
  }
  if(turn % 2 == 0){
    document.getElementById("a1").style.backgroundImage = "url(images/x.png)";
    board[0] = 1;
  }
  else{
    document.getElementById("a1").style.backgroundImage = "url(images/o.png)";
    board[0] = 2;
  }
  clicked[0] = true;
  hasWon();
  incrementTurn();
}

function a2bg(){
  if(clicked[1] == true || stopClicks == true){
    return null;
  }
  if(turn % 2 == 0){
    document.getElementById("a2").style.backgroundImage = "url(images/x.png)";
    board[1] = 1;
  }
  else{
    document.getElementById("a2").style.backgroundImage = "url(images/o.png)";
    board[1] = 2;
  }
  clicked[1] = true;
  hasWon();
  incrementTurn();
}
function a3bg(){
  if(clicked[2] == true || stopClicks == true){
    return null;
  }
  if(turn % 2 == 0){
    document.getElementById("a3").style.backgroundImage = "url(images/x.png)";
    board[2] = 1;
  }
  else{
    document.getElementById("a3").style.backgroundImage = "url(images/o.png)";
    board[2] = 2;
  }
  clicked[2] = true;
  hasWon();
  incrementTurn();
}
function b1bg(){
  if(clicked[3] == true || stopClicks == true){
    return null;
  }
  if(turn % 2 == 0){
    document.getElementById("b1").style.backgroundImage = "url(images/x.png)";
    board[3] = 1;
  }
  else{
    document.getElementById("b1").style.backgroundImage = "url(images/o.png)";
    board[3] = 2;
  }
  clicked[3] = true;
  hasWon();
  incrementTurn();
}
function b2bg(){
  if(clicked[4] == true || stopClicks == true){
    return null;
  }
  if(turn % 2 == 0){
    document.getElementById("b2").style.backgroundImage = "url(images/x.png)";
    board[4] = 1;
  }
  else{
    document.getElementById("b2").style.backgroundImage = "url(images/o.png)";
    board[4] = 2;
  }
  clicked[4] = true;
  hasWon();
  incrementTurn();
}
function b3bg(){
  if(clicked[5] == true || stopClicks == true){
    return null;
  }
  if(turn % 2 == 0){
    document.getElementById("b3").style.backgroundImage = "url(images/x.png)";
    board[5] = 1;
  }
  else{
    document.getElementById("b3").style.backgroundImage = "url(images/o.png)";
    board[5] = 2;
  }
  clicked[5] = true;
  hasWon();
  incrementTurn();
}
function c1bg(){
  if(clicked[6] == true || stopClicks == true){
    return null;
  }
  if(turn % 2 == 0){
    document.getElementById("c1").style.backgroundImage = "url(images/x.png)";
    board[6] = 1;
  }
  else{
    document.getElementById("c1").style.backgroundImage = "url(images/o.png)";
    board[6] = 2;
  }
  clicked[6] = true;
  hasWon();
  incrementTurn();
}
function c2bg(){
  if(clicked[7] == true || stopClicks == true){
    return null;
  }
  if(turn % 2 == 0){
    document.getElementById("c2").style.backgroundImage = "url(images/x.png)";
    board[7] = 1;
  }
  else{
    document.getElementById("c2").style.backgroundImage = "url(images/o.png)";
    board[7] = 2;
  }
  clicked[7] = true;
  hasWon();
  incrementTurn();
}
function c3bg(){
  if(clicked[8] == true || stopClicks == true){
    return null;
  }
  if(turn % 2 == 0){
    document.getElementById("c3").style.backgroundImage = "url(images/x.png)";
    board[8] = 1;
  }
  else{
    document.getElementById("c3").style.backgroundImage = "url(images/o.png)";
    board[8] = 2;
  }
  clicked[8] = true;
  hasWon();
  incrementTurn();
}
