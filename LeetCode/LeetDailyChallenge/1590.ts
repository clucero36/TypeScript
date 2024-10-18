function minSubarray(nums: number[], p: number): number {
  let total = nums.reduce((acc, curr) => acc + curr);
  let remainder = total % p;
  if (remainder === 0) return 0;

  let minLength = nums.length;
  let map = new Map<number, number>();
  let modSum = 0;
  let currMod;
  map.set(0, -1);

  for (let x = 0; x < nums.length; x++) {
      modSum = (nums[x] + modSum) % p;
      currMod = (modSum - remainder + p) % p;

      if (map.has(currMod))
          minLength = Math.min( minLength, x - map.get(currMod) );

      map.set(modSum, x);        
  }

  return minLength === nums.length ? -1 : minLength;
};