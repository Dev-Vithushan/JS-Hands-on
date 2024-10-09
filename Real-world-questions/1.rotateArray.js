
function rotateArraySplice(nums, k) {
    const n = nums.length;
    k = k % n; 

    // Remove the last k 
    // elements from  array
    const removed = nums.splice(-k);

    // Insert the removed elements
    // at starting of the array
    nums.unshift(...removed);

    return nums;
}


const nums = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArraySplice(nums, k)); 









