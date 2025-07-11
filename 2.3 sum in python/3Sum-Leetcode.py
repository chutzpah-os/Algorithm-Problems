class Solution(object):
    def threeSum(self, nums):
        h= {}  # Dictionary to store the index of each number
        n = len(nums)  # Calculate the length of the list 'nums' and store this value in the variable 'n'
        # The count is 6, since there are 6 elements # nums = [-1,0,1,2,-1,-4]; whereas the index goes from 0 to 5, as the initial position starts at position 0, which in this case corresponds to -1
        s = set()  # Set to store unique triplets
        for i, num in enumerate(nums):  # Fill the dictionary h with the index of each number in nums
            h[num] = i  

        for i in range(n):  # Iterates over each index i in nums.
            for j in range(i + 1, n):  # Iterates over each index j in nums that comes after i.
                # for j in range(i + 1, n) iterates over indices that come after i, ensuring that j is always greater than i. This avoids the formation of duplicate pairs and ensures that i != j.
                desired = -nums[i] - nums[j]  # The value we want to find
                if desired in h and h[desired] != i and h[desired] != j: 
                    s.add(tuple(sorted([nums[i], nums[j], desired])))  # Adds the triplet (sorted) to the set to avoid duplicates

        return s
    
    #desired in h '''Checks if the desired value is present as a key in the dictionary h.'''
    #h[desired] != i '''Checks if the value associated with the key desired in the dictionary h is not equal to the current index i. This is important because we do not want to use the same element twice in the triplet.''' 
    #h[desired] != j: ''''Checks if the value associated with the key desired in the dictionary h is not equal to the current index j. This ensures that i, j, and the index found h[desired] are all different from each other.'''

'''Consider nums =[-1, 0, 1, 2, -1, -4] ; n=6; When i = 0, nums[i] is -1.
Second Loop (j): j varies from 1 to 5 (that is, i + 1 to n-1).'''

# Time: O(n^2)
# Space: O(n)