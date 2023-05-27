// function to diable html elements
function disableBut() {
    for( n = 1; n < 10; ++n) {
        document.getElementById("b"+n).disabled = true;
    }
}

function playerWin(n) {
    let message;
    if (n === "x") {
        message = "Player X won";
    } else if (n === "0") {
        message = "Player 0 won";
    } else {
        message = "Draw game";
    }
    document.getElementById('turn').innerHTML = message;
    disableBut();
}

// function for user click on a tab
function check() {
    let board = [];
    for (var i = 1; i <= 9; i++) {
        board[i] = document.getElementById("b" + i).value;
      }
    let winningCombinations = [
        [1, 2, 3], [1, 4, 7], [7, 8, 9], [3, 6, 9],
        [1, 5, 9], [3, 5, 7], [2, 5, 8], [4, 5, 6]
      ];
      for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (board[a] === "x" && board[b] === "x" && board[c] === "x") {
          playerWin("x");
          return;
        } else if (board[a] === "0" && board[b] === "0" && board[c] === "0") {
          playerWin("0");
          return;
        }
      }
    
      if (board.slice(1).every(val => val === "x" || val === "0")) {
        playerWin("draw");
      } else {
        document.getElementById('turn').innerHTML = "Player " + (flag == 1 ? "X" : "0") + " Turn";
      }

}
//reset game function
function resetGame() {
    location.reload();
    for (var i = 1; i <= 9; i++) {
        document.getElementById("b" + i).value = '';
      }    
}
// check player turn
let flag = 1
// function for clicking a cell
function clickCell(value) {
    if (flag == 1) {
        document.getElementById(value).value = "x";
        document.getElementById(value).disabled = true;
        flag = 0;
    } else {
        document.getElementById(value).value = "0";
        document.getElementById(value).disabled = true;
        flag = 1;
    }
}