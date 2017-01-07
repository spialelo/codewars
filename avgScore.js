/*
avgScore

Description:
Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

*/


function average(scores) {
    // code to calculate the average
    console.log(Math.round(scores.reduce(function(a,b){
    		return a + b;})/scores.length)
        );
}

average([49,3,5,300,7]);
