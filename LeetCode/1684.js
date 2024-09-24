function countConsistentStrings(allowed, words) {
    var count = 0;
    for (var x = 0; x < words.length; x++) {
        for (var y = 0; y < words[x].length; y++) {
            if (allowed.indexOf(words[x][y]) === -1)
                break;
            if (y === words[x].length - 1)
                count += 1;
        }
    }
    return count;
}
;
var allowed1 = "cad";
var words1 = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
var allowed2 = "abc";
var words2 = ["a", "b", "c", "ab", "ac", "bc", "abc"];
var allowed3 = "ab";
var words3 = ["ad", "bd", "aaab", "baa", "badab"];
console.log(countConsistentStrings(allowed1, words1));
console.log(countConsistentStrings(allowed2, words2));
console.log(countConsistentStrings(allowed3, words3));
