class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const numsCollection = new Set(nums);

      if (nums.length !== numsCollection.size) {
        return true;
      } else {
        return false;
      }
    }
}
