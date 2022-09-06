// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending){
    const totalStringLength = str.length
    const endingStringLength = ending.length
    
    if(str.includes(ending))
    {
      if(str.slice(totalStringLength-endingStringLength) === ending)
      {
        return true
      }
      else
      {
        return false
      }
    }
    else
    {
      return false
    }
  }