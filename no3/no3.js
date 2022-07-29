function isAnagram(word1, word2) {
  const words1 = word1.replaceAll(' ', '').toLowerCase().split("").sort().join();
  const words2 = word2.replaceAll(' ', '').toLowerCase().split("").sort().join();
  result = words1===words2;
  return result;
}

// Test Case
console.log(isAnagram('karet', 'raket')); // True
console.log(isAnagram('Balok', 'Lobak')); // True
console.log(isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort')); // True
console.log(isAnagram('cicak', 'tengkorak')); // False
