/* CHESSBOARD

Write a program that creates a string that represents an 8x8 grid, using new-line characters
to separate lines. At each position of the grid there is either a space or a # character. 
The characters shouldform a chessboard.

When the program is complete, define a binding size = 8 and change the program so that it works for any size outputting
grid of given width and height.
*/
function chessBoard(grid){
    let gridSize = grid;
    let pattern = '';
    for(y=0; y<gridSize;y++){ // Creates a loop to produce gridSize number of iterations in Y
        for(x=0; x<gridSize;x++){ // Creates a loop to produce gridSize number of iterations in X
            if( (x + y) % 2 == 0){ // runs if the number is even
            pattern += ' ';
        }
            else{       //runs if the number is odd.
                pattern += '#';
                }
            }
        pattern += '\n'; // runs at the end of the inner(x) loop, this creates a new line
    }
    console.log(pattern); // logs new version of pattern only after all the loops have finished.
}

chessBoard(9);
