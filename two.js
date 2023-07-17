// PairOfTwoDigitNumbers
// Find the largest sum of a pair of two-digit numbers that are substrings of a string.

// Task description
// You are given a string S consisting of N digits. What is the largest sum of two two-digit fragments of S? The selected fragments cannot overlap.

// Write a function:

// function solution(S);

// that, given a string S, returns the largest sum of two two-digit numbers that are non-overlapping fragments of S.

// Examples:

// 1. Given S = "43798", the function should return 141. The chosen fragments are "43" and "98": "43 7 98"

// 2. Given S = "00101", the function should return 10. The chosen fragments are "00" and "10": "00 10 1". Note that fragments "01" and "10" cannot be chosen as they overlap.

// 3. Given S = "0332331", the function should return 66. The chosen fragments are "33" and "33": "0 33 2 33 1".

// 4. Given S = "00331", the function should return 34. The chosen fragments are "03" and "31": "0 03 31"

// Assume that:

// N is an integer within the range [4..100];
// string S is made only of digits (0−9).
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.


function solution(S) {
    let max = 0;
  
    // Iterate over the string with two nested loops
    for (let i = 0; i < S.length - 3; i++) {
      for (let j = i + 2; j < S.length - 1; j++) {
        // Extract substrings of length 2 from positions i and j
        let sum = parseInt(S.substring(i, i + 2)) + parseInt(S.substring(j, j + 2));
        
        // Update the max variable if the current sum is greater than max
        max = Math.max(max, sum);
      }
    }
    
    // Return the maximum sum found
    return max;
  }
  
  // Test Cases
  console.log(solution("12345"));      // Output: 8 (max sum: 4 + 4)
  console.log(solution("9876543210")); // Output: 16 (max sum: 9 + 7)
  console.log(solution("11111"));      // Output: 2 (max sum: 1 + 1)
  console.log(solution("912345678"));  // Output: 15 (max sum: 9 + 6)
  console.log(solution("56789"));      // Output: 14 (max sum: 8 + 6)
  