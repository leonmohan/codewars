// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function grow(x){
    let sum = 1
    
    for(num of x)
    {
      sum = sum*num
    }
    
    return sum
}