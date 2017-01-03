/* global $ */

var boardSize = 5020;
$(document).ready(function() {
    printBoard(boardSize);
    
    $('.square').on('mouseenter', function() {
    	$(this).css('background-color', 'blue');
    });
    $('.square').on('click', function() {
    	$(this).css('background-color', 'red');
    });
});

function printBoard(i_BoardSize) {
    var maxRow = parseInt(i_BoardSize);
    var maxCol = parseInt(i_BoardSize);
    // var num = 1;

    var myTable = $("<table></table>").appendTo("#container");
    for (var row = maxRow - 1; row >= 0; row--) {
        var myRow = $("<tr></tr>").appendTo(myTable);
        for (var col = 0; col < maxCol; col++) {
            myRow.append('<td class="square"></td>');
        }
    }
}

// var ctr = 0;
// $(document).ready(function () {
//      for (var i = 1; i <= 16; i++) {
//          for (var j = 1; j <= 16; j++) {
//             //  var currentLine = $('.line').append(i);
//              $('.container').append('<div id=line' + i '" class="square"></div>');
//             //  ctr += 1;
//          }
//      }
//  });

// for (i = 1; i <= 16; i++) {
//     for (j = 1; j<= 16; j++) {
//         document.getElementById()
//     }
// }



// loop 16 times
//     loop 16 times
//         create one div
//     create div container for next line of 16 divs

