function solution(arr, divisor) {
    let answer = [];
    let sortedArr = arr.sort(function(a,b){
        return a-b;
    });
    sortedArr.forEach(item=>{
        if(item% divisor === 0){
            answer.push(item)
        }
    })
    if(answer.length ===0) answer.push(-1);
    
    return answer;
}