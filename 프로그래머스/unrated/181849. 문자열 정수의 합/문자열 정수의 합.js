function solution(num_str) {
    let sum = 0
    num_str.split('').forEach(item => {
        sum += Number(item)
    })
    return sum
}