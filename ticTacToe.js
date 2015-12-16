var player = 1

var buttons = document.querySelectorAll("button");
//I is goint to be less than for ()

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', playMove)
}
function playMove(event) {
  if(player % 2 === 0) {
    this.textContent = "O"
  } else {
    this.textContent = "X"
  }
  var X_wins = checkForWin('X')
  var O_wins = checkForWin('O')

  if (X_wins) {
    alert("X wins!")
  } else if(O_wins){
    alert("O wins!")
  }

  player++
}

//row 1 btn 1,2,3, Row 2 btn 4,5,6, row 3 btn 7,8,9,
//column1 btn 1,4,7, column2=2,5,8 column3=3,6,9
//diagonaltpleft to bottom right=1,5,9 other diagonal=3,5,7
function winsRow1(player) {
 return ((document.getElementById("btn1").textContent == player) &&
         (document.getElementById("btn2").textContent == player) &&
         (document.getElementById("btn3").textContent == player))
}
function winsRow2(player) {
 return ((document.getElementById("btn4").textContent == player) &&
         (document.getElementById("btn5").textContent == player) &&
         (document.getElementById("btn6").textContent == player))
}
function winsRow3(player) {
 return ((document.getElementById("btn7").textContent == player) &&
         (document.getElementById("btn8").textContent == player) &&
         (document.getElementById("btn9").textContent == player))
}
function winsColumn1(player) {
 return ((document.getElementById("btn1").textContent == player) &&
         (document.getElementById("btn4").textContent == player) &&
         (document.getElementById("btn7").textContent == player))
}
function winsColumn2(player) {
 return ((document.getElementById("btn2").textContent == player) &&
         (document.getElementById("btn5").textContent == player) &&
         (document.getElementById("btn8").textContent == player))
}
function winsColumn3(player) {
 return ((document.getElementById("btn3").textContent == player) &&
         (document.getElementById("btn6").textContent == player) &&
         (document.getElementById("btn9").textContent == player))
}
function winsDiagonal1(player) {
 return ((document.getElementById("btn1").textContent == player) &&
         (document.getElementById("btn5").textContent == player) &&
         (document.getElementById("btn9").textContent == player))
}
function winsDiagonal2(player) {
 return ((document.getElementById("btn5").textContent == player) &&
         (document.getElementById("btn5").textContent == player) &&
         (document.getElementById("btn7").textContent == player))
}
function checkForWin(player) {
 return ( winsRow1(player)       || winsRow2(player)     || winsRow3(player)    ) ||
        ( winsColumn1(player)    || winsColumn2(player)  || winsColumn3(player) ) ||
        ( winsDiagonal2(player)  || winsDiagonal1(player)                       )
}
