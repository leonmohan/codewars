// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


function removeExclamationMarks(s)
{
  const phrase = s.replace(/!/g, "")
  return phrase
}