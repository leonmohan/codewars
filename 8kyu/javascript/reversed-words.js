// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"



function reverseWords(str)
{
  let wordsArr = str.split(" ")
  let reversedWords = []
  let reversedString = ""
  
  wordsArr.map(word => reversedWords.unshift(word))
  
  reversedWords.map((word, idx) => {
    if(idx === reversedWords.length-1)
    {
      reversedString += word
    }
    else
    {
      reversedString += word + " "
    }
  })
  
  return reversedString
}