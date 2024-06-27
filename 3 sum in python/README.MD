
#Question 

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.


## Intuition
The goal is to find all unique triplets in the array that sum up to zero.

## Approach
1. **Hashmap and Set for Deduplication**:
   - Use a hashmap (`h`) to store the indices of each number in the list.
   - Use a set (`s`) to store the unique triplets.

2. **Nested Loops to Find Pairs**:
   - Iterate through each pair of numbers in the list.
   - For each pair, calculate the `desired` third number that would make the triplet sum to zero.
   - Check if the `desired` number is in the hashmap and ensure that the indices are not the same as the current pair's indices.
   - Add the sorted triplet to the set to ensure uniqueness.

3. **Return the Set**:
   - Convert the set of triplets to a list and return.

## Complexity
- **Time Complexity**: The nested loops result in a time complexity of \(O(n^2)\), where \(n\) is the length of the array.
- **Space Complexity**: The space complexity is \(O(n)\) due to the storage used by the hashmap and the set.

## Code
```python
lass Solution(object):
    def threeSum(self, nums):
        h= {} # inicializa um dicionário vazio
        n = len(nums) # calcula o comprimento da lista 'nums' e armazena esse valor na variável 'n'
        # a quantidade é 6, visto que há 6 elementos # nums = [-1,0,1,2,-1,-4]; já o índice vai de 0 a 5, pois a posição inicial começa na posição 0, que neste caso, corresponde a -1
        s = set()
        #s = set(): Inicializa um conjunto vazio para armazenar os tripletos únicos
        for i, num in enumerate(nums): 
            h[num]= i 

        for i in range(n): # Itera sobre cada índice i em nums.
            for j in range(i+1, n):
                desired = -nums[i] - nums[j]
                if desired in h and h[desired] != i and h[desired] !=j:
                    s.add(tuple(sorted([nums[i], nums[j], desired])))
        return s


