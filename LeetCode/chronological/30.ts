var findSubstring = function (s, words) {
  let ansArr = [];
  let window = 1;
  let wordWindow = words[0].length;
  let currIndex = 0;
  let p1 = 0;
  let p2 = wordWindow;
  let wordsSplice = words;

  while (currIndex < s.length) {
      let word = s.slice(p1, p2);
      console.log(word, 'currIndex:', currIndex, 'p1: ', p1, 'p2: ', p2);
      if (wordsSplice.indexOf(word) !== -1) {
          wordsSplice = wordsSplice.toSpliced(wordsSplice.indexOf(word), 1);
          if (wordsSplice.length === 0) {
              ansArr.push(currIndex);
              wordsSplice = words;
              currIndex += window;
              p1 = currIndex;
              p2 = p1 + wordWindow;
          }
          else {
              p1 = p2;
              p2 += wordWindow;
          }
      }
      else {
          wordsSplice = words;
          currIndex += window;
          p1 = currIndex;
          p2 = p1 + wordWindow;
      }
  }

  return ansArr;
};

// 175 of 182 test cases passed