// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) 
{
  const words = str.split(" ")
  const reversedWords = []
  
  
  let reversedWord = [];
  
  for(let word of words)
  {
    reversedWord = []
    
    for(let char of word.split(""))
    {
      reversedWord.unshift(char)
    }
    
    reversedWords.push(reversedWord.join(""))
  }
  
  return reversedWords.join(" ")
}