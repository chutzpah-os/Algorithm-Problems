
class Solution(object):
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


# Time: 0(n^2)
# Space: 0(n)


