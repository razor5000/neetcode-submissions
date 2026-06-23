class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      let current = [nums[0]];

      for (let i = 1; i < nums.length; i++) {
        if (current.includes(nums[i])) {
          return true;
        } else {
          current.push(nums[i])
        }
      }

      return false;
    }
}
