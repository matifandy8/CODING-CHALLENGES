// Sliding Window
test = "abcabcbb"

var lengthOfLongestSubstring = function(s) {
    let seen = new Set();
    let longest = 0;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
      while (seen.has(s[r])) {
        seen.delete(s[l]);
        l++;
      }
      seen.add(s[r]);
      longest = Math.max(longest, r - l + 1);
    }
    return longest;
};

console.log(lengthOfLongestSubstring(test))


// Sliding Window O(n)
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
    
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }


  // -------------------------------
  // ------
  // --------------------------------------------

  var fibBottomUp = (n) => {
    var mem = [];
    for (var i=0; i <=n; i++) {
        if (i == 0) mem[i] = 0;
        else if (i <=2) mem[i] = 1;
        else {
            mem[i] = mem[i-1] + mem[i-2];
        }
    }
    return mem[n];
}