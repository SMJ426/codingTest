function solution(arr) {
    var answer = arr.map(item => {
        if(item>=50 && item%2 ===0) item /= 2
        else if (item<50 && item%2!==0) item *= 2
        else item
        return item
    })
    return answer;
}