#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        int farthest = 0;

        for (int i = 0; i < n; ++i) {
            if (i > farthest) return false; 
            farthest = max(farthest, i + nums[i]);
        }

        return true; 
    }
};

// Código de teste opcional
int main() {
    Solution sol;
    vector<int> nums1 = {2,3,1,1,4};
    vector<int> nums2 = {3,2,1,0,4};

    cout << boolalpha; 
    cout << "Test 1: " << sol.canJump(nums1) << endl; 
    cout << "Test 2: " << sol.canJump(nums2) << endl; 

    return 0;
}
