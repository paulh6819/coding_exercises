import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//What are all of the compound words? These are words made up of 2 smaller words. For example, “SNOWMAN” is a compound word made
// from “SNOW” and “MAN”, and “BEACHBALL” is a compound word made from “BEACH” and “BALL”.
console.log("hey");

// Come back to the exact big O notation is here
// Try to figure out from a hardware stand point, what could posssibly make this run faster.

// function combinedWords(words) {
//   const combinedWords = [];

//   for (let word of words) {
//     for (let i = 0; i < words.length; i++) {
//       for (let j = 0; j < words.length; j++) {
//         if (word !== words[i] && word + words[i] === words[j]) {
//           combinedWords.push(word);
//         }
//       }
//     }
//   }
//   return combinedWords;
// }

// console.log(combinedWords(scrabbleWords));

//this one is about testing the time and using set

// This solution uses a trie, as an oportunity to learn tries and classes work.

class usingTrieNodeToSolve {
  constructor() {
    this.children = {};
    this.isendOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new usingTrieNodeToSolve();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new usingTrieNodeToSolve();
      }
      node = node.children[char];
    }
    node.isendOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (const char of word) {
      node = node.children[char];
      if (!node) {
        return false;
      }
    }
    return node.isendOfWord;
  }
}

function findWordsCompound(words) {
  const trie = new Trie();
  words.forEach((word) => trie.insert(word));

  const compoundWord = words.filter((word) => {
    for (let i = 1; i < word.length; i++) {
      let prefix = word.slice(0, i);
      let suffix = word.slice(i);
      if (trie.search(prefix) && trie.search(suffix)) {
        return true;
      }
    }
    return false;
  });
  return compoundWord;
}

console.log(findWordsCompound(scrabbleWords));
console.log("hey hey");
