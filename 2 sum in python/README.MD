
#Question 

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


## Intuition
The Two Sum problem involves finding two numbers in an array that add up to a specific target. A brute force approach would involve checking all pairs of numbers to see if their sum equals the target. However, this approach is not efficient for large arrays. By using a hashmap (dictionary in Python), we can solve this problem in linear time.

## Approach
1. **Hashmap**
The idea is to use a hashmap (or dictionary) to store the difference between the target and the current element, and the index of the current element.


2. **Explanation of the Hashmap Code**

    - Initialization: 
        Create an empty dictionary prevMap to store the values and their indices.

    - Loop Through Array:
        For each element n in nums (using enumerate to get both index i and value n):
        
        Calculate diff as the difference between target and n.
        
        Check if diff is in prevMap.
            
            If it is, return the indices [prevMap[diff], i] because these two numbers add up to the target.

            If diff is not in prevMap, add the current number n with its index i to prevMap.

    - Return: The solution guarantees exactly one valid answer, so the return statement inside the loop will always execute when a pair is found.


***Example Execution***
Example Execution
For nums = [2, 7, 11, 15] and target = 9:

Initialize prevMap = {}.
First iteration (i=0, n=2): diff = 9 - 2 = 7. 7 is not in prevMap. Add 2: 0 to prevMap.
Second iteration (i=1, n=7): diff = 9 - 7 = 2. 2 is in prevMap. Return [prevMap[2], 1] which is [0, 1].
For nums = [3, 2, 4] and target = 6:

Initialize prevMap = {}.
First iteration (i=0, n=3): diff = 6 - 3 = 3. 3 is not in prevMap. Add 3: 0 to prevMap.
Second iteration (i=1, n=2): diff = 6 - 2 = 4. 4 is not in prevMap. Add 2: 1 to prevMap.
Third iteration (i=2, n=4): diff = 6 - 4 = 2. 2 is in prevMap. Return [prevMap[2], 2] which is [1, 2].
For nums = [3, 3] and target = 6:

Initialize prevMap = {}.
First iteration (i=0, n=3): diff = 6 - 3 = 3. 3 is not in prevMap. Add 3: 0 to prevMap.
Second iteration (i=1, n=3): diff = 6 - 3 = 3. 3 is in prevMap. Return [prevMap[3], 1] which is [0, 1].



## Complexity
**Time Complexity**: O(n), where n is the number of elements in the input list. Each element is processed at most twice (once when checking if the difference is in the hashmap and once when adding the element to the hashmap).
**Space Complexity**: O(n), because we store at most n elements in the hashmap.

## Code
```python
class Solution(object):
    def twoSum(self, nums, target):
        prevMap = {} #val : index
        for i, n in enumerate(nums):
            diff = target - n
            if diff in prevMap:
                return [prevMap[diff], i]
            prevMap[n] = i
        return 