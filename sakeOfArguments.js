/* For the sake of arguments

Write a function named numbers that returns true if all the parameters it is passed are of the Number type. Otherwise, the function should return false. The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true


*/

function numbers(arguments){
    
    for(var i=0; i<arguments.length; i++){
     
        console.log(arguments[i]);
        
        /*if(typeof arguments[i] === 'Number'){
            console.log("True");
        }
        else
            console.log("False");*/
    }
};

numbers(2,4,6);