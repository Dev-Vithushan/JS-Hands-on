function findTwoSum(numbers, sum) {
    let indices = [];
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === sum)
          indices.push([numbers[i], numbers[j]]);
      }
    }
    return indices;
  }
  
  const indices = findTwoSum([2, 7, 11, 15],9);//7+2 = 9
  console.log(indices);
  