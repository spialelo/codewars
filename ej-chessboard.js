/*
Eloquent JavaScript:
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

*/



function chessBoard(input) {
    //Enter your code here
    var width = input;
    var height = input;
    var chessGrid = '';

    for(var i = 0; i < height; i++){

      if(i%2!=0){
      	for (var k=0; k <width; k++){
        if(k%2!=0){
        chessGrid += ' ';
        }

        else{
         chessGrid += '#';
        }

        }
      }

      else{
      	for (var k=0; k <width; k++){
        if(k%2!=0){
        chessGrid += '#';
        }

        else{
         chessGrid += ' ';
        }

        }
      }


      chessGrid += '\n';

    }

    console.log(chessGrid);
}


chessBoard(8);
chessBoard(10);
