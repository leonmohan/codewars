// We often use smiley faces in correspondence with other people. They allow us to quickly show our reaction to the person(s) we are talking to.

// But one day you wanted to make your correspondence more joyful. So today you have the opportunity to make it happen.

// Task:
// In this kata, your task will be to replace sad emoticons with funny ones.

// The emoticons, will be represented from:

// Eyes: marked as :, ; or =
// Nose (optional): marked as - or ~
// Mouth: marked as ( or [
// Examples:
// smile("Howdy :(")  // should return "Howdy :)"
// smile("Never be sad =[")  // should return "Never be sad =]"
// smile("Change this `=(` and this `:[`")  // should return "Change this `=)` and this `:]`"


function smile(text)
{
  let faces = {"[":"]", "(":")"}
  
  let txt = text.split("")
  
  let processedText = txt.map((char, idx) => {
    if(char === "(" || char === "[")
    {
      if(txt[idx-1] === "-" || txt[idx-1] === "~")
      {
        if(txt[idx-2] === ":" || txt[idx-2] === ";" || txt[idx-2] === "=")
        {
          return faces[char]
        }
      }
      else if(txt[idx-1] === ":" || txt[idx-1] === ";" || txt[idx-1] === "=")
      {
        return faces[char]
      }
    }
    return char
  }).join("")
  
  
  return processedText
}