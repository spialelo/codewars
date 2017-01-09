/*
list
Description:
Format a string of names like 'Bart, Lisa & Maggie'.
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.


*/



function list(names){
  //your code here
  var namesLength = names.length;

  switch(namesLength){
  	case 0:
    	return ('');
      break;
    case 1:
    	return (names[0].name);
      break;
    case 2:
    	return (names[0].name + ' & ' + names[1].name);
      break;
    default:
    	var output= '';
    		for(var i=0; i<names.length-1; i++){
        	if(i == (names.length-2)){
           output += names[i].name + ' & ' + names[i+1].name;
          }
          else{
          output += names[i].name + ', ';
          }
    }
    	return (output);
      break;

  }

}



list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]);
list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]);
list([{name: 'Bart'},{name: 'Lisa'}]);
list([{name: 'Bart'}]);
list([]);
