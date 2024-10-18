function uncommonFromSentences(s1, s2) {
    var s3 = (s2 + ' ' + s1).split(' ');
    var duplicates = s3.filter(function (word, index) { return s3.indexOf(word) !== index; });
    var nonDup = s3.filter(function (word) { return duplicates.indexOf(word) === -1; });
    return nonDup;
}
;
var string1 = 'this apple is sour';
var string2 = 'this apple is sweet';
var string3 = 'apple apple';
var string4 = 'banana';
console.log(uncommonFromSentences(string1, string2));
console.log(uncommonFromSentences(string3, string4));
