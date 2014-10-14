/* noOdd_values 

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.


*/

function noOdds( values ){
  // Return all non-odd values
  
    var notOdd = [];
    
    for (var i=0; i<values.length; i++){
     
        if((values[i]%2) == 0){
         notOdd.push(values[i]);   
        }
        
    }
  
  console.log(notOdd);
    
}

noOdds([2,5,8,6,5,7,4]);