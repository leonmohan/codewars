// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

function largest(n, array) 
{
  const sortedArray = array.sort((a, b)=>a-b)
  const largestNums = []
  
  for(let i=0; i<n; i++)
  {
    largestNums.unshift(sortedArray[sortedArray.length - i-1])
  }
  
  return largestNums
}