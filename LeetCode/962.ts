function maxWidthRamp(nums: number[]): number {
  let max = 0;
  let numsArr = [...nums];
  let numsArr2 = [...nums];
  numsArr.sort((a,b) => a-b);
  numsArr2.reverse();
  
  for (let x = 0; x < numsArr.length; x++) {
      if (numsArr[x] === numsArr[x+1])
          break;
      if (x === numsArr.length -1) {
          if ( JSON.stringify(numsArr) == JSON.stringify(numsArr2) )
              return 0;
      }
  }


  for (let x = 0; x < nums.length; x++) {
      for (let y = 1+x; y < nums.length; y++) {
          if (nums[x] <= nums[y])
              max = Math.max(max, y-x);
      }
      if (max >= nums.length -x) 
          return max;
  }

  return max;
};