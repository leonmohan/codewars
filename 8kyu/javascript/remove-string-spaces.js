// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x)
{
  let noSpaceString = "";
  
  const stringArray = x.split("")
  const processedArray = stringArray.filter(char => {return char !==" "})
  processedArray.map(letter => noSpaceString+=letter)
  
  return noSpaceString
}