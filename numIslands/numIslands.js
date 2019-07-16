/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  //if it's a 1, recursive search for other 1s and change to twos, if no more ones return and add 1 to count
  let count = 0;
  const findOnes = (i, j) => {
      if (i >= 0 & j >= 0 && i < grid.length && j < grid[i].length && grid[i][j] === '1') {
          grid[i][j] = '2';
          findOnes(i + 1, j);
          findOnes(i - 1, j);
          findOnes(i, j + 1);
          findOnes(i, j - 1);
      } else {
          return;
      }
  }
  
  for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === '1') {
              findOnes(i, j);
              count++;
          }
      }
  }
  
  return count;
};
