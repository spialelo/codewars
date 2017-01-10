/*
Description:

Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.


Cleaner solution revealed after submitting:
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

My answer below:
*/





function reverseWords(str) {
  // Go for it

  var revStr = str.split('').reverse().join('').split(' ');
  var finStr = [];

  for (var i = (revStr.length - 1); i >= 0; i--) {
    finStr.push(revStr[i]);
  }

  //return (finStr.toString().replace(/,/g, ' '));
  console.log(finStr.toString().replace(/,/g, ' '));
}

reverseWords('Nicole');
reverseWords('Nicole Phillips');
reverseWords('This is an example!');
