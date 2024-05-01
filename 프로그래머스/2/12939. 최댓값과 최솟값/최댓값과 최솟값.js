function solution(s) {
    let numArr = s.split(' ');
    let answer = `${Math.min(...numArr)} ${Math.max(...numArr)}`
    return answer
}