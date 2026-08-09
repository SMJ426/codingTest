def solution(array):
    sortedArr = sorted(array)
    answer = sortedArr[len(sortedArr) // 2]
    return answer