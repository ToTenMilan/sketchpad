/* global $ */

var boardSize = 20;
var squareSize = 400/boardSize;
$(document).ready(function() {
    
    // if (($('table').length) === 0) {
        printBoard(boardSize);
    // }
    
    $('.square').on('mouseenter', function() {
    	$(this).css('background-color', 'blue');
    });
    $('.square').on('click', function() {
    	$(this).css('background-color', 'red');
    });
    // $('#button').click(function() {
    //     var grid = parseInt(prompt("How dense should be your new awesome board? Please type a number between 1 and 64:"));
    //     $('.square').remove();
    //     boardSize = grid;
    //     printBoard(boardSize);
    // });
    
});

function printBoard(i_BoardSize) {
    var maxRow = parseInt(i_BoardSize);
    var maxCol = parseInt(i_BoardSize);
    // var num = 1;

    var myTable = $('<div id="board"></div>').appendTo("#container");
    for (var row = maxRow - 1; row >= 0; row--) {
        var myRow = $('<div class="row"></tr>').appendTo(myTable);
        for (var col = 0; col < maxCol; col++) {
            myRow.append('<div class="square"></td>');
            $('.square').css({'width': squareSize, 'height': squareSize});
            $('.row').css('height', squareSize);
        }
    }
}

