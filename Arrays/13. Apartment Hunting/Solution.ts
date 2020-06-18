interface Block {
    [key: string]: boolean;
  }
  
  export function apartmentHunting(blocks: Block[], reqs: string[]) {
    const maxDistancesAtBlocks = new Array(blocks.length).fill(-Infinity);
      for (let i = 0; i < blocks.length; i++){
          for (const req of reqs){
              let closestReqDistance = Infinity;
              for(let j = 0; j < blocks.length; j++){
                  if(blocks[j][req]){
                      closestReqDistance = Math.min(closestReqDistance, distanceBetween(i, j));
                  }
              }
              maxDistancesAtBlocks[i] = Math.max(maxDistancesAtBlocks[i],closestReqDistance);
          }
      }
      return getIdxAtMinValue(maxDistancesAtBlocks);
  }
  
  function getIdxAtMinValue(array: number[]){
      let idxAtMinValue = 0;
      let minValue = Infinity;
      for(let i = 0; i < array.length; i++){
          const currentValue = array[i];
          if(currentValue < minValue){
              minValue = currentValue;
              idxAtMinValue = i;
          }
      }
      return idxAtMinValue;
  }
  
  function distanceBetween(a: number, b: number){
      return Math.abs(a - b);
  }