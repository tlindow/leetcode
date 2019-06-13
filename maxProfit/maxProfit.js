/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  const isLocalMin = (p1 = Infinity, p2, p3) => p1 >= p2 && p2 < p3;
  const isLocalMax = (p1, p2, p3 = 0) => p1 < p2 && p2 >= p3;
  let buyPrice = null;
  let sellPrice = null;
  for (var i = 0; i < prices.length; i++) {
    if(isLocalMin(prices[i - 1], prices[i], prices[i+1])) {
      buyPrice = prices[i];
    }
    if(isLocalMax(prices[i - 1], prices[i], prices[i+1])) {
      sellPrice = prices[i];
    }
    if (sellPrice >= 0 && buyPrice >= 0) {
      max += (sellPrice - buyPrice);
      buyPrice = null;
      sellPrice = null;
    }
  }  
  return max;
};
