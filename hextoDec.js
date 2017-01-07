/*
hexToDec

Description:
Write function hexToDec which converts hex number (given as a string) to decimal number.
*/


function hexToDec(hexString){
  //your code here

  console.log(parseInt(hexString, 16));
  //reverse of parseInt is toString, 16

}

hexToDec("1");
hexToDec("a");
hexToDec("FF");
hexToDec("-C");
hexToDec("10");
