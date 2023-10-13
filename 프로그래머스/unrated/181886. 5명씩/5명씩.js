function solution(names) {
    let answer = [];
    names.forEach((item, index) => {
        answer = (index+1)%5 ===1 ? [...answer,item] : answer
        }
    )
    return answer
}