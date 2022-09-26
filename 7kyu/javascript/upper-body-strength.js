// Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
// He can do ten kata in an hour, but when he makes a mistake, he must do pushups. 
// These pushups really tire poor Alex out, so every time he does them they take twice as long. 
// His first set of redemption pushups takes 5 minutes. 
// Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, and the time in minutes he has to complete them.
// Your function should return how many mistakes Alex can afford to make.


function alexMistakes(numberOfKata, timeLimit)
{
  const minutesPerKata = 60/10
  const minutesNeeded = numberOfKata * minutesPerKata
  const startingPushupTime = 5
  
  let minutesRemaining = timeLimit - minutesNeeded
  let pushupTime = startingPushupTime;
  
  
  let count = 0;
  
  while(minutesRemaining-pushupTime >= 0)
  {
    minutesRemaining -= pushupTime
    count++
    minutesRemaining = pushupTime*2
  }
  
  return count
}