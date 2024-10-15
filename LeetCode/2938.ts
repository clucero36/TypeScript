function minimumSteps(s: string): number {
  let ans = 0;
  let count = 0;
  for (let x = s.length -1; x >= 0; x--) {
      if (s[x] === '0')
          count++;
      if (s[x] === '1')
          ans += count;
  }

  return ans;
};