# LeetCode 217 - Contains Duplicate

##  Problem Description

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is **distinct**.

### Example 1:
Input: nums = [1, 2, 3, 1]
Output: true

### Example 2:
Input: nums = [1, 2, 3, 4]

Output: false

### Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true



### Constraints:
- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

---

## Solution (Python)

We use a **set** to keep track of elements we've already seen. If we encounter a number that's already in the set, we return `True`. Otherwise, we add it to the set. If we finish the loop without finding duplicates, we return `False`.

```python
class Solution:
    def containsDuplicate(self, nums):
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False

