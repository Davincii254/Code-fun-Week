// AngleBrackets
// Find the maximum possible length of a symmetric fragment which can be obtained after replacing question marks in a given string with "<" or ">".
// Task description
// A string made of an even number of characters ("<" and/or ">") is called symmetric if all characters in its first half are "<" and all characters in its second half are ">". Examples of symmetric strings are: "" (empty string), "<>", "<<>>", "<<<>>>", etc.

// Write a function:

// function solution(S);

// that, given a string S made of N characters ("<", ">" and/or "?")", returns the length of the longest symmetric substring that can be obtained after replacing question marks with "<" or ">" characters.

// Examples:

// 1. For S = "<><??>>", after replacing all question marks with "<", the string "<><<<>>" is obtained. Its longest symmetric substring is "<<>>", so the function should return 4.

// 2. For S = "??????", the optimal option is to replace the first three question marks with "<" and the next three question marks with ">", thus obtaining the string "<<<>>>". The function should return 6.

// 3. For S = "<<?", the function should return 2.

// Write an efficient algorithm for the following assumptions:

// the length of string S is within the range [1..200,000];
// string S is made only of the following characters: '<', '>' and/or '?'.

function solution(S) {
    // Initialize a variable to keep track of the maximum length of the symmetric substring
    let max = 0;

    // Loop through all possible substrings by using two pointers (i and j)
    for (let i = 0; i < S.length; i++) {
        for (let j = S.length - 1; j > i; j--) {
            // Calculate the length of the current substring (i to j)
            let length = symmetricLength(S, i, j);

            // Update the maximum length if the current length is greater than the current maximum
            if (length > max) {
                max = length;
            }
        }
    }

    // Return the maximum length of the symmetric substring
    return max;
}

// Function to calculate the length of a symmetric substring between two indices (i and j)
function symmetricLength(S, i, j) {
    // Calculate the length of the current substring
    let length = (j - i) + 1;

    // If the length is odd, the substring cannot be symmetric
    if (length % 2 !== 0) {
        return 0;
    }

    // Use two pointers (i and j) to check if the substring is symmetric
    while (i < j) {
        // Get the characters at the current positions
        let a = S[i];
        let b = S[j];

        // Check if the characters are valid to form a symmetric substring
        if ((a === "?" && b === "?") || (a === "<" && b === "?") || (a === "?" && b === ">") || (a === "<" && b === ">")) {
            // If valid, move the pointers inward to check the next characters
            i++;
            j--;
        } else {
            // If not valid, the substring is not symmetric, return 0
            return 0;
        }
    }

    // Return the length of the symmetric substring
    return length;
}
