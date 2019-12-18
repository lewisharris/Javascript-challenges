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

