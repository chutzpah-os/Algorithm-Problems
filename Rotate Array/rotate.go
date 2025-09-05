func rotate(nums []int, k int) {
    n := len(nums)
    k = k % n

    reverse := func(arr []int, start, end int) {
        for start < end {
            arr[start], arr[end] = arr[end], arr[start]
            start++
            end--
        }
    }

    reverse(nums, 0, n-1)
    reverse(nums, 0, k-1)
    reverse(nums, k, n-1)
}
