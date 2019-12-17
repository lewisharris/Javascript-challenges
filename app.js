//Eloquent Javascript Code Challenges

/* 
LOOPING A TRIANGLE
Write a loop that makes seven calls to console.log to output the following Triangle:
#
##
###
####
#####
######
#######
*/
function triangle(iterations){
    let blank = '';
    for(i=0;i<iterations;i++){
        console.log(blank += '#');
        }
}

triangle(7);

/*FIZZBUZZ

Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions.
For numbers divisible by 3 print "Fizz" instead of the number and for numbers divisible by 5(and not ) print "Buzz" instead.
Numbers divisible by both 3 and 5 print "FizzBuzz"
*/

function fizzBuzz(iterations){
for(i=0; i <= iterations; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    }
    else if(i % 3 == 0){
        console.log("Fizz")
    }
    else if(i % 5 == 0){
        console.log('Buzz')
    }
    else{
        console.log(i);
    }
}
}
fizzBuzz(100);

/* CHESSBOARD

Write a program that creates a string that represents an 8x8 grid, using new-line characters
to separate lines. At each position of the grid there is either a space or a # character. 
The characters shouldform a chessboard.

When the program is complete, define a binding size = 8 and change the program so that it works for any size outputting
grid of given width and height.
*/
function chessBoard(width,height){
  console.log('#');  
}

chessBoard(7,7);