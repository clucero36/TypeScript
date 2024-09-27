class TrieNode {
    children: Map<string, TrieNode>;
    count: number;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.count = 0;
    }
}


class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char))
                node.children.set(char, new TrieNode());

            node = node.children.get(char);
            node.count += 1;
        }
    }

    count(word: string): number {
        let node = this.root;
        let count = 0;
        for (const char of word) {
            count += node.children.get(char).count;
            node = node.children.get(char);
        }
        return count;
    }
}


function sumPrefixScores(words: string[]): number[] {
    let trie = new Trie();
    let retArr = new Array();

    for (let x = 0; x < words.length; x++) {
        trie.insert(words[x])
    }
    for (let x = 0; x < words.length; x++) {
        retArr.push(trie.count(words[x]))
    }

    return retArr;
};


