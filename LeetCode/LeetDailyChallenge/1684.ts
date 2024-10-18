function countConsistentStrings(allowed: string, words: string[]): number {
  let count = 0;
  for (let x = 0; x < words.length; x++) {
      for (let y = 0; y < words[x].length; y++) {
          if (allowed.indexOf(words[x][y]) === -1) 
              break
          if (y === words[x].length -1)
              count += 1;
      }
  }
  return count;
};


const allowed1 = "cad"
const words1 = ["cc","acd","b","ba","bac","bad","ac","d"]

const allowed2 = "abc"
const words2 = ["a","b","c","ab","ac","bc","abc"]

const allowed3 = "ab"
const words3 = ["ad","bd","aaab","baa","badab"]

console.log(countConsistentStrings(allowed1, words1))
console.log(countConsistentStrings(allowed2, words2))
console.log(countConsistentStrings(allowed3, words3))
