/* sentenceSmash

Sentence Smash 

Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence! Example (Ruby) 

words = ['hello', 'world', 'this', 'is', 'great']
puts smash(words) 

Should print on the console:

*/

function smash (words) {
   
    
   return words.join(" ");
    
    
};

var ans = smash(['hello', 'world', 'this', 'is', 'great']);
console.log(ans);

var ans1 = smash(['hello', 'world']);
console.log(ans1);