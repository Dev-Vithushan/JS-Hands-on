// rite a function that finds two numbers in an array that sum up to a given target.

// Input: [2, 7, 11, 15], target = 9
// Output: [0, 1] (because 2 + 7 = 9)

function twoSum(arr, target) {
    const numMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), arr[i]];
        }
        
        numMap.set(arr[i], arr[i]); 
    }

    return null; 
}

const arr = [2, 7, 11, 15];
const target = 9;
const result = twoSum(arr, target);
console.log(result); 