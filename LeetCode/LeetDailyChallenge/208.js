var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.children = new Map();
        this.isEndOfWord = false;
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
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    };
    Trie.prototype.search = function (word) {
        var node = this.root;
        for (var _i = 0, word_2 = word; _i < word_2.length; _i++) {
            var char = word_2[_i];
            if (!node.children.has(char))
                return false;
            node = node.children.get(char);
        }
        return node.isEndOfWord;
    };
    Trie.prototype.startsWith = function (prefix) {
        var node = this.root;
        for (var _i = 0, prefix_1 = prefix; _i < prefix_1.length; _i++) {
            var char = prefix_1[_i];
            if (!node.children.has(char))
                return false;
            node = node.children.get(char);
        }
        return true;
    };
    return Trie;
}());
/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/ 
