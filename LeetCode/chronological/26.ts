function removeDuplicates(nums: number[]): number {

  let count = 0;
  nums.map((val, index) => {
      if (val === nums[index +1])
          nums[index] = 101;
      else 
          count +=1;
  })
  nums.sort((a,b) => a-b);

  return count;
};