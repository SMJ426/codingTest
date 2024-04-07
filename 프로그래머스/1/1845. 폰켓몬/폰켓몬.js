function solution(nums) {
    const mySet = [...new Set(nums)];
    const limit = nums.length/2
    return mySet.length > limit ? limit : mySet.length
   
}