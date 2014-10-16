/* Nested Functions and Closures


*/

var say = function firstWord(string1) {
  
  function secWord(string2){
    
    return (string1+" "+string2);
    
  };
   return secWord;
  
};

var ans = say("Hello")("World");
console.log(ans);
var ans1 = say("Peanut")("Butter");
console.log(ans1);
var ans2 = say("Harry")("Potter");
console.log(ans2);