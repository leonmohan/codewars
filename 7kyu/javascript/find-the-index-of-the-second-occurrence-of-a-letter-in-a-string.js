// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1
// Good luck ;) And don't forget to rate this Kata if you liked it.

function secondSymbol(s, symbol)
{
  let count = 2
  
  for(let i=0; i<s.length+1; i++)
  {
    if(count === 0){return i-1}
    s[i] === symbol && (count--)
  }
  
  return -1
}