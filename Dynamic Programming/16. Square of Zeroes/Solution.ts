export function squareOfZeroes(matrix: number[][]) {
    const n = matrix.length;
      for (let topRow = 0; topRow < n; topRow++){
          for (let leftCol = 0; leftCol < n; leftCol++){
              let squareLength = 2;
              while (squareLength <= n - leftCol && squareLength <= n - topRow){
                  const bottomRow = topRow + squareLength - 1;
                  const rightCol = leftCol + squareLength - 1;
                  if(isSquareOfZeroes(matrix, topRow, leftCol, bottomRow, rightCol)) return true;
                  squareLength++;
              }
          }
      }
      return false;
  }
  
  function isSquareOfZeroes(matrix: number[][], r1: number, c1: number, r2: number, c2: number){
      for (let row = r1; row < r2 + 1; row++){
          if(matrix[row][c1] !== 0 || matrix[row][c2] !== 0) return false;
      }
      for (let col = c1; col < c2 + 1; col++){
          if (matrix[r1][col] !== 0 || matrix[r2][col] !== 0) return false;
      }
      return true;
  }
  
  
  