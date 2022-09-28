// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) 
{
  let count = 0
  const vowels = ["a", "e", "i", "o", "u"]
  const string = str.split("")
  
  for(let letter of string)
  {
    for(let vowel of vowels)
    {
      if(letter === vowel){count++}
    }
  }
  
  return count
}