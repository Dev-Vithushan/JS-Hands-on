// Given a sorted array, remove duplicates in place such that each element appears only once and return the new length.

// Input: [1, 1, 2]
// Output: [1, 2] with length 2

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let uniqueIndex = 1; 

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[uniqueIndex] = nums[i];
            uniqueIndex++; 
        }
    }

    return uniqueIndex; 
}


const input = [1, 1, 2];
const newLength = removeDuplicates(input);
console.log(newLength); 
console.log(input.slice(0, newLength)); 
