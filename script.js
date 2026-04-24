
var player1 = "";
var player2 = "";
var player1Color = 'rgb(86, 151, 255)';
var player2Color = 'rgb(255, 10, 194)';
var bombRow;
var bombCol;
var gameStarted = false;


var currentPlayer = 1;
var currentName = "";
var currentColor = player1Color;

var table = $('table tr');


function startgame() {
    var p1 = prompt("Enter Player-1 name>>");
    if (!p1 || p1.trim() === "") { alert("Player 1 name is required!"); return; }

    var p1c = prompt("Choose Player-1 color (red / blue / green / yellow / pink)","blue");
    if (!p1c || p1c.trim() === "") { alert("Player 1 color is required!"); return; }

    var p2 = prompt("Enter Player-2 name>>");
    if (!p2 || p2.trim() === "") { alert("Player 2 name is required!"); return; }

    var p2c = prompt("Choose Player-2 color (red / blue / green / yellow / pink)","pink");
    if (!p2c || p2c.trim() === "") { alert("Player 2 color is required!"); return; }

    player1 = p1;
    player1Color = p1c;
    player2 = p2;
    player2Color = p2c;

    gameStarted = true;
    currentPlayer = 1;
    currentName = player1;
    currentColor = player1Color;

    $('.sbtn').text(currentName + " Your Turn!!");
    bombRow = Math.floor(Math.random() * table.length);
    bombCol = Math.floor(Math.random() * 7);
}

function changeColor(rownum, colnum, color) {
    table.eq(rownum).find('td').eq(colnum).find('button').css('background-color', color);
}

function returnColor(rownum, colnum) {
    return table.eq(rownum).find('td').eq(colnum).find('button').css('background-color');
}

function checkBottom(colindex) {
    for (var row = table.length - 1; row >= 0; row--) {
        if (returnColor(row, colindex) === 'rgb(125, 121, 121)') {
            return row;
        }
    }
}

function matchColor(one, two, three, four) {
    return (one === two &&one === three &&one === four &&one !== 'rgb(125, 121, 121)');
}

function hWincheck() {
    for (var row = 0; row < table.length; row++) {
        for (var col = 0; col < 4; col++) {
            if (matchColor(returnColor(row, col),returnColor(row, col + 1),returnColor(row, col + 2),returnColor(row, col + 3))) 
            {
                return true;
            }
        }
    }
}

function vWincheck() {
    for (var row = 0; row < table.length - 3; row++) {
        for (var col = 0; col < 7; col++) {
            if (matchColor(returnColor(row, col),returnColor(row + 1, col),returnColor(row + 2, col),returnColor(row + 3, col))) 
            {
                return true;
            }
        }
    }
}

function DWincheck() {
    for (var row = 0; row < table.length - 3; row++) {
        for (var col = 0; col < 4; col++) 
        {

            if (matchColor(returnColor(row, col),returnColor(row + 1, col + 1),returnColor(row + 2, col + 2),returnColor(row + 3, col + 3)))
                return true;

            if (matchColor(returnColor(row + 3, col),returnColor(row + 2, col + 1),returnColor(row + 1, col + 2),returnColor(row, col + 3))) 
                 return true;
        }
    }
}

$('.board button').on('click', function () {
    if (!gameStarted) {
        alert("Please click START and enter player details first!");
        return;
    }

    var col = $(this).closest('td').index();
    var bottomA = checkBottom(col);

    if (bottomA === undefined) 
        return;

    changeColor(bottomA, col, currentColor);
    
    if (bottomA === bombRow && col === bombCol) 
    {
    var winner = (currentPlayer === 1) ? player2 : player1;
    alert("💥 BOOM! Bomb hit!\n" + winner + " WINS THE GAME!");
    $('.sbtn').text(winner + " WON!!!");
    return;
    }

    dropSound.currentTime = 0;
    dropSound.play();

    if (hWincheck() || vWincheck() || DWincheck()) 
    {
        alert("🎉 " + currentName + " WON THE GAME!");
         $('.sbtn').text(currentName + " WON!!!");
         return;
    }

    currentPlayer *= -1;

    if (currentPlayer === 1) {
        currentName = player1;
        currentColor = player1Color;
    } 
    else {
        currentName = player2;
        currentColor = player2Color;
    }

    $('.sbtn').text(currentName + " Your Turn!!");
});


function restartgame() {
    var again = confirm("Do you want to play again?");

    if (again) {
        $('.board button').css('background-color', 'rgb(125, 121, 121)');
        $('.sbtn').text("START");
        gameStarted = false;
        startgame();
    } 
    else
    {
        alert("Thanks for playing!");
        window.close();  
    }
}

// Trigger setup on load
$(document).ready(function() {
    startgame();
});
