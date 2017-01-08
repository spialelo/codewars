/*
find_average

Description:
Calculate average: Write function avg which calaculates average of numbers in given list.

*/


function find_average(array) {
  // your code here
  //return 0;
  console.log ( (array.reduce(function(a,b){
  	return a + b;
  }))/array.length );

}
