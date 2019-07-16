/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  let triangle;
  let sideA;
  let sideB;
  let sideC;
  let perimeter = 0;
  if (A.length < 3) {
      return perimeter;
  }
  
  A.sort((a, b) => a - b);
  console.log(A);
  for (var i = A.length; i >= 3; i--) {
      triangle = [A[i - 3], A[i - 2], A[i - 1]]
      console.log(triangle);
      sideA = triangle[0];
      sideB = triangle[1];
      sideC = triangle[2];

      if (sideA + sideB > sideC) {
          if (sideA + sideB + sideC > perimeter) {
              perimeter = sideA + sideB + sideC;
          }
      } 
  }
  
  return perimeter;
};
