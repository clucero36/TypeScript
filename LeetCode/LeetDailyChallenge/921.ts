function minAddToMakeValid(s: string): number {
  let open = 0;
  let closed = 0;
  let count = 0;

  for (const char of s) {
      if (char === '(') open++;
      if (char === ')') closed++;

      if (closed > open) {
          count++;
          open++;
      }
  }
  

  return count + (open-closed);

};