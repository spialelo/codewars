/* Functional Addition

Create a function add(n) which returns a function that always adds n to any number 

var addOne = add(1);
addOne(3); // 4


var addThree = add(3);
addThree(3); // 6


Test.expect(add(1)(3)===4, 'add one to three equals four') 


*/

function add(n){
  
function addRandom(y){
  return (n + y);
  };
  
    
return addRandom;

};

var ans = add(1)(3);
console.log(ans); //4
var ans2 = add(3)(3);
console.log(ans2); //6
var ans3 = add(2)(5);
console.log(ans3);//7
