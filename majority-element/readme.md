
# 169. Majority Element

**Difficulty:** Easy

## Problem Description

Given an array `nums` of size `n`, return the **majority element**.

The **majority element** is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

---

## Examples

**Example 1:**

```python
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**

```python
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

---

## Constraints

* `n == nums.length`
* `1 <= n <= 5 * 10^4`
* `-10^9 <= nums[i] <= 10^9`

---

## Follow-up

Can you solve the problem:

* in **linear time** (O(n))?
* using **constant space** (O(1))?


## Full Code
```python3

class Solution:
    def majorityElement(self, nums):
        count = 0
        candidate = None

        for num in nums:
            if count == 0:
                candidate = num
            count += (1 if num == candidate else -1)

        return candidate
```