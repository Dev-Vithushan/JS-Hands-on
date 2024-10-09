// Write a function that returns the first non-repeating character in a string.

// Input: "swiss"
// Output: "w"

function firstNonRepeatingCharacter(str) {
    const charCount = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; 
}

const input = "swiss";
const result = firstNonRepeatingCharacter(input);
console.log(result); 