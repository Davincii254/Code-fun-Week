// ArrayFilterVarOpal
// Given an array of integers, filter them according to a simple condition and return an aggregate of the results.
// Task description
// Write a function:

// function solution(A);

// that, given an array A consisting of N integers, returns the maximum among all integers which are multiples of 4.

// For example, given array A as follows:

// [-6, -91, 1011, -100, 84, -22, 0, 1, 473]

// the function should return 84.

// Assume that:

// N is an integer within the range [1..1,000];
// each element of array A is an integer within the range [−10,000..10,000];
// there is at least one element in array A which satisfies the condition in the task statement.

function solution(A) {
    // Create an empty array to store elements divisible by 4
    let isDivisibleby4 = [];
    
    // Iterate over each element 'a' in array 'A'
    for (let a of A) {
        // Check if 'a' is divisible by 4 (remainder is 0)
        if (a % 4 === 0) {
            // If divisible by 4, add 'a' to the 'isDivisibleby4' array
            isDivisibleby4.push(a);
        }
    }
    
    // Initialize the variable 'max' to a very small value
    let max = -10000;
    
    // Iterate over each element 'a' in the 'isDivisibleby4' array
    for (let a of isDivisibleby4) {
        // Update 'max' if 'a' is greater than the current 'max'
        if (max < a) {
            max = a;
        }
    }
    
    // Return the maximum element divisible by 4
    return max;
}

// Test Cases
console.log(solution([3, 6, 8, 12, 5])); // Output: 12
console.log(solution([1, 7, 15, 16, 20])); // Output: 20
console.log(solution([4, 8, 12, 16, 20])); // Output: 20
console.log(solution([2, 6, 10, 14, 18])); // Output: -10000 (No element divisible by 4)
console.log(solution([])); // Output: -10000 (Empty array)
