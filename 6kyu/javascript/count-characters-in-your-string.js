// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count(string)
{
  const letterMap = {}
  
  for(let letter of string)
  {
    if(Object.hasOwn(letterMap, letter))
    {
      letterMap[letter]++
    }
    else
    {
      letterMap[letter] = 1
    }
  }
  
  return letterMap;
}