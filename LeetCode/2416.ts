class TrieNode {
  children: Map<string, TrieNode>;
  count: number;
  isEndOfWord: boolean;

  constructor() {
      this.children = new Map<string, TrieNode>();
      this.count = 0;
      this.isEndOfWord = false;
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
      }
      node.isEndOfWord = true;
  }

  traverse(word: string): void {
      let node = this.root;
      for (const char of word) {
          console.log(char);
          node = node.children.get(char);
      }

  }
}


function sumPrefixScores(words: string[]): number[] {
  let trie = new Trie();
  let retArr = new Array(words.length);
  console.log(words);

  for (let x = 0; x < words.length; x++) {
      trie.insert(words[x])
  }
  for (let x = 0; x < words.length; x++) {
      console.log(trie.traverse(words[x]))
      
  }

  return [0]
};


