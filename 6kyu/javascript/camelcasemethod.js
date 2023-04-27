// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)


String.prototype.camelCase = function()
{
  let camelString = ""
  let previousSpace = false
  
  for(let i=0; i<this.length; i++)
  {
    if(this[i] === " ")
    {
      previousSpace = true
    }
    else
    {
      if(previousSpace || i===0)
      {
        camelString += this[i].toUpperCase()
      }
      else
      {
        camelString += this[i].toLowerCase()
      }
      
      previousSpace = false 
    }
  }
  
  return camelString
}