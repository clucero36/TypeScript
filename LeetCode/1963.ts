function minSwaps(s: string): number {
  let count = 0;
  let open = 0;
  let closed = 0;

  for (let x = 0, y = s.length-1; x < s.length-1; x++) {
      if (s[x] === '[') open++
      if (s[x] === ']') closed++

      if (closed > open) {
          while (s[y] !== '[') {
              y--
          }
          s[x] === '[';
          s[y] === ']';
          count++;
          open++;
          closed--;
      }

  }
  return count;
};