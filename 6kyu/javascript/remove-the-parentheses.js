// Remove the parentheses
// In this kata you are given a string for example:

// "example(unwanted thing)example"
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// "exampleexample"
// Notes
// Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
// There can be multiple parentheses.
// The parentheses can be nested.


function removeParentheses(s)
{
  const stringArray = s.split("")
  const processedArray = []
  let parenthesesToClose = 0
  
  for(let i=0; i<stringArray.length; i++)
  { 
    if(stringArray[i] === "(")
    {
      parenthesesToClose++
    }
    
    if(!parenthesesToClose > 0)
    {
      processedArray.push(stringArray[i])
    }
    
    if(stringArray[i] === ")")
    {
      parenthesesToClose--
    }
  }
  
  return processedArray.join("")
}