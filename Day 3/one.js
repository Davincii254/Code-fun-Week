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
    // Implement your solution here
    let isDivisibleby4 = [];
    for ( let a of A){
        if (a%4 === 0 ){
            isDivisibleby4.push(a);
        }
    }
    let max = -10000;
    for (let a of isDivisibleby4){
        if(max < a) {
            max = a;
        }  
    }
    return max;

}