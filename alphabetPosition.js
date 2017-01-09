

/*
alphabetPosition
Description:
Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc. As an example:

alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

*/



function alphabetPosition(text) {

	var testABC = 'abcdefghijklmnopqrstuvwxyz';
  var cleanStr = text.toLowerCase().match(/[a-z]/gi).toString().replace(/,/g,'');
  var newStr = '';

  for(var i=0; i<cleanStr.length; i++){

      for(var j=0; j<testABC.length; j++){

        if(cleanStr[i] == testABC[j]){

          (i == cleanStr.length-1)?newStr += (j+1):newStr += (j+1)+ ' ';

        }

      }

  }
     //return (cleanStr);
      return newStr;
}

//alphabetPosition("abc");
alphabetPosition("The sunset sets at twelve o' clock.");
alphabetPosition("The narwhal bacons at midnight.");
alphabetPosition("[wwz<>1u");
alphabetPosition("twm-e &e");
