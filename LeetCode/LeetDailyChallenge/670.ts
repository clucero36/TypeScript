function maximumSwap(num: number): number {
  let nums = num.toString().split('').map(val => parseInt(val));
  let nums2 = [...nums]
  let shift = [];

  for (let x = 0; x < nums2.length; x++) {
      if (x === nums.length)
          return num;
      
      let maxIndex = nums.indexOf(Math.max(...nums));
      if (maxIndex !== 0) {
          let temp = nums[0]
          nums[0] = nums[maxIndex];
          nums[maxIndex] = temp;
          break;
      }
      if (maxIndex === 0) {
          shift.push(nums.shift())
      }
  }
  
  if (shift.length > 0) 
      nums = shift.concat(nums);

  return parseInt(nums.join(''));
};

// 87/112 Test Cases Passed