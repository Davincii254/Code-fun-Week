//  EvenWord
// Count the minimum number of letters that must be deleted from a word to make it an even one.
// Task description
// In an even word, each letter occurs an even number of times.

// Write a function solution that, given a string S consisting of N characters, returns the minimum number of letters that must be deleted to obtain an even word.

// Examples:

// 1. Given S = "acbcbba", the function should return 1 (one letter b must be deleted).

// 2. Given S = "axxaxa", your function should return 2 (one letter a and one letter x must be deleted).

// 3. Given S = "aaaa", your function should return 0 (there is no need to delete any letters).

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..200,000];
// string S is made only of lowercase letters (a−z).


function solution(S) {
    // Create an empty object to store character frequencies
    let map = {};
    
    // Iterate over each character in the string
    for (let i = 0; i < S.length; i++) {
        // If the character is already in the map, increment its count
        if (map[S[i]]) {
            map[S[i]]++;
        } else {
            // If the character is not in the map, set its count to 1
            map[S[i]] = 1;
        }
    }
    
    // Initialize a variable to keep track of the count of characters with odd frequencies
    let count = 0;
    
    // Iterate over each key (character) in the map
    for (let key in map) {
        // If the count of the character is odd, increment the count variable
        if (map[key] % 2 === 1) {
            count++;
        }
    }
    
    // Return the final count
    return count;
}


// Test Cases
console.log(solution("abcabc"));    // Output: 0
console.log(solution("aabbc"));     // Output: 1
console.log(solution("aaabbbccc")); // Output: 3
console.log(solution(""));          // Output: 0
console.log(solution("xyz"));       // Output: 3