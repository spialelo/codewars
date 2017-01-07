/*
getMiddle

Description:
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

*/



function getMiddle(s)
{
  //Code goes here!
  var strLength = s.length;

  if (strLength%2==0){
    console.log(s.substring((strLength/2)-1,(strLength/2)+1));
  }

  else {
  	console.log(s.charAt(Math.floor(strLength/2)));
  }

}


getMiddle("test");
getMiddle("testing");
getMiddle("middle");
getMiddle("A");
