var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.children = new Map();
        this.count = 0;
    }
    return TrieNode;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TrieNode();
    }
    Trie.prototype.insert = function (word) {
        var node = this.root;
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            if (!node.children.has(char))
                node.children.set(char, new TrieNode());
            node = node.children.get(char);
            node.count += 1;
        }
    };
    Trie.prototype.count = function (word) {
        var node = this.root;
        var count = 0;
        for (var _i = 0, word_2 = word; _i < word_2.length; _i++) {
            var char = word_2[_i];
            count += node.children.get(char).count;
            node = node.children.get(char);
        }
        return count;
    };
    return Trie;
}());
function sumPrefixScores(words) {
    var trie = new Trie();
    var retArr = new Array();
    for (var x = 0; x < words.length; x++) {
        trie.insert(words[x]);
    }
    for (var x = 0; x < words.length; x++) {
        retArr.push(trie.count(words[x]));
    }
    return retArr;
}
;
