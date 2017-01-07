/*
hexToDec

Description:
Write a function that determines if a string starts with an upper-case letter A-Z.
*/


function startUpperCase (str){

/*	if(str.charAt(0).match(/[A-Z]/g)){
			//return
			console.log("true");
			}
		else{
			console.log("false");
			}
*/

//Realized I could write it using the ternary operator after writing it as an if/else
	console.log(str.charAt(0).match(/[A-Z]/g)?true:false);

}


startUpperCase("Nicole");
startUpperCase("nicole");
