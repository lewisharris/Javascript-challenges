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

