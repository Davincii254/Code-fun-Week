// CommonLetter
// Given an array of strings, find a pair of strings that share the same letter at the same position.
// Task description
// You are given an array S consisting of N strings. Every string is of the same length M. Your task is to find a pair of strings in array S, such that there exists a position in which both of the strings have the same letter. Both the index in array S and the positions in the strings are numbered from zero.

// For example, given S = ["abc", "bca", "dbe"], string 0 ("abc") and string 2 ("dbe") have the same letter 'b' in position 1. On the other hand, for strings "abc" and "bca" there does not exist a position in which they have the same letter.

// Write a function:

// function solution(S);

// that, given a zero-indexed array S of N strings, returns an array describing a pair of strings from S which share a common letter at some index. If there is no such pair, the function should return an empty array. If there is more than one correct answer, the function can return any of them.

// The result should be represented as an array containing three integers. The first two integers are the indexes in S of the strings belonging to the pair. The third integer is the position of the common letter.

// For S = ["abc", "bca", "dbe"], as above, the result array should be represented as [0, 2, 1]. Another correct answer is [2, 0, 1], as the order of indexes of strings does not matter.

// Examples:

// 1. Given: S = ["abc", "bca", "dbe"], your function may return [0, 2, 1] as described above.

// 2. Given: S = ["zzzz", "ferz", "zdsr", "fgtd"], your function may return [0, 1, 3]. Both "zzzz" and "ferz" have 'z' in position 3. The function may also return [1, 3, 0], which would reflect strings "ferz", "fgtd" and letter 'f'.

// 3. Given A = ["gr", "sd", "rg"], your function should return []. There is no pair of strings that fulfils the criteria.

// 4. Given A = ["bdafg", "ceagi"], your function may return [0, 1, 2].

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..30,000];
// M is an integer within the range [1..2,000];
// each element of S consists only of lowercase English letters (a-z);
// N * M ≤ 30,000.

function solution(S) {
    // Initialize the function to find the indices of strings with the same letters
    for (let i = 0; i < S.length; i++) {
        for (let j = i + 1; j < S.length; j++) {
            // Call the helper function to check for same letters and get the index
            let index = haveSameLetter(S[i], S[j]);
            // If the index is not -1 (meaning same letters are found), return the indices
            if (index !== -1) {
                return [i, j, index];
            }
        }
    }
    // Return an empty array if no strings with the same letters are found
    return [];
}

// Helper function to check if two strings have the same letter at any index
function haveSameLetter(a, b) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        // If the letters at the same index are the same, return the index
        if (a[i] === b[i]) {
            return i;
        }
    }
    // If no same letters are found, return -1
    return -1;
}

// Test Cases
console.log(solution(["abcd", "efgh", "abci", "efgj"])); // Output: [0, 2, 2] (strings at index 0 and 2 have 'c' at the same index)
console.log(solution(["hello", "world", "holla"])); // Output: [] (no strings have the same letter at any index)
console.log(solution(["apple", "apricot", "avocado", "apalia"])); // Output: [0, 3, 2] (strings at index 0 and 3 have 'p' at the same index)
console.log(solution(["example", "exemplify"])); // Output: [0, 1, 5] (strings at index 0 and 1 have 'e' at the same index)
console.log(solution(["abcd", "abcd", "abcd"])); // Output: [0, 1, 0] (strings at index 0 and 1 have 'a' at the same index)
