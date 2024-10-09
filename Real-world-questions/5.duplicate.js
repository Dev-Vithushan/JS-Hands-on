function duplicates(nums) {
    if (nums.length === 0 ) return 0;

    let i = 0;

    for (let j=1; j < nums.length; j++) {

        if (nums[j] !== nums[i] ) {
            i++;
            nums[i] = nums [j];
        }
    }
    
    return i + 1 ;
}

const nums = [1,1,1,1,2,2,2,2,3,3,3,3,3,3,3] ;
const newlength = removeduplicates(nums);
console.log(nums.slice(0, newlength));
console.log(newlength);//output : 3