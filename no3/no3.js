function isAnagram(word1, word2) {
  const words1 = word1.replaceAll(' ', '');
  const words2 = word2.replaceAll(' ', '');
  const word11 = words1.toLowerCase();
  const word22 = words2.toLowerCase();
  const word111 = word11.split("");
  const word222 = word22.split("");
  const words111 = word111.sort();
  const words222 = word222.sort();
  const wordx1 = words111.join();
  const wordx2 = words222.join();
  const result = wordx1.includes(wordx2);
  return result;
}

// Test Case
console.log(isAnagram('karet', 'raket')); // True
console.log(isAnagram('Balok', 'Lobak')); // True
console.log(isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort')); // True
console.log(isAnagram('cicak', 'tengkorak')); // False
