
/*
EJ - Ch3 - Minimum
Description:
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
*/


function min(a,b){
//console.log((b-a)>=0?a:b);
return ((b-a)>=0?a:b);
}



/*min(0,10);
min(0,-10);*/
console.log(min(0, 10));
console.log(min(0, -10));
