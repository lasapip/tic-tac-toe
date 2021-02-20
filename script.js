// class cell{
//   constructor(condition, position){
//     this.condition = condition;
//   }
//
// }

var a1 = document.getElementById(a1);
var a2 = document.getElementById(a2);
var a3 = document.getElementById(a3);
var b1 = document.getElementById(b1);
var b2 = document.getElementById(b2);
var b3 = document.getElementById(b3);
var c1 = document.getElementById(c1);
var c2 = document.getElementById(c2);
var c3 = document.getElementById(c3);

// a1 = new cell("empty", one);

var board = [
  [a1, a2, a3],
  [b1, b2, b3],
  [c1, c2, c3],
];

var turn = 0;
function incrementTurn() {
  turn++;
}

function changeBackground(position) {
  if(turn % 2 == 0){
    position.style.backgroundImage = "url(images/x.png)"
  }
  else{
    position.style.backgroundImage = "url(images/o.png)"
  }
  incrementTurn();
}





// function randomPick(emptySpaces){
//     return Math.floor(Math.random() * (emptySpaces+1)); // random number between 0 and emptySpaces
// }
//
// function whoGoesFirst(){
//     return Math.floor(Math.random() * 2); // random number between 0 and 1
// }
