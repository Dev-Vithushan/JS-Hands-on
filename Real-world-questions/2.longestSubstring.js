function lengthOfLongestSubstring(check) {
    var letters = check.split("");
    var max = 0;
    var result = new Map();
    var start = 0;
    
    for (var i = 0; i < letters.length; i++) {
      if (!result.has(letters[i])) {
        result.set(letters[i], i);
      } else {
        i = result.get(letters[i]);
        result.clear();
      }
      
      if (max < result.size) {
        max = result.size;
      }
    }
    return max;
  }
  

  console.log(lengthOfLongestSubstring("abcabcbb"))//3