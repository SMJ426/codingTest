function solution(names) {
    let answer = [];
    names.forEach((item, index) => {
        if((index+1)%5===1) {
            answer.push(item)
        }
    })
    return answer
}