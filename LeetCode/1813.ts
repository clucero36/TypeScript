function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  // split our arrays
  let s1 = sentence1.split(' ');
  let s2 = sentence2.split(' ');

  // compare for equality
  if (s1.length === s2.length) {
      for (let x = 0; x < s1.length; x++) {
          if (s1[x] !== s2[x])
              return false;
      }
      return true;
  }

  // get prefix & suffix 
  let prefix = [];
  let suffix = [];
  let count1 = 0;
  while (s1[count1] === s2[count1]) {
      prefix.push(s1[count1])
      count1++;
  }
  count1 = s1.length-1;
  let count2 = s2.length-1;
  while (s1[count1] === s2[count2]) {
      suffix.push(s1[count1]);
      count1--;
      count2--;
  }

  // reverse our suffix since we started pushing into at the end of s1;
  suffix.reverse();

  while (prefix.length + suffix.length > Math.min(s1.length, s2.length)) {
      if (suffix.length > 0 && prefix.length > 0 && suffix[0] === prefix[prefix.length - 1])
          prefix.pop();
      else 
          break;
  }
  let newSentence = prefix.concat(suffix);
  return JSON.stringify(newSentence) === JSON.stringify(s1) || 
         JSON.stringify(newSentence) === JSON.stringify(s2);
  
};