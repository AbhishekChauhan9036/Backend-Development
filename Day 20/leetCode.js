/*Solve this three problem on Leetcode problems till lunch. 

1. Two Sum
2. Palindrome Number 
3. Remove Duplicates from sorted Array*/

/* 1.Two Sum Solution.....................................
Question Link:- https://leetcode.com/problems/two-sum/description/ */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
  return [];
};



/*2. Palindrome Number Solution.....................................
Question Link:- https://leetcode.com/problems/palindrome-number/  */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let temp = x,
    rTl = 0;
  while (x > 0) {
    rTl = rTl * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return rTl == temp;
};



/*3. Remove Duplicates from sorted Array Solution.....................................
Question Link:- https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/  */
var removeDuplicates = function(nums) {
    if(nums.length==0)return 0;
    let i=0;
    for(let j=1;j<nums.length;j++){
        if(nums[j]!=nums[i]){
            nums[++i]=nums[j];
        }
    }
    return i+1;
};