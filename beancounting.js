//Bean counting
/*
Write a function called countBs thattakes a string as its only argument 
and returns a number that indicates how many uppercase "B" characters there are in the string.
-------------
Then write a function called countChar that behaves like countBs, except it takes a second argument that 
indicates the character that is to be counted (rather than only counting uppercase 'B' characters). Rewrite countBs to make
use of this new function.
*/


//Solution 1
function countBs(string){
    let numberOfBs = 0;
    for(i=0;i<string.length;i++){
        if(string[i]==='B'){
            numberOfBs += 1;
        }
    }
    console.log(numberOfBs);
}

countBs('Beef Burgers are usually beef');

//Solution 2

function countChar(string,number){
    let letter = string[number];
        if(string[5]==='B'){
            console.log('character ' + number + ' is '+ letter);
        }

}

countChar('Beef Burgers are usually beef',5);