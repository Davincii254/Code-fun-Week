// DifferentNeighboursLetters
// Replace all instances of '?' in a given string in such a way that no letter appears next to an identical letter.
// Task description
// Rick is a fan of logic-based games. However, he is bored of the classic ones, like Sudoku and Mastermind, since he has solved so many of them. Recently he found a new game in which one is given a string with some question marks in it. The objective is to replace all of the question marks with letters (one letter per question mark) in such a way that no letter appears next to another letter of the same kind.

// Write a function:

// function solution(riddle);

// that, given a string riddle, returns a copy of the string with all of the question marks replaced by lowercase letters (a−z) in such a way that the same letters do not occur next to each other. The result can be any of the possible answers as long as it fulfils the above requirements.

// Examples:

// 1. Given riddle = "ab?ac?", your function might return "abcaca". Some other possible results are "abzacd", "abfacf".

// 2. Given riddle = "rd?e?wg??", your function might return "rdveawgab".

// 3. Given riddle = "????????", your function might return "codility".

// Write an efficient algorithm for the following assumptions:

// the length of the string is within the range [1..100,000];
// string riddle consists only of lowercases letters (a − z) or '?';
// it is always possible to turn string 'riddle' into a string without two identical consecutive letters.

function solution(riddle) {
    // Define the alphabet array
    const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  
    // Check if the riddle string is empty or does not contain '?'
    if (!riddle || riddle.indexOf('?') === -1) {
      return riddle; // Return the riddle string as it is
    }
  
    // Create an empty string builder array to store the result
    const sb = [];
  
    // Initialize a counter variable to keep track of the alphabet index
    let cnt = 0;
  
    // Iterate over each character in the riddle string
    for (let i = 0; i < riddle.length; i++) {
      let current = riddle.charAt(i); // Get the current character
      let prev = '\0'; // Initialize the previous character as null character '\0'
      let next = '\0'; // Initialize the next character as null character '\0'
  
      // Check if the current character is '?'
      if (current === '?') {
        current = alpha[cnt]; // Replace the '?' with the alphabet at the current index
        
        // Get the previous character if it exists
        if (i !== 0) {
          prev = sb[i - 1];
        }
  
        // Get the next character if it exists
        if (i !== riddle.length - 1) {
          next = riddle.charAt(i + 1);
        }
  
        // Check if the current character is the same as the previous or next character
        while (current === prev || current === next) {
          current = alpha[++cnt]; // Increment the counter and get the next alphabet
          
          // Reset the counter to 0 when it reaches 25 (to cycle through the alphabet)
          if (cnt % 25 === 0) {
            cnt = 0;
          }
        }
        
        // Add the current character to the string builder array
        sb.push(current);
      } else {
        // If the current character is not '?', add it to the string builder array as it is
        sb.push(current);
      }
    }
  
    // Join the characters in the string builder array to form the final result
    return sb.join("");
  }
  
  