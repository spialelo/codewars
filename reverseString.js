/* reverseString

*/

String.prototype.reverse = function(){

    var origString = [];
    var revString = [];
        
  
    
   for(var i=this.length-1; i>=0; i--){
     
    origString.push(this.charAt(i));
        
        
    };
    
   revString = origString.join(""); 
    
   
    return this + " "+ revString;
 
};

console.log("Nicole Phillips".reverse());
console.log("I want to be a junior web developer".reverse());