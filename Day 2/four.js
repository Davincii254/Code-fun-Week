// DecreasePollution
// Given an array of integers, find the minimum number of times its elements must be divided by 2 in order to reduce the sum of the array by at least half.
// Task description
// An industrial company has N factories, each producing some pollution every month. The company has decided to reduce its total fume emissions by equipping some of the factories with one or more filters.

// Every such filter reduces the pollution of a factory by half. When a second (or subsequent) filter is applied, it again reduces by half the remaining pollution emitted after fitting the existing filter(s). For example, a factory that initially produces 6 units of pollution will generate 3 units with one filter, 1.5 units with two filters and 0.75 units with three filters.

// You are given an array of N integers describing the amount of pollution produced by the factories. Your task is to find the minimum number of filters needed to decrease the total sum of pollution by at least half.

// Write a function:

// function solution(A);

// which, given an array of integers A of length N, returns the minimum number of filters needed to reduce the total pollution by at least half.

// Examples:

// 1. Given A = [5, 19, 8, 1], your function should return 3. The initial total pollution is 5 + 19 + 8 + 1 = 33. We install two filters at the factory producing 19 units and one filter at the factory producing 8 units. Then the total pollution will be 5 + ((19 / 2) / 2) + (8 / 2) + 1 = 5 + 4.75 + 4 + 1 = 14.75 which is less than 33 / 2 = 16.5, so we have achieved our goal.

// 2. Given A = [10, 10], your function should return 2, because we may install one filter at each factory.

// 3. Given A = [3, 0, 5], your function should return 2, because it is sufficient to install one filter at each factory producing a non-zero amount of pollution.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..30,000];
// each element of array A is an integer within the range [0..70,000].

function solution(A) {
    // Calculate the total sum of elements in the array
    let total = A.reduce((sum, val) => sum + val, 0);
  
    // Calculate the target value by dividing the total sum by 2
    let target = total / 2;
  
    // Initialize a count variable to keep track of the number of operations
    let count = 0;
  
    // Perform the operation until the total sum is greater than the target
    while (total > target) {
      count++; // Increment the count for each operation
  
      // Find the maximum value in the array
      let max_p = Math.max(...A);
  
      // Subtract half of the maximum value from the total sum
      total -= max_p / 2;
  
      // Find the index of the maximum value in the array
      let max_p_index = A.indexOf(max_p);
  
      // Remove the maximum value from the array
      A.splice(max_p_index, 1);
  
      // Push half of the maximum value back into the array
      A.push(max_p / 2);
    }
  
    // Return the count as the output of the function
    return count;
  }
  