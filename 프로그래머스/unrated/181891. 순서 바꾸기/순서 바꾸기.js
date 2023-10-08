function solution(num_list, n) {
    
    const arrA = num_list.slice(0,n)
    const arrB = num_list.slice(n)
    const answer = [...arrB, ...arrA]
    return answer
}