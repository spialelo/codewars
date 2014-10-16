/* sumOfAllArguments

Write a function that finds the sum of all its arguments. 

eg: 

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15 

Note that Python's function name is sum_args, as to avoid cofusion with the preexistsing sum function.

*/

function sum() {
  // return the sum of all arguments given.
  var total = 0;
  
  for(var i =0; i<arguments.length; i++){
    
    total += arguments[i];
  
  };
  
    return total;
  
};


var add1 = sum(1,2,3);
console.log(add1);

var add2 = sum(8,2);
console.log(add2);

var add3 = sum(1,2,3,4,5);
console.log(add3);