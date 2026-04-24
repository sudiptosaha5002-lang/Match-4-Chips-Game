
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

// Handle Color Selection in Modal
$('.color-opt').on('click', function() {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    
    const parentId = $(this).parent().attr('id');
    if (parentId === 'p1colors') {
        player1Color = $(this).data('color');
    } else {
        player2Color = $(this).data('color');
    }
});

function submitDetails() {
    var p1 = $('#p1name').val().trim();
    var p2 = $('#p2name').val().trim();

    if (!p1 || !p2) {
        alert("Please enter names for both players!");
        return;
    }

    if (player1Color === player2Color) {
        alert("Players must choose different colors!");
        return;
    }

    player1 = p1;
    player2 = p2;
    
    gameStarted = true;
    currentPlayer = 1;
    currentName = player1;
    currentColor = player1Color;

    $('#playerModal').css('display', 'none');
    $('.sbtn').text(currentName + " Your Turn!!");
    
    // Set random bomb location
    bombRow = Math.floor(Math.random() * table.length);
    bombCol = Math.floor(Math.random() * 7);
}

function startgame() {
    if (!gameStarted) {
        $('#playerModal').css('display', 'flex');
    }
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
        $('#playerModal').css('display', 'flex');
    } 
    else
    {
        alert("Thanks for playing!");
        window.close();  
    }
}

// Show modal on load
$(document).ready(function() {
    $('#playerModal').css('display', 'flex');
});
