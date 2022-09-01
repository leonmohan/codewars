// Your function takes two arguments:

// 1. current father's age (years)
// 2. current age of his son (years)
// 
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld)
{
    const fathersAge = dadYearsOld
    const sonAge = sonYearsOld
    
    const targetAge = sonAge*2
    
    const answer = targetAge>fathersAge ? (fathersAge-targetAge) * -1 : fathersAge-targetAge
    return answer
}