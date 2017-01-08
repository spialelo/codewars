/*
likes

Description:
Who likes it?
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For more than 4 names, the number in and 2 others simply increases.

*/


function likes(names) {
  // TODO
  var likeArray = names;

  switch(likeArray.length){
  	case 0:
    		return ('no one likes this');
        break;
    case 1:
    		return (likeArray[0] + ' likes this');
        break;
    case 2:
    		return (likeArray[0] + ' and ' + likeArray[1] + ' like this');
        break;
    case 3:
    		return (likeArray[0] + ', '+ likeArray[1] + ' and ' + likeArray[2] + ' like this');
        break;
    default:
    	return (likeArray[0] + ', '+ likeArray[1] + ' and ' + (likeArray.length-2) + ' others like this');
      break;
  }

}
