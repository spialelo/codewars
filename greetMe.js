/* greetMe 

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example

greet("maya") # returns "Hello Maya!"
greet("JACK") # returns "Hello Jack!"


*/

var greet = function(name) {

    if(typeof name !== 'string'){
     console.log("Enter your name.");   
    }
    
    else{
     console.log("Hello "+name.charAt(0).toUpperCase()+name.substring(1, name.length).toLowerCase()+"!");   
    
    }
    
    
};

greet("maya");
greet("JACK");