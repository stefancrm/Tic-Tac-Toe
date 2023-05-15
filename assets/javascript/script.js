// function to diable html elements
function disableBut() {
    for( n = 1; n < 10; ++n) {
        document.getElementById("b"+n).disabled = true;
    }
}

function playerWin(n) {
    if (n === "x") {
        document.getElementById('turn').innerHTML = "Player X won";
        disableBut();
    } else if (n === "0") {
        document.getElementById('turn').innerHTML = "Player 0 won";
        disableBut();
    } else {
        document.getElementById('turn').innerHTML = "Draw game";
    }
}
// function for user click on a tab
function check() {

    //get values of buttons
    var b1, b2, b3, b4, b5, b6, b7, b7, b8, b9
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    //check if Player X won
    if ((b1 == "x") && (b2 == "x") && (b3 == "x")) {
        playerWin("x");
        
    } else if ((b1 == "x") && (b4 == "x") && (b7 == "x")) {
        playerWin("x");
       
    } else if ((b7 == "x") && (b8 == "x") && (b9 == "x")) {
        playerWin("x");
       
    } else if ((b3 == "x") && (b6 == "x") && (b9 == "x")) {
        playerWin("x");
       
    } else if ((b1 == "x") && (b5 == "x") && (b9 == "x")) {
        playerWin("x");
      
    } else if ((b3 == "x") && (b5 == "x") && (b7 == "x")) {
        playerWin("x");
        
    } else if ((b2 == "x") && (b5 == "x") && (b8 == "x")) {
        playerWin("x");
       
    } else if ((b4 == "x") && (b5 == "x") && (b6 == "x")) {
        playerWin("x");
       
    } 
    //check if Player 0 won
    else if ((b1 == "0") && (b2 == "0") && (b3 == "0")) {
        playerWin("0");
       
    } else if ((b1 == "0") && (b4 == "0") && (b7 == "0")) {
        playerWin("0");
       
    } else if ((b7 == "0") && (b8 == "0") && (b9 == "0")) {
        playerWin("0");
       
    } else if ((b3 == "0") && (b6 == "0") && (b9 == "0")) {
        playerWin("0");
      
    } else if ((b1 == "0") && (b5 == "0") && (b9 == "0")) {
        playerWin("0");
       
    } else if ((b3 == "0") && (b5 == "0") && (b7 == "0")) {
        playerWin("0");
       
    } else if ((b2 == "0") && (b5 == "0") && (b8 == "0")) {
        playerWin("0");
     
    } else if ((b4 == "0") && (b5 == "0") && (b6 == "0")) {
        playerWin("0");
      
    }
    // check if the game is a draw
    else if ((b1 == "x" || b1 == "0") && (b2 == "x" || b2 == "0") &&
            (b3 == "x" || b3 == "0") && (b4 == "x" || b4 == "0") &&
            (b5 == "x" || b5 == "0") && (b6 == "x" || b6 == "0") &&
            (b7 == "x" || b7 == "0") && (b8 == "x" || b8 == "0") &&
            (b9 == "x" || b9 == "0")) {
                playerWin("draw");
    } else {
        //player turn
        if (flag == 1) {
            document.getElementById('turn').innerHTML = "Player X Turn";
        } else {
            document.getElementById('turn').innerHTML = "Player 0 Turn";
        }
    }
}
//reset game function
function reset_game() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
    
}
// check player turn
let flag = 1
// function for clicking a cell
function click_cell(value) {
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