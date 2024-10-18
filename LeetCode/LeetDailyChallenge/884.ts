function uncommonFromSentences(s1: string, s2: string): string[] {
  let s3 = (s2 + ' ' + s1).split(' ');
  
  const duplicates = s3.filter((word, index) => s3.indexOf(word) !== index)
  const nonDup = s3.filter((word) => duplicates.indexOf(word) === -1)

  return nonDup;
};

let string1 = 'this apple is sour';
let string2 = 'this apple is sweet';

let string3 = 'apple apple';
let string4 = 'banana'

console.log(uncommonFromSentences(string1, string2));
console.log(uncommonFromSentences(string3, string4));