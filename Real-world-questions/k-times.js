// Question-01
// Write a function that rotates an array k times to the right.

// Input: [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; 
    
   
    const rotatedPart = arr.slice(-k);
    const remainingPart = arr.slice(0, n - k);
    
    return rotatedPart.concat(remainingPart);
}
const arr = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(arr, k);
console.log(rotatedArray); 