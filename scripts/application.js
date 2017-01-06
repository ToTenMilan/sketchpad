/* global $ */

var boardSize = 20;

$(document).ready(function() {
    
    printBoard(boardSize);
    var backgroundColor = 'black';
    
    $('#container').on('mouseenter', '.square', function() {
        
    	$(this).css({'background-color': backgroundColor});
    	var opacity = +$(this).css('opacity');
    	if (opacity < 1) {
    	    opacity += 0.1;
    	    $(this).css('opacity', opacity);
    	}
    });
    
    $('#red').click(function() {
       backgroundColor = 'red';
       $('.square').css('background-color', backgroundColor); 
    });
    $('#green').click(function() {
       backgroundColor = 'green';
       $('.square').css('background-color', backgroundColor); 
    });
    $('#blue').click(function() {
       backgroundColor = 'blue';
       $('.square').css('background-color', backgroundColor); 
    });
    $('#yellow').click(function() {
       backgroundColor = 'yellow';
       $('.square').css('background-color', backgroundColor); 
    });
    $('#black').click(function() {
       backgroundColor = 'black';
       $('.square').css('background-color', backgroundColor); 
    });
    // $('.square').on('click', function() {
    // 	$(this).css('background-color', 'red');
    // });
    $('#button').click(function() {
        var grid = parseInt(prompt("How dense should be your new awesome board? Please type a number between 1 and 64:"));
        if (grid > 64) {
            alert("Chill man that's too big. We don't want to hang your machine. Your new board has been set to max of 64x64 squares");
            boardSize = 64;
        } else {
            boardSize = grid;
        }
        $('.square').remove();
        printBoard(boardSize);
    });
});

// part of below function from here http://stackoverflow.com/questions/25999747/how-to-create-board-nxn-using-javascript-and-jquery/25999892
function printBoard(i_BoardSize) {
    var maxRow = parseInt(i_BoardSize);
    var maxCol = parseInt(i_BoardSize);

    var myTable = $('<div id="board"></div>').appendTo("#container");
    for (var row = maxRow - 1; row >= 0; row--) {
        var myRow = $('<div class="row"></tr>').appendTo(myTable);
        for (var col = 0; col < maxCol; col++) {
            myRow.append('<div class="square"></td>');
            var squareSize = 400/boardSize;
            $('.square').css({'width': squareSize + 'px', 'height': squareSize + 'px'});
            $('.row').css('height', squareSize + 'px');
        }
    }
}

