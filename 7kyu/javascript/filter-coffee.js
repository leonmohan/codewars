// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

function search(budget, prices) 
{ 
  const budgetPrices = prices.filter(price => price <= budget).sort((a, b) => a-b)
  const stringPrices = budgetPrices.map((price, idx)=>{
    if(idx === budgetPrices.length-1)
    {
      return `${price}`
    }
    else{
      return `${price},`
    }
  }).join("")
  
  
  return stringPrices
}