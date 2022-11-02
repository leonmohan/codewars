// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.


function solve(s)
{
  const uppercaseChars = s.match(/[A-Z]/g)
  const lowercaseChars = s.match(/[a-z]/g)
  const numberChars = s.match(/[0-9]/g)
  const specialChars = s.match(/\W|_/g)
  
  return [
          uppercaseChars ? uppercaseChars.length:0, 
          lowercaseChars ? lowercaseChars.length:0, 
          numberChars ? numberChars.length:0, 
          specialChars ? specialChars.length:0
         ]
}