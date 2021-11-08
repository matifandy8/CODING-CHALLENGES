// function reversedNum(num) {
//     return (
//       parseFloat(
//         num
//           .toString()
//           .split('')
//           .reverse()
//           .join('')
//       ) * Math.sign(num)
//     )
//   }
//   var isPalindrome = function(num) {
//       reversedNum(num)
//       return num === reversedNum(num)

//   };

// console.log("se ejecuta" + isPalindrome(121) + reversedNum(122))

// numtest = [3,2,2,3], valtest = 3
// const removeElement = function(nums, val) {
//     const result = nums.filter(num => num !== val);
//     return result
// };

// console.log(removeElement(numtest,valtest))

// string = "   fly me   to   the moon  "

// var lengthOfLastWord = function(s) {
//     return s.trim().split(" ").pop().length;
// };

// console.log(lengthOfLastWord(string))

// d = [1,2,3]

// var plusOne = function(digits) {
//     for(var i = digits.length - 1; i >= 0; i--){
//         digits[i]++;
//        if(digits[i] > 9){
//            digits[i] = 0;
//        }else{
//            return digits;
//        }
//    }
//    digits.unshift(1);
//    return digits;
// };

// console.log(plusOne(d))

// test = 19
// const isHappy = function(n) {
//   return  sumOfSquares(n)
// };
// function sumOfSquares(numString) {
//     let arr = numString.toString(10).replace(/\D/g, '0').split('').map(Number);
//     let res = 0;
//     let suma = 0;
//     for(let i = 0; i < arr.length; i++){
//         res = Math.pow(arr[i], 2);
//         suma += res;
//      }
//      return suma;
// }
// 2
// console.log(isHappy(test))

// ----------------------------------
// n = [1,3,2,1]
// const getConcatenation = function(nums) {
//     const numbers = nums.concat(nums);
//     return numbers
// };
// ---------------------------------------
// ---------------------------
// var getConcatenation = function(A) {
//   return [ ...A, ...A ]
// };

// console.log(getConcatenation(n))
// --------------------------------------------
// ----------------------------

// numstest = [1], targettest = 1

// const searchRange = function(nums, target) {
//     let output = []
//     for(let i = 0; i < nums.length; i++){
//                let res = nums[i];
//                if(res === target){
//                    output.push(i)
//                   console.log(i)
//                }
//     }
//     if(output.length == 1 && output.length === 0){
//         return [-1,-1]
//     } else {
//         return output

//     }
// };
// console.log(searchRange(numstest,targettest))

// let test = [7, 1, 5, 3, 6, 4];

// const maxProfit = function (prices) {
//     let minBuyPrice = prices[0];
//     let maxProfit = 0;
//     for (let price of prices) {
//         if (price < minBuyPrice) {
//             minBuyPrice = price
//         } else if (price-minBuyPrice > maxProfit){
//             maxProfit = price-minBuyPrice
//         }
//     }
//     return maxProfit
// };

// console.log(maxProfit(test));

// test = [0,1,2,4,5,7]

// var summaryRanges = function(nums) {
//     var res = [];
//     for (var i = 0, left = nums[0]; i < nums.length; i++) {
//       if (nums[i] + 1 !== nums[i + 1]) {
//         res.push(left === nums[i] ? '' + nums[i] : left + '->' + nums[i]);
//         left = nums[i + 1];
//       }
//     }
//     return res;
// };

// let test = [3, 0, 1];
// var missingNumber = function (nums) {
//       // construct array of size n+1, to leave a spot for the missing element.
// 	// Assign each val to -1 so we can see which position was not filled
//     // O(n)
//     const res = new Array(nums.length+1).fill(-1);
	
// 	// "sort" the elements by assigning to the array based on val
//     // O(n)
//     for(const num of nums) {
//         res[num] = num;
//     }
    
// 	// the remaining -1 index is the missing value
//     // O(n-1)
//     return res.indexOf(-1);
// };

// console.log(missingNumber(test));


// const reverseString = function(s) {
//     return s.split('').reverse()
// };

// console.log(reverseString("string"))


// test1 = [1,3,5,6], test2 = 7

// var searchInsert = function(nums, target) {
//     let low = 0
//  let high = nums.length - 1

//  while (low <= high) {
//    const mid = Math.floor((low + high) / 2)
//    const guess = nums[mid]

//    if (guess === target) {
//      return mid
//    }

//    if (guess > target) {
//      high = mid - 1
//    } else {
//      low = mid + 1
//    }
//  }

//  return high + 1
// };


// console.log(searchInsert(test1,test2))


// const sortedSquares = function(nums) {
//     // let arrSquare = []
//     // for(let i = 0; i < nums.length; i++){
//     //     arrSquare.push(Math.pow(nums[i], 2)) 
//     // }
//     // return arrSquare.sort(function(a, b) {
//     //     return a - b;
//     //   });
// };

// console.log(sortedSquares([-4,-1,0,3,10]))




// test = [0,1,0,3,12]
// var moveZeroes = function(nums) {
//     zeros = []
//     nozeros = []
//   for(let i = 0; i < nums.length; i++){
//         if(nums[i] == 0){
//             zeros.push(nums[i])
//         } else {
//             nozeros.push(nums[i])
//         }
//     }
//     return nozeros.concat(zeros)
// };

// var moveZeroes = function(nums) {
//     let j = 0  // nonzero count

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
// 	  // swap elements
//       [nums[j], nums[i]] = [nums[i], nums[j]]
//       j++
//     }
//   }
// };
// // .reverse();
// console.log(moveZeroes(test))

// n = [2,3,4], t = 6
// const twoSum = (numbers, target) => {
//     let p1 = 0
//     let p2 = numbers.length - 1
    
//     while (numbers[p1] + numbers[p2] !== target) {
//         if (numbers[p1] + numbers[p2] > target) {
//             p2--
//         } else {
//             p1++
//         }
//     }
    
//     return [p1 + 1, p2 + 1]
// }


// console.log(twoSum(n,t))


// t = ["h","e","l","l","o"]
// var reverseString = function(s) {
//      return  s.reverse()
     
// };

// var reverseString = function(s) {
//    let reverse = []
//    for (let i = s.length -1; i > -1; i--) {
//        reverse.push(s[i])
//    }
//    return reverse
// };

// console.log(reverseString(t))


// test = "Let's take LeetCode contest"
// var reverseWords = function(s) {
//    arr = s.split(" ");
//    arrstrings = []
//     for (let i = 0; i < arr.length; i++) {
//        let wordreversed = arr[i].split("").reverse()
//         arrstrings.push(wordreversed.join())
//     }
//     return arrstrings.join(" ")
// };

// console.log(reverseWords(test))
// var reverseWords = function(s) {
//     let res = '';
//     let word = '';
//     for (let c of s) {
//         if (c === ' ') {
//             res += word + c;
//             word = '';
//         } else {
//             word = c + word;
//         }
//     }
//     return res + word;
// };

// test = "abcabcbb"

// var lengthOfLongestSubstring = function(s) {
//     let seen = new Set();
//     let longest = 0;
//     let l = 0;
//     for (let r = 0; r < s.length; r++) {
//       while (seen.has(s[r])) {
//         seen.delete(s[l]);
//         l++;
//       }
//       seen.add(s[r]);
//       longest = Math.max(longest, r - l + 1);
//     }
//     return longest;
// };

// console.log(lengthOfLongestSubstring(test))



// arr = [1, 12, -5, -6, 50, 3] 
//  k=4
// function findMaxSubarraySum(nums, k) {
//     let maxSum = -Infinity;
  
//     if (nums.length < k) {
//       return null;
//     }
  
//     for (let i = 0; i< nums.length - k + 1; i++) {
//       let tempSum = 0;
//       for (let j = i; j < i + k; j++){
//         tempSum += nums[j];
//         console.log(tempSum)
//       }
//       maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum;
//   }

//   console.log(findMaxSubarraySum(arr,k))





// one = "ab", two = "eidbaooo"
// var checkInclusion = function(s1, s2) {
//    return one.length;
// };

// console.log(checkInclusion(one,two))


// var fibBottomUp = (n) => {
//    var mem = [];
//    for (var i=0; i <=n; i++) {
//        if (i == 0) mem[i] = 0;
//        else if (i <=2) mem[i] = 1;
//        else {
//            mem[i] = mem[i-1] + mem[i-2];
//        }
//    }
//    return mem[n];
// }


// 
// test = 2
// const climbStairs = function(n) {
//       // First two pointers store the first two numbers of the Fibonacci sequence
//       let prev = 0;
//       let curr = 1;
//      // Our third pointer is used to store one side while we update the above two pointers.
//       let tmp;
  
//       // We use a for loop to iterate from 1 up to our number n with our constraints  being: 1 <= n <= 45
//       for(let i = 1; i <= n; i++){
//            // We store one side in our third pointer
//            tmp = prev;
//            // We then update that side to be equal to the other pointer
//            // This is because the next number is equal to the sum of the previous two numbers.
//           prev = curr;
//          // Next we add tmp which now holds our lower number to curr which holds our upper number to get our next number.
//         curr += tmp;
//      }
//      // Outside of our loop we return curr which stored our cumulative total while we iterated. 
//      return curr;
// };


// var climbStairs = function(n) {    
//    let prev = 0;
//    let cur = 1;
//    let temp;
   
//    for (let i = 0; i < n; i++) {
//        temp = prev;
//        prev = cur;
//        cur += temp; 
//    }
//    return cur;
// };

// var climbStairs = function(n) {
//    let previous = 0
//    let current = 1
   
//    for (let index = 1; index <= n; index += 1) {
//      current += previous
//      previous = current - previous
 
//    }
//    return current
 
//  };



// test = []
// const rob = function(nums) {
//    let element = 0;
//    for (let i = 0; i < nums.length; i++) {
//       if (i%2==0) {
//       console.log("El número "+i+" es par");
//       element += nums[i];
//      } else {
//          console.log("El número "+i+" es impar");
//      }       
//    }
//    return element;
// };
// console.log(rob(test))


// if (!nums.length) return 0;
// if (nums.length === 1) return nums[0];
// if (nums.length === 2) return Math.max(nums[0], nums[1]);

// let maxAtTwoBefore = nums[0];
// let maxAtOneBefore = Math.max(nums[0], nums[1]);

// for (let i = 2; i < nums.length; i++) {
//     const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
    
//     maxAtTwoBefore = maxAtOneBefore;
//     maxAtOneBefore = maxAtCurrent;
// }

// return maxAtOneBefore;


// test = [1,2,3]
// var rob2 = function(nums) {
//    let memo = [];
//    memo[0] = 0;
//    memo[1] = nums[0];
   
//    for (let i=1;i<nums.length;i++) {
//        memo[i+1] = Math.max(memo[i], memo[i-1] + nums[i]);
//        console.log(memo[i])
//    }
   
//    return memo[nums.length];   
// }
// console.log(rob2(test))

// n = [5, 7, 7, 8, 8, 10]
//  t= 8;
// var searchRange = function (nums, target) {
//    const length = nums.length - 1;
//    let start = 0;
//    let end = length;
//    let center;

//    // get the center
//    while (start <= end) {
//      center = Math.floor((start + end) / 2);
//      if (nums[center] === target) {
//        start = center;
//        end = center;
//        break;
//      } else if (nums[center] < target) start = center + 1;
//      else end = center - 1;
//    }

//    if (start > end) return [-1, -1];

//    // find the edges
//    while (nums[start - 1] === target) start--;
//    while (nums[end + 1] === target) end++;
//    return [start, end];
// };

// console.log(searchRange(n,t))


// var search = function (nums, target) {
//   let low = 0;
//   let high = nums.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     const guess = nums[mid];

//     if (guess === target) {
//       return mid;
//     }

//     if (guess > target) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }

//   return -1;
// };


// arr = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ];
// t = 7
// var searchMatrix = function (matrix, target) {
//   let merged = [].concat.apply([], matrix);
//     let low = 0;
//     let high = merged.length - 1;

//     while (low <= high) {
//       const mid = Math.floor((low + high) / 2);
//       const guess = merged[mid];

//       if (guess === target) {
//         return true;
//       }

//       if (guess > target) {
//         high = mid - 1;
//       } else {
//         low = mid + 1;
//       }
//     }

//     return false;
// };

// console.log(searchMatrix(arr,t));


// n = [-1, 0, 1, 2, -1, -4];
// var threeSum = function (nums) {
//   let sortnums = nums.sort((a, b) => a - b);
//    	let numObject = {};
//     for (let i = 0; i < sortnums.length; i++) {
//       let thisNum = sortnums[i];
//       numObject[thisNum] = i;
//     }
//     for (var i = 0; i < sortnums.length; i++) {
//       let diff = 0 - sortnums[i];
//       if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
//         return [i, numObject[diff]];
//       }
//     }   
// };;
// console.log(threeSum(n))

// h = [1, 2, 3, 3, 4, 4, 5];
// var deleteDuplicates = function (head) {
//   for (let i = 0; i < head.length; i++) {
//     if (head[i] === head[i+1]) {
//       head.splice(i,2)
//       i--
//     } ;
//   }
//   return head
// };

// console.log(deleteDuplicates(h))


// var minSubArrayLen = function(s, nums) {
//     let left = 0;
//     let right = 0;
//     let sum = 0;
//     let result = 0;
    
//     while(right < nums.length) {
//         sum += nums[right];
        
//         while(sum >= s) {
//             let len = right - left +1;
//             if(result === 0 || len < result) result = len;
//             sum -= nums[left];
//             left++
//         }
//         right++;
//     }
//     return result;
// };

// n = [1, 2, 3];
// function subsets(nums) {
//   const powerset = [];
//   generatePowerset([], 0);

//   function generatePowerset(path, index) {
//     powerset.push(path);
//     for (let i = index; i < nums.length; i++) {
//       generatePowerset([...path, nums[i]], i + 1);
//     }
//   }

//   return powerset;
// }
// console.log(subsets(n))



// let w1 = ["ab", "c"] 
// let w2 = ["a", "bc"]
// var arrayStringsAreEqual = function(word1, word2) {
//    return word1.join("") === word2.join("");
// };

// console.log(arrayStringsAreEqual(w1,w2))
//     arrayStringsAreEqual(w1, w2);

// n = [1, 2, 3, 1];
// var containsDuplicate = function (nums) {
//   const set1 = new Set(nums);
//   return  set1.size !== nums.length
// };
// console.log(containsDuplicate(n))


// n = [1, 2, 3,1];
// var containsDuplicate = function (nums) {
//      var hashMap = {};
//      var uniqueArr = [];

//      for (var i = 0; i < nums.length; i++) {
//        if (!hashMap.hasOwnProperty(nums[i])) {
//          uniqueArr.push(nums[i]);
//          hashMap[nums[i]] = i;
//        }
//        else{
//            return true
//        }
//      }
//      return false
// };
// console.log(containsDuplicate(n));


// var maxSubArray = function(nums) {
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
//   }
//   return Math.max(...nums)
// };

// n = [3, 2, 4];
// t = 6 
// const twoSum = (array, goal) => {
//   let indexes = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === goal) {
//         indexes.push(i);
//         indexes.push(j);
//       }
//     }
//   }
//   return indexes;
// };

// console.log(twoSum(n,t))

// let nr = 5
// var generate = function(numRows) {
//     // nos da el largo y debemos de crear  un array de 1 elemento 
//     // hasta el numRows 
//     // primera recorrida un aray de 1 despues 2 , 3 ,4 ,5
//     // el primer numero y el ultimo es 1 
//      let out = [];
//      if (numRows >= 1) {
//        out.push([1]);
//      }
//      if (numRows >= 2) {
//        out.push([1,1]);
//      }
//      while(){

//      }
//      return out
// };
// console.log(generate(nr))

// let se = "anagram"
// let te = "nagaram"

// const isAnagram = function (s, t) {
//     sarr = s.split("").sort().join("");
//     tarr = t.split("").sort().join("");
//     return sarr === tarr
// };

// console.log(isAnagram(se,te))

// var canConstruct = function (ransomNote, magazine) {
//   const arr = magazine.split("");
//   for (let i = 0; i < ransomNote.length; i++) {
//     if (arr.indexOf(ransomNote[i]) === -1) {
//       return false;
//     } else {
//       arr.splice(arr.indexOf(ransomNote[i]), 1);
//     }
//   }
//   return true;
// };


var firstUniqChar = function (s) {
  for (i = 0; i < s.length; i++)
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  return -1;
};


console.log(firstUniqChar("leetcode"));