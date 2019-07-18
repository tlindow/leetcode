/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let indexSum = Infinity;
  let restaurant = [];
  for (var i = 0; i < list1.length; i++) {
      for (var j = 0; j < list2.length; j++) {
          if (list1[i] === list2[j]) {
              if (i + j <= indexSum) {
                  indexSum = i + j
                  restaurant.push(list1[i]);
              }
           }
       }
  }
  return restaurant;
};
