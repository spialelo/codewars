/* 

circleArea

Complete the function circleArea so that it will return the area of a circle with the given radius. Round the returned number to two decimal places. If the radius is not positive or not a number, return false.


circleArea(-1485.86);    //returns false
circleArea(0);           //returns false
circleArea(43.2673);     //returns 5881.25
circleArea(68);          //returns 14526.72
circleArea("number");    //returns false

*/


var circleArea = function(radius) {
  
    if((radius <= 0) || isNaN(radius)){
     return false;   
    }
    
    else
        return Math.round((Math.PI*Math.pow(radius,2))*100)/100;
    
};

var area1 = circleArea(-1485.86);
console.log(area1);

var area2 = circleArea(0);
console.log(area2);

var area3 = circleArea(43.2673);
console.log(area3);

var area4 = circleArea(68);
console.log(area4);

var area5 = circleArea("number");
console.log(area5);