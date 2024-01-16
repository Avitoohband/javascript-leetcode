const stockPrices = [7, 1, 5, 3, 6, 4];
const stockPrices2 = [1, 4, 2];
const stockPrices3 = [3, 2, 6, 5, 0, 3];

var maxProfit = function (prices) {

   let profit = 0 ;
   let i = 0 ;
   let minBuy = i ;
   
   while (i < prices.length){
      if (prices[i] < prices[minBuy]){
         minBuy = i;
      }
      profit = Math.max(profit, prices[i++] - prices[minBuy]);
   }

   return profit;
};

console.log(maxProfit(stockPrices3));
